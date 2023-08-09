import React, { Dispatch } from 'react'
import styles from '@styles/Modal.module.css'

interface Props {
  setOpenModal: Dispatch<boolean>
}

export function ErrorAlert({ setOpenModal }: Props): React.JSX.Element {
  return (
    <>
      <div className={`${styles.content}`}>
        <div className="flex justify-center flex-col flex-wrap mt-4 md:flex-row md:justify-start gap-4">
          <div>
            <div className="mx-auto flex justify-center items-center">
              <svg className={`${styles.icon} ${styles.error} block m-auto w-9 h-9 `} viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true" display="none">
                <g fill="none" stroke="hsl(3,90%,50%)" strokeWidth="2" strokeLinecap="round">
                  <circle className={`${styles.circle}`} cx="12" cy="12" r="11" strokeDasharray="69.12 69.12" />
                  <line className={`${styles.polyne}`} x1="7" y1="7" x2="17" y2="17" strokeDasharray="14.2 14.2" />
                  <line className={`${styles.polyne}`} x1="17" y1="7" x2="7" y2="17" strokeDasharray="14.2 14.2" />
                </g>
              </svg>
            </div>
          </div>
          <div>
            <div className="mt-3 text-center md:mt-1 md:text-start">
              <h2 className="text-gray-950 text-xl font-bold">!Ups!</h2>
              <p className="mt-6 text-sm text-gray-600 font-medium">El estudiante no se pudo clasificar debido a un error 🙁</p>
              <p className="flex gap-1 mt-6 text-sm text-gray-700 font-extrabold">
                Sugerencias:
                <span className="text-gray-600 font-medium">Revise si ingresó al menos una calificación.</span>
              </p>
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
  )
}
