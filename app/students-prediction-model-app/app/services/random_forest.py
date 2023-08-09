import dill
import joblib
import json
import numpy as np
import pandas as pd
import warnings
warnings.filterwarnings("ignore", category=UserWarning)


class RandomForestService:
    __components = {
        'aab1': {'weight': 35, 'max_note': 10},
        'acdb1': {'weight': 35, 'max_note': 10},
        'apeb1': {'weight': 30, 'max_note': 10},
        'aab2': {'weight': 35, 'max_note': 10},
        'acdb2': {'weight': 35, 'max_note': 10},
        'apeb2': {'weight': 30, 'max_note': 10}
    }

    __approval_note = 7

    def __init__(self, student_data):
        self.student_data = student_data
        self.__registered_components = self.__set_registered_components()
        self.__utils_path = 'app/utils/random_forest'
        self.__translations = self.__open_files('translations.json')
        self.__classes = self.__open_files('classes.json')

    def __open_files(self, filename):
        with open(f'{self.__utils_path}/{filename}') as file:
            data = json.load(file)

            return data

    def __set_registered_components(self):
        registered_componentes = [
            component for component in self.__components.keys()
            if self.student_data[component]
        ]

        return registered_componentes

    def __set_weighted_grades(self):
        weighted_grades = dict()
        for component in self.__components.keys():
            weighted_grade = -1
            if component in self.__registered_components:
                max_note = self.__components[component]['max_note']
                weight = self.__components[component]['weight']
                score = self.student_data[component]
                weighted_grade = round(((score * weight) / max_note), 2)

            weighted_grades[f'{component}_ponderado'] = weighted_grade

        return pd.DataFrame([weighted_grades])

    def __set_approval_rate(self):
        approved_components = len([
            component
            for component in self.__registered_components
            if self.student_data[component] >= self.__approval_note
        ])
        total_registered_components = len(self.__registered_components)

        return round((approved_components / total_registered_components), 2)

    def __get_independent_variables(self):
        independent_variables = pd.DataFrame([self.student_data]).replace('', -1)
        independent_variables.rename(columns=self.__translations, inplace=True)
        weighted_grades = self.__set_weighted_grades()
        independent_variables = pd.concat([independent_variables, weighted_grades], axis=1)
        independent_variables['tasa_aprobacion'] = self.__set_approval_rate()

        return independent_variables

    def __load_model(self):
        random_forest_model = joblib.load(f'{self.__utils_path}/model.xml')

        return random_forest_model

    def __load_explainer(self):
        with open(f'{self.__utils_path}/explainer', 'rb') as file:
            explainer = dill.load(file)

            return explainer

    def __set_explainer(self, model, independent_variables):
        explainer = self.__load_explainer()
        num_features = np.random.randint(5, len(model.feature_names_in_))
        explain = explainer.explain_instance(
            independent_variables.values[0],
            model.predict_proba,
            num_features=num_features
        )

        return explain

    @staticmethod
    def __select_rules(explain, selected_features, independent_variables):
        rules = []

        for index in range(0, len(selected_features)):
            feature = selected_features[index]
            rule = explain.as_list()[index][0]
            value = independent_variables[feature].values[0]
            if value > 0:
                value = str(value)
                output = eval(rule.replace(feature, value))

                rules.append({
                    'name': rule,
                    'output': output,
                    'value': value
                })

        return rules

    def __get_decision_rules(self, feature_names, model, independent_variables):
        explain = self.__set_explainer(model, independent_variables)
        selected_feature_indexes = tuple(feature[0] for feature in explain.as_map()[1])
        selected_features = list(map(feature_names.__getitem__, selected_feature_indexes))
        rules = self.__select_rules(explain, selected_features, independent_variables)

        return rules

    @staticmethod
    def __get_auxiliary_variables(independent_variables):
        auxiliary_variables = independent_variables[[
            'aab1_ponderado', 'acdb1_ponderado', 'apeb1_ponderado',
            'aab2_ponderado', 'acdb2_ponderado', 'apeb2_ponderado'
        ]].replace(-1, '')

        auxiliary_variables.columns = [
            column.replace('_ponderado', 'Weighted')
            for column in auxiliary_variables.columns
        ]
        
        return auxiliary_variables.to_dict('records')[0]

    def predict(self):
        model = self.__load_model()
        feature_names = model.feature_names_in_
        independent_variables = self.__get_independent_variables()[feature_names]
        class_predicted = model.predict(independent_variables)[0]
        status = self.__classes[str(class_predicted)]
        rules = self.__get_decision_rules(feature_names, model, independent_variables)
        auxiliary_variables = self.__get_auxiliary_variables(independent_variables)
        response = {'message': 'classified', 'statusCode': 201, 'data': auxiliary_variables}
        response['data']['statusPredicted'] = status
        response['data']['rules'] = rules

        return response
