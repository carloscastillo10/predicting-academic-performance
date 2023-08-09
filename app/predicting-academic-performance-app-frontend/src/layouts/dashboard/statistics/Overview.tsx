'use client'
import React, { useState } from 'react'
import { Container } from '@components/Container'
import { CardHeader } from '@components/CardHeader'
import { CardBody } from '@components/CardBody'
import { Card } from '@components/Card'
import { BarChar } from '@components/dashboard/charts/BarChar'
import { barChartDataApprovedStudents, barChartOptionsApprovedStudents } from '@variables/charts/ApprovedStudents'
import { LineAreaChart } from '@components/dashboard/charts/LineaAreaChart'
import { lineChartDataFailedStudents, lineChartOptionsFailedStudents } from '@variables/charts/FailedStudents'
import { OverViewTable } from '@components/dashboard/tables/OverviewTable'
import { ButtonFilter } from '@components/dashboard/filters/Button'
import { Calendar } from '@components/dashboard/filters/Calendar'

const data = {
  title: {
    value: 'Descripción general',
    size: 'text-xl',
  },
  subtitle: {
    value: 'Estudiantes aprobados y reprobados',
    size: 'text-sm',
  },
  approvedStudents: {
    title: {
      value: 233,
      size: 'text-2xl',
      color: 'text-custom',
    },
    subtitle: {
      value: 'Estudiantes aprobados en los últimos 7 días',
      size: 'text-sm',
    },
  },
  failedStudents: {
    title: {
      value: 125,
      size: 'text-2xl',
      color: 'text-custom',
    },
    subtitle: {
      value: 'Estudiantes reprobados en los últimos 7 días',
      size: 'text-sm',
    },
  },
  latestPredictions: {
    title: {
      value: 'Últimas predicciones',
      size: 'text-lg',
    },
  },
}

const filters = [{ text: '7 días' }, { text: '14 días' }, { text: '30 días' }]

export function OverviewLayout(): React.JSX.Element {
  const [active, setActive] = useState(0)

  const handleClick = (id: number) => {
    setActive(id)
  }

  return (
    <>
      <Container bgColor="bg-container">
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-start">
          <div>
            <CardHeader title={data.title} subtitle={data.subtitle} />
          </div>
          <div className="flex gap-2">
            <div className="flex justify-between items-center border-[1px] bg-white border-gray-300 w-max h-[35px] rounded-full">
              {filters.map((filter, index) => (
                <ButtonFilter key={index} text={filter.text} id={index} active={active} handleClick={handleClick} />
              ))}
            </div>
            <Calendar active={active} handleClick={handleClick} />
          </div>
        </div>
        <CardBody>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            <Card title={data.approvedStudents.title} subtitle={data.approvedStudents.subtitle}>
              <div id="approvedStudentsChart">
                <BarChar chartData={barChartDataApprovedStudents} chartOptions={barChartOptionsApprovedStudents} />
              </div>
            </Card>
            <Card title={data.failedStudents.title} subtitle={data.failedStudents.subtitle}>
              <div id="failedStudentsChart">
                <LineAreaChart chartData={lineChartDataFailedStudents} chartOptions={lineChartOptionsFailedStudents} />
              </div>
            </Card>
          </div>
          <div className="mt-6 grid grid-cols-1">
            <Card title={data.latestPredictions.title}>
              <CardBody>
                <OverViewTable />
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Container>
    </>
  )
}
