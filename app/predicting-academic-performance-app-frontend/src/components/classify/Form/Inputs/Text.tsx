import React from 'react'
import { Field } from 'formik'
import { FormikValidationProps, Student, getFormErrors } from '@utils/classify'
import { classNames } from '@utils/funtions'

interface Props extends FormikValidationProps {
  id: string
  name: string
  placeholder?: string
  inputText?: string
  required?: boolean
}

export function InputText({ ...props }: Props): React.JSX.Element {
  return (
    <>
      <div className="relative flex flex-wrap items-center w-full">
        <Field
          type="text"
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          className={classNames(
            getFormErrors(props.errors, props.touched, props.name) ? 'ring-red-600 focus:outline-red-600' : 'ring-gray-300 focus:outline-custom',
            'block w-full border-0 py-1.5 px-2.5 text-gray-700 caret-custom font-medium text-sm rounded-lg shadow-sm  ring-1 ring-inset leading-6 placeholder:text-gray-400',
          )}
        />
        {props.inputText ? <span className="absolute flex items-center right-0 px-2.5 text-xs text-gray-500 font-bold">{props.inputText}</span> : null}
      </div>

      {props.errors ? (
        props.errors[props.name as keyof Student] && props.touched[props.name as keyof Student] ? (
          <div className="mt-1 text-sm text-red-600 font-medium">{props.errors[props.name as keyof Student]}</div>
        ) : null
      ) : null}
    </>
  )
}
