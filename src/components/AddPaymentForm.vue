<template>
  <v-card class="text-left pa-8">
    <v-text-field v model="date" label="Date"/>
    <v-select
    v-model="category"
    label="Category"
    :items="categoryList"
    />
    <v-text-field v-model="value" label="Value"/>
    <v-btn @click="addPayment" color="primary">Add payment</v-btn>
  </v-card>
  <!-- <div>
    <div>
      <input :class="$style.costsInputs" type="text" placeholder="Amount" v-model="value">
      <select :class="$style.costsInputs" v-model="category">
        <option
          v-for="category of categoryList"
          :value="category"
          :key="category"
        >{{ category }}</option>
      </select>
      <input :class="$style.costsInputs" type="text" placeholder="Date" v-model="date">
      <button :class="$style.costsInputs" @click="addPayment">Add</button>
    </div>
  </div> -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import categoryList from '../store/categoryList'

export default {
  name: 'AddPaymentForm',
  data: () => ({
    value: '',
    category: '',
    date: ''
  }),
  methods: {
    ...mapActions(['addNewPayment']),
    addPayment () {
      // console.log('add', this.currenDate)
      const { value, category, date, currentDate } = this
      const data = {
        value: +value,
        category,
        // date: date ? date : currentDate
        date: date || currentDate
      }
      // console.log(data)

      this.addNewPayment(data)
      // this.$emit('add-payment', data)
    }
  },
  computed: {
    ...mapGetters(['categoryList']),
    currentDate () {
      const currentDate = new Date()
      const day = currentDate.getDate()
      const month = currentDate.getMonth() + 1
      const year = currentDate.getFullYear()

      return `${day}.${month}.${year}`
    }
  }
}
</script>

<style module>

</style>
