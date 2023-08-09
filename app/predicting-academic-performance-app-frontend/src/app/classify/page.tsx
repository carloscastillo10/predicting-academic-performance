import React from 'react'
import { Main } from '@common/Main'
import { ClassifyStudentLayout } from '@layouts/classify'
import { Header } from '@components/Header'

export default function ClassifyStudent(): React.JSX.Element {
  return (
    <>
      <Header />
      <Main>
        <ClassifyStudentLayout />
      </Main>
    </>
  )
}
