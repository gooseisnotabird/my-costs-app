<template>
  <v-container>
    <v-row>
      <div class="text-h5 text-sm-h3">My personal costs: {{ totalCost }}</div>
    </v-row>
    <v-row>
      <v-col>
        <v-dialog v-model="showModal">
          <template v-slot:activator="{on}">
            <v-btn
            color="primary"
            v-on="on"
            @click="showModal = !showModal"
            >
            Add new payment
            <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
          <AddPaymentForm/>
          </v-card>
        </v-dialog>
        <div>
          <PaymentsDisplay :items="paymentsList"/>
        </div>
      </v-col>
      <v-col>
        <PieChart/>
      </v-col>
    </v-row>
  </v-container>
  <!-- <div>
    <div :class="$style.header">My personal costs: <span :class="$style.money">{{ totalCost }}</span> </div>
    <button :class="$style.btn" @click="authModal">Auth</button>
    <button :class="$style.btn" @click="addPayment">Add Payment</button>
    <PaymentsDisplay
    :items="paymentsList" showItems
    />
  </div> -->
</template>

<script>
import PaymentsDisplay from '@/components/PaymentsDisplay.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'
import AddPaymentForm from '../src/components/AddPaymentForm.vue'
import PieChart from '../src/components/Pie.vue'

export default {
  name: 'Dashboard',
  data: () => ({
    showModal: false,
    modalSettings: {}
  }),
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    PieChart
  },
  computed: {
    ...mapGetters(['paymentsList', 'totalCost'])
  },
  methods: {
    ...mapActions(['fetchData', 'fetchCategoryData']),
    ...mapMutations(['ADD_PAYMENT_DATA']),
    addPayment () {
      // console.log(this.addPayment)
      // console.log(this.$modal)
      this.$modal.show({ title: 'Add new payment', content: 'addPaymentForm' })
    },
    authModal () {
      this.$modal.show({ title: 'Auth', content: 'auth' })
    }
  },
  created () {
    this.fetchCategoryData()
    this.fetchData()
    console.log(this.$route)
  },

  mounted () {
    if (this.$route.params.payment) this.addPayment()
  }
}
</script>

<style module>

</style>
