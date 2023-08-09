import { ClassifyStudent } from '@api/students/dtos/classifyStudent.dto'

export type PredictStudentDto = Pick<ClassifyStudent, 'age' | 'sex' | 'province' | 'canton' | 'numberFailures' | 'aab1' | 'acdb1' | 'apeb1' | 'aab2' | 'acdb2' | 'apeb2'>
