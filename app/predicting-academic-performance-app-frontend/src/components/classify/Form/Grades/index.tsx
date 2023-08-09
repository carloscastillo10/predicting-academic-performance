import React from 'react'
import { Input } from '@components/classify/Form'
import { Card } from '@components/Card'
import { ArrowLongLeftIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid'
import { FormikValidationProps, InputProps } from '@utils/classify'

const data = {
  title: {
    value: 'Datos Académicos',
    size: 'text-lg',
  },
  subtitle: {
    value: 'Datos sobre las calificaciones obtenidas en una materia en específico',
    size: 'text-sm',
  },
}

interface Props extends FormikValidationProps {
  handlePreviousStep: () => void
  // eslint-disable-next-line no-unused-vars
  handleSubmit: (event: React.FormEvent<HTMLButtonElement>) => void
  gradesInputs?: InputProps
}

export function GradesForm({ ...formProps }: Props): React.JSX.Element {
  return (
    <>
      <Card title={data.title} subtitle={data.subtitle}>
        <div className="mt-6 grid grid-cols-6 gap-x-6 gap-y-8">
          {formProps.gradesInputs?.data?.map((props, index) => <Input key={index} {...props} errors={formProps.errors} touched={formProps.touched} form={formProps.form} />)}
        </div>
        <div className="mt-10 flex items-center justify-between flex-wrap">
          <button
            className="relative group inline-flex justify-center items-center rounded-2xl py-2 px-4 text-sm font-semibold w-auto m-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-gray-200 text-gray-600 hover:bg-gray-300 hover:font-bold active:bg-search active:text-slate-300 focus-visible:bg-search"
            type="button"
            onClick={formProps.handlePreviousStep}
          >
            <ArrowLongLeftIcon className="fill-gray-600 group-active:fill-current w-5 h-6" />
            <span className="flex ml-2">Anterior</span>
          </button>
          <button
            className="relative group inline-flex justify-center items-center rounded-2xl py-2 px-4 text-sm font-semibold w-auto m-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-custom text-white hover:bg-hover-custom hover:font-bold active:bg-hover-custom active:text-slate-300 focus-visible:bg-hover-custom"
            type="button"
            onClick={formProps.handleSubmit}
          >
            <span className="flex mr-2">Clasificar</span>
            <PaperAirplaneIcon className="fill-white group-active:fill-current w-5 h-6" />
          </button>
        </div>
      </Card>
    </>
  )
}
