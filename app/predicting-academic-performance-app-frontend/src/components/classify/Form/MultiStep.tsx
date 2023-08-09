import React from 'react'
import { ChevronRightIcon, IdentificationIcon } from '@heroicons/react/20/solid'
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import { classNames } from '@utils/funtions'
import styles from '@styles/MultiStep.module.css'

interface Props {
  active: number
  handleNextStep: () => void
  handlePreviousStep: () => void
}

export function MultiStep({ ...props }: Props): React.JSX.Element {
  return (
    <>
      <ol className="flex flex-row justify-between items-center w-full pr-1 md:justify-around lg:flex-col lg:items-start lg:justify-start lg:gap-y-20 lg:w-auto lg:min-w-[250px] lg:relative lg:pr-0 ">
        <button
          className={classNames(props.active === 1 ? 'bg-custom' : 'bg-gray-300', `${styles.multistep__btn} hidden lg:flex absolute left-[18.5px] h-[160px] w-0.5 z-10 cursor-pointer`)}
          onClick={props.handleNextStep}
        ></button>
        <button className="flex items-center text-white cursor-pointer z-20" onClick={props.handlePreviousStep}>
          <span className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 mr-2 bg-custom rounded-full shrink-0">
            <IdentificationIcon className="w-5 h-5" />
          </span>
          <span className="hidden text-sm text-gray-950 font-bold sm:inline-flex mr-1">Datos de</span>
          <span className="text-sm text-gray-950 font-bold">Matrículas</span>
        </button>
        <ChevronRightIcon
          className={classNames(props.active === 1 ? 'text-gray-950 w-6 h-6' : 'text-gray-600', `${styles.multistep__btn} flex w-5 h-5 cursor-pointer lg:hidden`)}
          onClick={props.handleNextStep}
        />
        <button className="flex items-center text-gray-600 cursor-pointer z-20" onClick={props.handleNextStep}>
          <span
            className={classNames(
              props.active === 1 ? 'bg-custom' : 'bg-white ring-1 ring-gray-600',
              `${styles.multistep__btn} flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 mr-2 border rounded-full shrink-0`,
            )}
          >
            <ClipboardDocumentCheckIcon className={classNames(props.active === 1 ? 'fill-custom text-white' : 'fill-white', 'w-5 h-5')} />
          </span>
          <span className={classNames(props.active === 1 ? 'text-gray-950 font-bold' : 'text-gray-600 font-medium', 'hidden text-sm sm:inline-flex mr-1')}>Datos</span>
          <span className={classNames(props.active === 1 ? 'text-gray-950 font-bold' : 'text-gray-600 font-medium', 'text-sm')}>Académicos</span>
        </button>
      </ol>
    </>
  )
}
