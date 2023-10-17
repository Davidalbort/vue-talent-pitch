const vacancies = {
  namespaced: true, // This sets up a namespace for the module
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
              description:
                'Develop and maintain software applications. Collaborate with cross-functional teams for product enhancement.',
              watch: 50,
              comments: 10,
              pitches: 20
            },
            {
              id: 2,
              experience: 2,
              nameVacancy: 'UX Designer',
              description:
                'Design user-friendly interfaces with a focus on enhancing the user experience. Create intuitive designs.',
              watch: 30,
              comments: 5,
              pitches: 15
            },
            {
              id: 3,
              experience: 4,
              nameVacancy: 'Data Analyst',
              description:
                'Analyze data to extract insights and trends. Generate data-driven reports for informed decision-making.',
              watch: 40,
              comments: 8,
              pitches: 18
            },
            {
              id: 4,
              experience: 1,
              nameVacancy: 'Marketing Specialist',
              description:
                'Plan and execute marketing campaigns. Implement strategies to drive brand visibility and engagement.',
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
              description:
                'Lead and mentor software development teams. Oversee architecture and drive technical excellence.',
              watch: 60,
              comments: 15,
              pitches: 25
            },
            {
              id: 6,
              experience: 2,
              nameVacancy: 'UI Designer',
              description:
                'Create visually appealing user interfaces. Craft engaging designs to captivate the user.',
              watch: 35,
              comments: 7,
              pitches: 17
            },
            {
              id: 7,
              experience: 4,
              nameVacancy: 'Data Scientist',
              description:
                'Apply advanced data science techniques to solve complex problems. Leverage data for insights.',
              watch: 45,
              comments: 9,
              pitches: 19
            },
            {
              id: 8,
              experience: 3,
              nameVacancy: 'Digital Marketer',
              description:
                'Develop and implement digital marketing strategies. Drive online visibility and brand growth.',
              watch: 25,
              comments: 4,
              pitches: 12
            }
          ]
        }
      ]
    }
  },
  getters: {
    getVacanciesByIdCompany: (state) => (id) => {
      return state.companyVacancies.find((company) => company.id === id)
    }
  },
  mutations: {
    // Mutations for update of state Vacancies
  },
  actions: {
    // Actions for make changing asynchronous on State Vacancies
  }
}

export default vacancies
