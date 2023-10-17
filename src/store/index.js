// import modules
import { createStore } from 'vuex'
import company from './modules/company'
import vacanciesModule from './modules/vacancies/index'
const store = createStore({
  state: {
    companyId: 1
  },
  mutations: {
    // Mutations for update of state
  },
  actions: {
    // Actions for make changing asynchronous on State
  },
  modules: {
    company,
    vacancies: vacanciesModule
  }
})

export default store
