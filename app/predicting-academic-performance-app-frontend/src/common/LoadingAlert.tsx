import React from 'react'
import styles from '@styles/Modal.module.css'

interface Props {
  title: string
}

export function LoadingAlert({ title }: Props): React.JSX.Element {
  return (
    <>
      <div className={`${styles.content}`}>
        <div className="grid justify-center mt-4 gap-4">
          <div>
            <div className="mt-3 text-center">
              <h2 className="text-gray-950 text-xl font-bold">{title}</h2>
              <p className="mt-6 text-sm text-gray-600 font-medium">Esto tomara un momento, espere por favor 😃</p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className={`${styles.button__loading}`} type="button">
              Entendido
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
