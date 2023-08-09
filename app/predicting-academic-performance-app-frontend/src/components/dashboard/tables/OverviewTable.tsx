import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { overViewStudents, overViewTableheaders } from '@variables/tables/OverView'
import Image from 'next/image'
import React from 'react'

export function OverViewTable(): React.JSX.Element {
  return (
    <>
      <div className="relative overflow-x-auto mt-6 scrollbar-show">
        <table className="w-full">
          <thead>
            <tr className="text-gray-500">
              {overViewTableheaders.map((header, index) => (
                <th key={index} className="text-xs font-bold uppercase text-start pe-2.5 pb-3 leading-4">
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {overViewStudents.map((student, index) => (
              <tr key={index} className="text-sm text-start ps-6 pe-2.5 pb-5 leading-4 whitespace-nowrap">
                <td className="pt-2 pb-2 pe-5">
                  <span className="inline-flex w-8 h-8">
                    <Image className="rounded-full" src={student.image} width={32} height={32} alt={student.image} />
                  </span>
                </td>
                <td className="pt-2 pb-2 pe-5">
                  <div className="flex flex-col justify-center gap-1">
                    <p className="text-gray-900 font-semibold">{student.name}</p>
                    <p className="text-gray-400 font-medium">{student.identification}</p>
                  </div>
                </td>
                <td className="pt-2 pb-2 pe-5">
                  <div className="flex flex-col justify-center gap-1">
                    <p className="text-gray-900 font-semibold">{student.time}</p>
                    <p className="text-gray-400 font-medium">{student.date}</p>
                  </div>
                </td>
                <td className="text-gray-900 font-semibold pt-2 pb-2 pe-5">{student.subject}</td>
                <td className="text-gray-900 font-semibold pt-2 pb-2 pe-5">{student.academicPeriod}</td>
                <td className="pt-2 pb-2 pe-5">
                  <div className="flex flex-row items-center">
                    {student.status.toLowerCase() === 'aprobada' ? (
                      <CheckCircleIcon className="w-6 h-6 ml-[-0.2rem] text-white fill-approved" />
                    ) : (
                      <XCircleIcon className="w-6 h-6 ml-[-0.2rem] text-white fill-failed" />
                    )}
                    <p className="text-gray-900 font-semibold">{student.status}</p>
                  </div>
                </td>
                <td className="text-gray-900 font-semibold pt-2 pb-2 pe-5">{student.province}</td>
                <td className="text-gray-900 font-semibold pt-2 pb-2 pe-5 text-end">{student.age}</td>
                <td className="text-gray-900 font-semibold pt-2 pb-2 pe-5 text-end">{student.sex}</td>
                <td className="pt-2 pb-2 pe-5">
                  <div className="flex flex-row gap-1">
                    <p className="text-gray-900 font-semibold">{student.disability}</p>
                    {student.disability.toLowerCase() === 'si' && <p className="text-gray-400 font-medium text-center">({student.percentageDisability}%)</p>}
                  </div>
                </td>
                <td className="text-gray-900 font-semibold pt-2 pb-2 pe-5 text-center">{student.failures}</td>
                <td className="text-gray-900 font-semibold pt-2 pb-2 pe-5 text-center">{student.aab1}</td>
                <td className="text-gray-900 font-semibold pt-2 pb-2 pe-5 text-center">{student.acdb1}</td>
                <td className="text-gray-900 font-semibold pt-2 pb-2 pe-5 text-center">{student.apeb1}</td>
                <td className="text-gray-900 font-semibold pt-2 pb-2 pe-5 text-center">{student.aab2}</td>
                <td className="text-gray-900 font-semibold pt-2 pb-2 pe-5 text-center">{student.acdb2}</td>
                <td className="text-gray-900 font-semibold pt-2 pb-2 pe-5 text-center">{student.apeb2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
