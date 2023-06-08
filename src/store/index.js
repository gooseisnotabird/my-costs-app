import Vue from 'vue'
import Vuex from 'vuex'
import categoryList from '@/store/categoryList'

Vue.use(Vuex)

const API_DATA = {
  page1: [
    {
      date: '28.03.2020',
      category: 'Food',
      value: 169
    },
    {
      date: '5.11.2020',
      category: 'Education',
      value: 1000
    },
    {
      date: '24.03.2020',
      category: 'Transport',
      value: 360
    },
    {
      date: '17.03.2020',
      category: 'Food',
      value: 500
    },
    {
      date: '5.05.2020',
      category: 'Home',
      value: 460
    },
    {
      date: '28.03.2020',
      category: 'Food',
      value: 169
    },
    {
      date: '8.11.2020',
      category: 'Education',
      value: 1000
    },
    {
      date: '12.10.2020',
      category: 'Transport',
      value: 360
    },
    {
      date: '21.03.2020',
      category: 'Food',
      value: 120
    },
    {
      date: '4.03.2020',
      category: 'Transport',
      value: 360
    },
    {
      date: '5.05.2020',
      category: 'Home',
      value: 460
    },
    {
      date: '24.03.2020',
      category: 'Food',
      value: 700
    },
    {
      date: '24.03.2020',
      category: 'Transport',
      value: 360
    },
    {
      date: '5.11.2020',
      category: 'Education',
      value: 1000
    },
    {
      date: '9.05.2020',
      category: 'Home',
      value: 460
    },
    {
      date: '24.03.2020',
      category: 'Food',
      value: 532
    },
    {
      date: '19.03.2020',
      category: 'Food',
      value: 532
    },
    {
      date: '24.06.2020',
      category: 'Transport',
      value: 360
    },
    {
      date: '15.03.2020',
      category: 'Food',
      value: 200
    },
    {
      date: '05.05.2020',
      category: 'Home',
      value: 460
    },
    {
      date: '24.03.2020',
      category: 'Food',
      value: 532
    },
    {
      date: '18.12.2020',
      category: 'Transport',
      value: 360
    },
    {
      date: '24.08.2020',
      category: 'Transport',
      value: 360
    },
    {
      date: '6.11.2020',
      category: 'Education',
      value: 800
    },
    {
      date: '3.05.2020',
      category: 'Home',
      value: 460
    }
  ]
}

export default new Vuex.Store({
  state: {
    paymentsListByPage: {},
    paymentsList: []
    // categoryList: []
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    // categoryList: (state) => state.categoryList,
    totalCost: ({ paymentsList }) => paymentsList
      .reduce((total, { value }) => total + value, 0)
  },
  mutations: {
    SET_PAYMENTS_LIST (state, paymentsList) {
      state.paymentsList = paymentsList
    },
    // SET_CATEGORY_LIST (state, categoryList) {
    //   state.categoryList = categoryList
    // },
    ADD_PAYMENT_DATA (state, payment) {
      state.paymentsList.push(payment)
    }
    // EDIT_PAYMENT_DATA (state, editedPayment) {
    //   state.paymentsList[1] = editedPayment
    //   state.paymentsList = [...state.paymentsList]
    //   // Vue.set(this.state.paymentsList, 1, editedPayment)
    // }
  },
  actions: {
    fetchData ({ commit }) {
      setTimeout(() => {
        const initialPaymentsList = API_DATA.page1

        commit('SET_PAYMENTS_LIST', initialPaymentsList)
      }, 1000)
    },

    fetchPageData ({ commit, state }, page) {
      if (!this.state[page]) {
        // fetching page data from API
        // commit mutation to paymentsListByPage
      }
    },
    addNewPayment ({ commit }, newPayment) {
      commit('ADD_PAYMENT_DATA', newPayment)
    }
  },
  modules: {
    categoryList
  }
})
