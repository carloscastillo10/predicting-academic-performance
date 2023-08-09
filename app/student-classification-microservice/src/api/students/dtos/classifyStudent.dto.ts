import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Max, Min, isNumber } from 'class-validator'
import { Student } from '@api/students/models/student.model'

interface StudentDto extends Omit<Student, 'id' | 'createdAt' | 'updateAt'> {}

export interface CreateStudent extends Partial<StudentDto> {}

export interface ClassifyStudent
  extends Omit<
    Student,
    | 'id'
    | 'createdAt'
    | 'updateAt'
    | 'sex'
    | 'province'
    | 'canton'
    | 'subject'
    | 'academicPeriod'
    | 'aab1Weighted'
    | 'acdb1Weighted'
    | 'apeb1Weighted'
    | 'aab2Weighted'
    | 'acdb2Weighted'
    | 'apeb2Weighted'
    | 'statusPredicted'
    | 'rules'
  > {
  sex: number
  province: number
  canton: number
  subject: number
  academicPeriod: number
}

export class ClassifyStudentDto implements ClassifyStudent {
  @IsString()
  @IsNotEmpty()
  identification!: string

  @IsString()
  name!: string

  @IsString()
  lastname!: string

  @Max(100)
  @Min(0)
  @IsNumber()
  age!: number

  @IsNumber()
  sex!: number

  @IsNumber()
  province!: number

  @IsNumber()
  canton!: number

  @IsBoolean()
  disability!: boolean

  @Max(100)
  @Min(0.1)
  @IsNumber()
  disabilityPercentage!: number

  @Min(0)
  @IsNumber()
  disabilitiesNumber!: number

  @IsNumber()
  subject!: number

  @IsNumber()
  academicPeriod!: number

  @Min(0)
  @IsNumber()
  numberFailures!: number

  @Max(10)
  @Min(0)
  @IsNumber()
  aab1!: number

  @Max(10)
  @Min(0)
  @IsNumber()
  acdb1!: number

  @Max(10)
  @Min(0)
  @IsNumber()
  apeb1!: number

  @Max(10)
  @Min(0)
  @IsNumber()
  aab2!: number

  @Max(10)
  @Min(0)
  @IsNumber()
  acdb2!: number

  @Max(10)
  @Min(0)
  @IsNumber()
  apeb2!: number
}
