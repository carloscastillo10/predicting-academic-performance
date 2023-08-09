from app.config.main import config_dict
from decouple import config
from flask import Flask
from importlib import import_module


def register_blueprint(app):
    with app.app_context():
        module = import_module('app.routes.random_forest')
        app.register_blueprint(module.blueprint)


def create_app(app_config):
    app = Flask(__name__)
    app.config.from_object(app_config)
    app.json.sort_keys = False
    register_blueprint(app)

    return app


DEBUG = config('FLASK_DEBUG', default=False)
config_mode = 'Development' if DEBUG else 'Production'
app_config = config_dict[config_mode]
app = create_app(app_config)

if DEBUG:
    app.logger.info('DEBUG       = ' + str(DEBUG))
    app.logger.info('Environment = ' + config_mode)
