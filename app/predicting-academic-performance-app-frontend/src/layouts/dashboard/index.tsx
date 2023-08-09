import React from 'react'
import Link from 'next/link'
import { UserPlusIcon } from '@heroicons/react/24/outline'
import { OverviewLayout } from '@layouts/dashboard/statistics/Overview'
import { PredictionAnalysisLayout } from '@layouts/dashboard/statistics/PredictionAnalysis'

export function DashboardLayout(): React.JSX.Element {
  return (
    <>
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex flex-col">
          <h2 className="text-custom text-5xl font-extrabold">27,440</h2>
          <p className="text-gray-600 text-sm font-medium">Estudiantes clasificados</p>
        </div>
        <Link
          href="classify/"
          className="fixed z-50 bottom-[1.875rem] m-auto inset-x-0 w-14 h-14 group inline-flex justify-center items-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-custom text-white hover:bg-hover-custom hover:text-slate-100 active:bg-hover-custom active:text-slate-300 focus-visible:bg-hover-custom md:relative md:rounded-2xl md:w-auto md:h-10 md:bottom-0 md:m-0"
          title="Classify Student"
        >
          <UserPlusIcon className="w-8 h-8 flex-none fill-custom group-active:fill-current md:w-6 md:h-6" />
          <span className="ml-3 hidden md:flex">Clasificar nuevo estudiante</span>
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 xl:grid-cols-[60%_minmax(0,_1fr)]">
        <OverviewLayout />
        <PredictionAnalysisLayout />
      </div>
    </>
  )
}
