import axios from 'axios'
import { endPoints } from '@services/api'
import { FormikValues } from 'formik'

export const classifyStudent = async (studentData: FormikValues) => {
  const { data } = await axios.post(endPoints.students.classify, studentData)
  return data
}

export const listSexs = async () => {
  const { data } = await axios.get(endPoints.sexs.list)
  return data
}

export const listProvinces = async () => {
  const { data } = await axios.get(endPoints.provinces.list)
  return data
}

export const listCantons = async () => {
  const { data } = await axios.get(endPoints.provinces.listCantons)
  return data
}

export const listSubjects = async () => {
  const { data } = await axios.get(endPoints.subjects.list)
  return data
}

export const listPeriods = async () => {
  const { data } = await axios.get(endPoints.periods.list)
  return data
}
