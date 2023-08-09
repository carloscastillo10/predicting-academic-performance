import React from 'react'
import { InputText } from '@components/classify/Form/Inputs/Text'
import { InputNummber } from '@components/classify/Form/Inputs/Number'
import { FormikValidationProps } from '@utils/classify'
import { InputSelect } from './Inputs/Select'

interface Props extends FormikValidationProps {
  size?: string
  label: string
  type: string
  required: boolean
  id: string
  name: string
  placeholder?: string
  inputText?: string
  items?: {
    id: number
    name: string
  }[]
  defaultValue?: number
  searchable?: boolean
  min?: number
  max?: number
}

export function Input({ ...props }: Props): React.JSX.Element {
  const renderInput = (type: string): React.JSX.Element => {
    switch (type) {
      case 'number': {
        return <InputNummber {...props} />
      }

      case 'select': {
        return <InputSelect {...props} />
      }

      default: {
        return <InputText {...props} />
      }
    }
  }

  return (
    <>
      <div className={props.size ? props.size : 'sm:col-span-4'}>
        <label htmlFor={props.id} className="block text-sm font-bold leading-6 text-gray-700">
          {props.label}
          {props.required && <span className="ml-1 text-sm text-red-500">*</span>}
        </label>
        <div className="mt-2">{renderInput(props.type)}</div>
      </div>
    </>
  )
}
