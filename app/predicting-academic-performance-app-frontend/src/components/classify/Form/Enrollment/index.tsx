'use client'
import React, { useState } from 'react'
import { Input } from '@components/classify/Form'
import { Card } from '@components/Card'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { FormikValidationProps, InputProps, resetDisabilityFields } from '@utils/classify'
import styles from '@styles/Checkbox.module.css'
import { Field, FormikProps, FormikValues } from 'formik'

const data = {
  title: {
    value: 'Datos de Matriculas',
    size: 'text-lg',
  },
  subtitle: {
    value: 'Información personal de cada estudiante al momento de matricularse',
    size: 'text-sm',
  },
}

interface Props extends FormikValidationProps {
  handleNextStep: () => void
  form: React.RefObject<FormikProps<FormikValues>>
  enrollmentInputs?: InputProps
}

export function EnrollmentForm({ ...formProps }: Props): React.JSX.Element {
  const [hasDisability, setHasDisability] = useState(false)

  const setDisabilityChecked = () => {
    if (formProps.form.current) {
      formProps.form.current.setFieldValue('disability', !formProps.form.current.values.disability)
    }
  }

  const handleHasDisability = () => {
    setHasDisability(!hasDisability)
    hasDisability ? resetDisabilityFields(formProps.form, formProps.errors) : null
    setDisabilityChecked()
  }

  return (
    <>
      <Card title={data.title} subtitle={data.subtitle}>
        <div className="mt-6 grid grid-cols-6 gap-x-6 gap-y-8">
          {formProps.enrollmentInputs?.data?.map((props, index) => <Input key={index} {...props} errors={formProps.errors} touched={formProps.touched} />)}

          <div className={hasDisability ? 'col-span-6 md:col-span-2' : 'col-span-6 md:col-span-4'}>
            <fieldset>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <Field
                    type="checkbox"
                    className={`${styles.checkbox} h-4 w-4 rounded border-gray-300 text-custom focus:ring-custom`}
                    id="disability"
                    name="disability"
                    onChange={handleHasDisability}
                    checked={hasDisability}
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="disability" className="font-bold text-gray-700">
                    Discapacidad
                  </label>
                  <p className="text-gray-500 text-sm">Seleccione si posee algún tipo de discapacidad.</p>
                </div>
              </div>
            </fieldset>
          </div>
          {hasDisability && (
            <>
              <Input
                key={6}
                size="col-span-6 md:col-span-2"
                label="Porcentaje de discapacidad"
                type="number"
                required={true}
                id="disabilityPercentage"
                name="disabilityPercentage"
                placeholder="Ej. 50"
                inputText="%"
                min={1}
                max={100}
                errors={formProps.errors}
                touched={formProps.touched}
              />
              <Input
                key={7}
                size="col-span-6 md:col-span-2"
                label="Número de discapacidades"
                type="number"
                required={true}
                id="disabilitiesNumber"
                name="disabilitiesNumber"
                placeholder="Ej. 1"
                min={1}
                max={100}
                errors={formProps.errors}
                touched={formProps.touched}
              />
            </>
          )}
        </div>
        <div className="mt-10 flex items-center justify-end">
          <button
            className="relative group inline-flex justify-center items-center rounded-2xl py-2 px-4 text-sm font-semibold w-auto m-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-custom text-white hover:bg-hover-custom hover:font-bold active:bg-hover-custom active:text-slate-300 focus-visible:bg-hover-custom"
            type="button"
            onClick={formProps.handleNextStep}
          >
            <span className="flex mr-2">Siguiente</span>
            <ArrowLongRightIcon className="fill-white group-active:fill-current w-5 h-6" />
          </button>
        </div>
      </Card>
    </>
  )
}
