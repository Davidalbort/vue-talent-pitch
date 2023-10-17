const vacanciesModule = {
  state() {
    // State of Vacancies
    return {
      companyVacancies: [
        {
          id: 1,
          vacancies: [
            {
              id: 1,
              experience: 3,
              nameVacancy: 'Software Engineer',
              watch: 50,
              comments: 10,
              pitches: 20
            },
            {
              id: 2,
              experience: 2,
              nameVacancy: 'UX Designer',
              watch: 30,
              comments: 5,
              pitches: 15
            },
            {
              id: 3,
              experience: 4,
              nameVacancy: 'Data Analyst',
              watch: 40,
              comments: 8,
              pitches: 18
            },
            {
              id: 4,
              experience: 1,
              nameVacancy: 'Marketing Specialist',
              watch: 20,
              comments: 3,
              pitches: 10
            }
          ]
        },
        {
          id: 2,
          vacancies: [
            {
              id: 5,
              experience: 5,
              nameVacancy: 'Senior Software Engineer',
              watch: 60,
              comments: 15,
              pitches: 25
            },
            {
              id: 6,
              experience: 2,
              nameVacancy: 'UI Designer',
              watch: 35,
              comments: 7,
              pitches: 17
            },
            {
              id: 7,
              experience: 4,
              nameVacancy: 'Data Scientist',
              watch: 45,
              comments: 9,
              pitches: 19
            },
            {
              id: 8,
              experience: 3,
              nameVacancy: 'Digital Marketer',
              watch: 25,
              comments: 4,
              pitches: 12
            }
          ]
        }
      ]
    }
  },
  mutations: {
    // Mutations for update of state Vacancies
  },
  actions: {
    // Actions for make changing asynchronous on State Vacancies
  }
}

export default vacanciesModule
