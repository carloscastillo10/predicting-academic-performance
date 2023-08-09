import React, { Dispatch } from 'react'
import styles from '@styles/Modal.module.css'
import { FaceFrownIcon, FaceSmileIcon } from '@heroicons/react/20/solid'
import { classNames } from '@utils/funtions'
import { ErrorAlert } from '@common/ErrorAlert'

interface Props {
  setOpenModal: Dispatch<boolean>
  prediction: any
}

export function ClassifiedStudentLayout({ setOpenModal, prediction }: Props): React.JSX.Element {
  return (
    <>
      {prediction ? (
        <>
          <div className={`${styles.content}`}>
            <div className="flex justify-center flex-col flex-wrap mt-4 md:flex-row md:justify-start gap-4">
              <div>
                <div className="mx-auto flex justify-center items-center">
                  <svg className={`${styles.icon} ${styles.success} block m-auto w-9 h-9 `} viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true" display="none">
                    <g fill="none" stroke="hsl(138,90%,50%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle className={`${styles.circle}`} cx="12" cy="12" r="11" strokeDasharray="69.12 69.12" />
                      <polyline className={`${styles.polyne}`} points="7 12.5 10 15.5 17 8.5" strokeDasharray="14.2 14.2" />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="w-full md:w-[90%]">
                <div className="mt-3 text-center md:mt-1 md:text-start">
                  <h2 className="text-gray-950 text-xl font-bold">Clasificado exitosamente</h2>
                </div>
                <div className="mt-6 ml-1">
                  <p className="flex items-center flex-wrap gap-1 text-sm text-gray-600 font-medium">
                    El estudiante ha
                    <span
                      className={classNames(
                        prediction.statusPredicted.toLowerCase() === 'aprobado' ? 'bg-approved' : 'bg-failed',
                        'flex justify-center items-center text-white font-bold px-1 rounded-lg',
                      )}
                    >
                      {prediction.statusPredicted}
                    </span>
                    en
                    <span className="font-bold">{prediction.subject.name}</span>
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-1.5 max-h-[calc(100vh_-_400px)] overflow-y-auto scrollbar-show">
                  {prediction.rules.map((rule: any, index: number) => (
                    <div key={index} className="flex items-center justify-start min-h-[70px]">
                      <div className="flex flex-col items-center h-full me-5">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="0"
                          viewBox="0 0 24 24"
                          focusable="false"
                          className="w-8 h-8 inline-block shrink-0 z-10 relative text-custom"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        <div className="w-0.5 bg-gray-300 h-full"></div>
                      </div>
                      <div className="flex flex-col justify-start h-full mt-1 gap-2">
                        <p className="text-gray-600 font-bold text-sm">{rule.name}</p>
                        <div className="flex items-end justify-start gap-1">
                          {prediction.statusPredicted.toLowerCase() === 'aprobado' ? <FaceSmileIcon className="w-6 h-6 text-green-600" /> : <FaceFrownIcon className="w-6 h-6 text-red-600" />}

                          <p className="text-sm text-gray-600 font-medium">{rule.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 flex justify-center mt-8 w-full">
                <button
                  className="relative group inline-flex justify-center items-center rounded-2xl py-2 px-4 text-sm font-semibold w-full md:w-64 m-0 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-custom text-white hover:bg-hover-custom hover:font-bold active:bg-hover-custom active:text-slate-300 focus-visible:bg-hover-custom"
                  type="button"
                  onClick={() => setOpenModal(false)}
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <ErrorAlert setOpenModal={setOpenModal} />
      )}
    </>
  )
}
