import { listPeriods, listProvinces } from '@services/api/classify'

export const getPredictionAnalysisFilters = async () => {
  const academicPeriodsResponse = await listPeriods()
  const provincesResponse = await listProvinces()
  const academicPeriods = {
    items: academicPeriodsResponse.data,
    defaultValue: 0,
  }
  const provinces = {
    items: provincesResponse.data,
    defaultValue: 11,
  }

  return {
    academicPeriods,
    provinces,
  }
}

// export const academicPeriods = {
//   items: [
//     { id: 1, name: 'Abr 2021 / Ago 2021' },
//     { id: 2, name: 'Oct 2021 / Feb 2022' },
//     { id: 3, name: 'Abr 2022 / Ago 2022' },
//     { id: 4, name: 'Oct 2022 / Feb 2023' },
//     { id: 5, name: 'Abr 2023 / Ago 2023' },
//   ],
//   defaultValue: 4,
// }

// export const provinces = {
//   items: [
//     { id: 1, name: 'Azuay' },
//     { id: 2, name: 'Bolivar' },
//     { id: 3, name: 'Cañar' },
//     { id: 4, name: 'Carchi' },
//     { id: 5, name: 'Chimborazo' },
//     { id: 6, name: 'Loja' },
//   ],
//   defaultValue: 5,
// }
