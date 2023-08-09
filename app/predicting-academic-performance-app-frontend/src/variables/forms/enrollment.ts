import { listCantons, listProvinces, listSexs } from '@services/api/classify'

export const getEnrollmentInputs = async () => {
  const sexs = await listSexs()
  const provinces = await listProvinces()
  const cantons = await listCantons()

  const enrollmentInputs = {
    data: [
      {
        size: 'col-span-6 md:col-span-3',
        label: 'Identificación',
        type: 'text',
        required: true,
        id: 'identification',
        name: 'identification',
        placeholder: 'Ej. 1101XXXXXX',
      },
      {
        size: 'col-span-6 md:col-span-3',
        label: 'Nombres',
        type: 'text',
        required: true,
        id: 'name',
        name: 'name',
        placeholder: 'Ej. Matias Antonio',
      },
      {
        size: 'col-span-6 md:col-span-2',
        label: 'Apellidos',
        type: 'text',
        required: true,
        id: 'lastname',
        name: 'lastname',
        placeholder: 'Ej. Rodriguez Perez',
      },
      {
        size: 'col-span-6 md:col-span-2',
        label: 'Edad',
        type: 'number',
        required: true,
        id: 'age',
        name: 'age',
        placeholder: 'Ej. 23',
        inputText: 'años',
        min: 0,
        max: 100,
      },
      {
        size: 'col-span-6 md:col-span-2',
        label: 'Sexo',
        type: 'select',
        required: false,
        id: 'sex',
        name: 'sex',
        placeholder: 'Seleccione un sexo',
        items: sexs.data,
        defaultValue: -1,
        searchable: false,
      },
      {
        size: 'col-span-6 md:col-span-3',
        label: 'Provincia de nacimiento',
        type: 'select',
        required: false,
        id: 'province',
        name: 'province',
        placeholder: 'Seleccione una provincia',
        items: provinces.data,
        defaultValue: -1,
        searchable: true,
      },
      {
        size: 'col-span-6 md:col-span-3',
        label: 'Cantón de nacimiento',
        type: 'select',
        required: false,
        id: 'canton',
        name: 'canton',
        placeholder: 'Seleccione un cantón',
        items: cantons.data,
        defaultValue: -1,
        searchable: true,
      },
    ],
  }

  return enrollmentInputs
}
