import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { predictionAnalysisSubjects } from '@variables/tables/PredictionAnalysis'
import Image from 'next/image'
import React from 'react'

export function PredictionAnalysisTable(): React.JSX.Element {
  return (
    <>
      <div className="relative overflow-x-auto mt-4 scrollbar-show">
        <table className="w-full">
          <tbody>
            {predictionAnalysisSubjects.map((subject, index) => (
              <tr key={index} className="text-sm text-start ps-6 pe-2.5 leading-4 whitespace-nowrap">
                <td className="pe-5 md:p-0">
                  <span className="inline-flex w-8 h-8">
                    <Image className="rounded-full" src={subject.image} width={32} height={32} alt={subject.image} />
                  </span>
                </td>
                <td className="pt-2 pe-5 align-bottom">
                  <div className="flex flex-col justify-center gap-1">
                    <p className="text-gray-900 font-semibold">{subject.name}</p>
                    <p className="text-gray-500 text-xs font-bold uppercase text-start pe-2.5 pb-3 leading-4">materia</p>
                  </div>
                </td>
                <td className="pt-2 pe-5 align-bottom">
                  <div className="flex flex-col justify-center gap-1">
                    <div className="flex flex-row items-center">
                      <CheckCircleIcon className="w-6 h-6 ml-[-0.2rem] text-white fill-approved" />
                      <p className="text-gray-900 font-semibold">{subject.approvedStudents}</p>
                    </div>
                    <p className="text-gray-500 text-xs font-bold uppercase text-start pe-2.5 pb-3 leading-4">aprobados</p>
                  </div>
                </td>
                <td className="pt-2 align-bottom text-end">
                  <div className="flex flex-col justify-center gap-1">
                    <div className="flex flex-row items-center">
                      <XCircleIcon className="w-6 h-6 ml-[-0.2rem] text-white fill-failed" />
                      <p className="text-gray-900 font-semibold">{subject.failedStudents}</p>
                    </div>
                    <p className="text-gray-500 text-xs font-bold uppercase text-start pb-3 leading-4">reprobados</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
