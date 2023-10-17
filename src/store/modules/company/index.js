const company = {
  namespaced: true, // This sets up a namespace for the module
  // State of company
  state: () => ({
    companies: [
      {
        id: 1,
        titleCompany: 'AC',
        nameCompany: 'A.C. Telecom',
        nickNameCompany: '@ac-telecom',
        typeCompany: 'Startup - tecnología',
        active: true,
        city: 'Floridablanca',
        country: 'Colombia',
        description:
          'En ac telecom somos expertos en telecomunicaciones con mas de 25 años comprobables en el mercado, brindando empleo a mas de 321 empleados al rededor de todo el mundo ',
        email: 'ejemplo@ejemplo.com',
        phone: '3005895648',
        states: 'Emprendedor, practicas, primer empleo ',
        jobMoreSeeking: 'Lider UX',
        reviews: 10,
        linkCompany: 'https://www.actelecom.net/telecom',
        historyCompany: [
          {
            icon: 'IconUsers',
            header: 'Talentos',
            number: 20
          },
          {
            icon: 'IconEye',
            header: 'Vistas del perfil',
            number: 20
          },
          {
            icon: 'IconVideo',
            header: 'Pitches recibidos',
            number: 20
          },
          {
            icon: 'IconTransporter',
            header: 'Exhibiciones',
            number: 20
          },
          {
            icon: 'IconFileUser',
            header: 'Vacantes',
            number: 20
          },
          {
            icon: 'IconPhotoVideo',
            header: 'Contenidos',
            number: 20
          }
        ],
        percentage: 6
      },
      {
        id: 2,
        titleCompany: 'XYZ',
        nameCompany: 'XYZ Tech Solutions',
        nickNameCompany: '@xyz-tech',
        typeCompany: 'Tech Services',
        active: false,
        city: 'Bogotá',
        country: 'Colombia',
        description:
          'XYZ Tech Solutions is a leading technology services company based in Bogotá, Colombia. Our team is dedicated to providing innovative solutions to our clients.',
        email: 'contact@xyztechsolutions.com',
        phone: '123456789',
        states: 'Full-time, part-time, remote',
        jobMoreSeeking: 'Senior Software Engineer',
        reviews: 5,
        linkCompany: 'https://www.xyztechsolutions.com',
        historyCompany: [
          {
            icon: 'IconUsers',
            header: 'Talentos',
            number: 15
          },
          {
            icon: 'IconEye',
            header: 'Vistas del perfil',
            number: 15
          },
          {
            icon: 'IconVideo',
            header: 'Pitches recibidos',
            number: 10
          },
          {
            icon: 'IconTransporter',
            header: 'Exhibiciones',
            number: 8
          },
          {
            icon: 'IconFileUser',
            header: 'Vacantes',
            number: 12
          },
          {
            icon: 'IconPhotoVideo',
            header: 'Contenidos',
            number: 18
          }
        ],
        percentage: 3
      }
    ]
  }),
  getters: {
    getCompanyById: (state) => (id) => {
      return state.companies.find((company) => company.id === id)
    }
  },
  mutations: {
    // Mutations for update of state Company
  },
  actions: {
    // Actions for make changing asynchronous on State Company
  }
}

export default company
