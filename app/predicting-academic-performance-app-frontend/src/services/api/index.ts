const STUDENT_CLASSIFICATION_MICROSERVICE_URL = process.env.NEXT_PUBLIC_STUDENT_CLASSIFICATION_MICROSERVICE_URL

export const endPoints = {
  students: {
    classify: `${STUDENT_CLASSIFICATION_MICROSERVICE_URL}/api/v1/students`,
  },
  sexs: {
    list: `${STUDENT_CLASSIFICATION_MICROSERVICE_URL}/api/v1/sexs`,
  },
  provinces: {
    list: `${STUDENT_CLASSIFICATION_MICROSERVICE_URL}/api/v1/provinces`,
    listCantons: `${STUDENT_CLASSIFICATION_MICROSERVICE_URL}/api/v1/provinces/cantons`,
  },
  subjects: {
    list: `${STUDENT_CLASSIFICATION_MICROSERVICE_URL}/api/v1/subjects`,
  },
  periods: {
    list: `${STUDENT_CLASSIFICATION_MICROSERVICE_URL}/api/v1/periods`,
  },
}
