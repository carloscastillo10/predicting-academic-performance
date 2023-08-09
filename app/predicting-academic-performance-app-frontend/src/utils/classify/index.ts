import React from 'react'
import * as Yup from 'yup'
import { getIn, FormikErrors, FormikTouched, FormikProps, FormikValues } from 'formik'

export interface InputProps {
  data: {
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
  }[]
}

export interface SearchProps {
  items: {
    id: number
    name: string
  }[]
}

export interface Student {
  identification: string
  name: string
  lastname: string
  age: number | string
  sex: string
  province: string
  canton: string
  disability: boolean
  disabilityPercentage: number | string
  disabilitiesNumber: number | string
  subject: string
  numberFailures: number | string
  aab1: number | string
  acbd1: number | string
  apeb1: number | string
  aab2: number | string
  acbd2: number | string
  apeb2: number | string
}

export const studentInitialValues = {
  identification: '',
  name: '',
  lastname: '',
  age: '',
  sex: -1,
  province: -1,
  canton: -1,
  disability: false,
  disabilityPercentage: '',
  disabilitiesNumber: '',
  subject: -1,
  academicPeriod: -1,
  numberFailures: '',
  aab1: '',
  acdb1: '',
  apeb1: '',
  aab2: '',
  acdb2: '',
  apeb2: '',
}

export interface FormikValidationProps {
  form?: React.RefObject<FormikProps<FormikValues>>
  errors: FormikErrors<Student>
  touched: FormikTouched<Student>
}

export const classifyStudentSchema = Yup.object().shape({
  identification: Yup.string().required('Ingrese la identificación del estudiante'),
  name: Yup.string().required('Ingrese los nombres del estudiante'),
  lastname: Yup.string().required('Ingrese los apellidos del estudiante'),
  age: Yup.number().min(0, 'No puede ser menor que 0').max(100, 'No puede ser mayor que 100').required('Debe ingresar una edad'),
  disabilityPercentage: Yup.number().min(0.1, 'No puede ser menor que 0.1%').max(100, 'No puede ser menor que 100%').required('Debe ingresar un porcentaje de discapacidad'),
  disabilitiesNumber: Yup.number().min(1, 'No puede ser menor que 1').max(100, 'No puede ser menor que 100').required('Debe ingresar el número de discapacidades'),
  subject: Yup.string().min(0, 'Debe seleccionar una materia').required('Debe seleccionar una materia').notOneOf(['-1'], 'Debe seleccionar una materia'),
  academicPeriod: Yup.string().required('Debe seleccionar un periodo académico').notOneOf(['-1'], 'Debe seleccionar un periodo académico'),
  numberFailures: Yup.number().min(0, 'No puede ser menor que 0').required('Ingrese el número de reprobaciones'),
  aab1: Yup.number().min(0, 'No puede ser menor que 0').max(10, 'No puede ser mayor a 10'),
  acdb1: Yup.number().min(0, 'No puede ser menor que 0').max(10, 'No puede ser mayor a 10'),
  apeb1: Yup.number().min(0, 'No puede ser menor que 0').max(10, 'No puede ser mayor a 10'),
  aab2: Yup.number().min(0, 'No puede ser menor que 0').max(10, 'No puede ser mayor a 10'),
  acdb2: Yup.number().min(0, 'No puede ser menor que 0').max(10, 'No puede ser mayor a 10'),
  apeb2: Yup.number().min(0, 'No puede ser menor que 0').max(10, 'No puede ser mayor a 10'),
})

export const getFormErrors = (errors: FormikErrors<Student>, touched: FormikTouched<Student>, fieldName: string): boolean => {
  const containsError = getIn(errors, fieldName)
  const hasBeenTouched = Object.keys(touched ?? []).includes(fieldName)
  return containsError && hasBeenTouched
}

export function resetDisabilityFields(form: React.RefObject<FormikProps<FormikValues>>, formErrors: any) {
  form.current?.setFieldValue('disabilityPercentage', '')
  // form.current?.setFieldTouched('disabilityPercentage', false, false)
  delete formErrors.disabilityPercentage

  form.current?.setFieldValue('disabilitiesNumber', '')
  // form.current?.setFieldTouched('disabilitiesNumber', false, false)
  delete formErrors.disabilitiesNumber
  return formErrors
}

export async function validateForm(form: React.RefObject<FormikProps<FormikValues>>, fieldNames: string[]) {
  let isValid: boolean = true
  let formErrors = Object()
  if (form.current) {
    const validationErrors = await form.current.validateForm()
    if (Object.keys(validationErrors).length > 0) {
      fieldNames.forEach((field) => {
        if (Object.keys(validationErrors).includes(field)) {
          formErrors[field] = validationErrors[field]
        }

        if (!form.current?.values.disability) {
          formErrors = resetDisabilityFields(form, formErrors)
        }
      })
      if (Object.keys(formErrors).length > 0) {
        isValid = false
      }
    }
  }
  return {
    isValid,
    formErrors,
  }
}
