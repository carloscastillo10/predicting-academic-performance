'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { CardBody } from '@components/CardBody'
import { CardTitle } from '@components/CardTitle'
import { Container } from '@components/Container'
import { Formik, Form, FormikProps, FormikValues, setNestedObjectValues } from 'formik'
import { EnrollmentForm } from '@components/classify/Form/Enrollment'
import { MultiStep } from '@components/classify/Form/MultiStep'
import { GradesForm } from '@components/classify/Form/Grades'
import { Squares2X2Icon } from '@heroicons/react/20/solid'
import { classNames } from '@utils/funtions'
import { InputProps, classifyStudentSchema, studentInitialValues, validateForm } from '@utils/classify'
import { Modal } from '@common/Modal'
import { ClassifiedStudentLayout } from './classifiedStudent'
import { getEnrollmentInputs } from '@variables/forms/enrollment'
import { getGradesInputs } from '@variables/forms/grades'
import { classifyStudent } from '@services/api/classify'
import { LoadingAlert } from '@common/LoadingAlert'

const data = {
  title: {
    value: 'Clasificación de estudiantes',
    size: 'text-2xl',
  },
}

export function ClassifyStudentLayout(): React.JSX.Element {
  const [enrollmentInputs, setEnrollmentInputs] = useState<InputProps>()
  const [gradesInputs, setGradesInputs] = useState<InputProps>()
  const [prediction, setPrediction] = useState()
  const [loadingForm, setLoadingForm] = useState(true)
  const [loadingAlert, setLoadingAlert] = useState(false)
  const [active, setActive] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  const form = useRef<FormikProps<FormikValues>>(null)

  useEffect(() => {
    getEnrollmentInputs().then((inputs) => {
      setEnrollmentInputs(inputs)
    })

    getGradesInputs().then((inputs) => {
      setGradesInputs(inputs)
      setLoadingForm(false)
    })
  }, [])

  const handleNextStep = () => {
    const fieldNames = enrollmentInputs?.data?.map((field) => field.name) || []
    fieldNames.push('disabilityPercentage', 'disabilitiesNumber')
    validateForm(form, fieldNames).then(({ isValid, formErrors }) => {
      isValid ? setActive(1) : form.current?.setTouched(setNestedObjectValues(formErrors, true))
    })
  }

  const handlePreviousStep = () => {
    setActive(0)
  }

  const sendData = async () => {
    const data = form.current?.values || {}
    setLoadingAlert(true)
    setOpenModal(true)
    classifyStudent(data).then((response) => {
      setPrediction(response.data)
      setLoadingAlert(false)
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const fieldNames = gradesInputs?.data?.map((field) => field.name) || []
    validateForm(form, fieldNames).then(({ isValid, formErrors }) => {
      isValid ? sendData() : form.current?.setTouched(setNestedObjectValues(formErrors, true))
    })
  }

  return (
    <>
      {!loadingForm && (
        <>
          <div className="flex justify-between items-center flex-wrap gap-4">
            <CardTitle title={data.title} />
            <Link
              href="/"
              className="fixed z-50 bottom-[1.875rem] m-auto inset-x-0 w-14 h-14 group inline-flex justify-center items-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-custom text-white hover:bg-hover-custom hover:text-slate-100 active:bg-hover-custom active:text-slate-300 focus-visible:bg-hover-custom md:relative md:rounded-2xl md:w-auto md:h-10 md:bottom-0 md:m-0"
            >
              <Squares2X2Icon className="w-7 h-7 flex-none fill-white group-active:fill-current md:w-5 md:h-5" />
              <span className="hidden ml-3 md:flex">Dashboard</span>
            </Link>
          </div>
          <div className="mt-8">
            <Container bgColor="bg-container">
              <div className="flex flex-col lg:flex-row gap-8">
                <MultiStep active={active} handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep} />
                <CardBody>
                  <div className="w-full lg:ml-16">
                    <Formik initialValues={studentInitialValues} validationSchema={classifyStudentSchema} onSubmit={() => {}} innerRef={form} enableReinitialize={true}>
                      {({ errors, touched }) => (
                        <Form className="mb-2">
                          <div className={classNames(active === 0 ? 'flex' : 'hidden')}>
                            <EnrollmentForm handleNextStep={handleNextStep} errors={errors} touched={touched} form={form} enrollmentInputs={enrollmentInputs} />
                          </div>
                          <div className={classNames(active === 1 ? 'flex' : 'hidden')}>
                            <GradesForm handlePreviousStep={handlePreviousStep} handleSubmit={handleSubmit} errors={errors} touched={touched} form={form} gradesInputs={gradesInputs} />
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </CardBody>
              </div>
            </Container>
          </div>
          <Modal open={openModal} setOpen={setOpenModal}>
            {loadingAlert ? <LoadingAlert title={'Clasificando al estudiante'} /> : <ClassifiedStudentLayout setOpenModal={setOpenModal} prediction={prediction} />}
          </Modal>
        </>
      )}
    </>
  )
}
