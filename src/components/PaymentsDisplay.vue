<template>
  <v-container>
    <v-row>
      <v-col cols="1">#</v-col>
      <v-col cols="4">Date</v-col>
      <v-col cols="4">Category</v-col>
      <v-col cols="3">Value</v-col>
    </v-row>
    <v-row v-for="({value, category, date }, index) in pageList" :key="index">
      <v-col cols="1">{{ index +1 }}</v-col>
      <v-col cols="4">{{ date }}</v-col>
      <v-col cols="4">{{ category }}</v-col>
      <v-col cols="3">{{ value }}</v-col>
    </v-row>
        <v-row>
          <v-pagination
          dark
          v-model="currentPage"
          :length="Math.round(items.length / pageSize)"
          @input="pageSelect"
          />
         </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'PaymentsDisplay',
  data () {
    return {
      currentPage: 1,
      pageSize: 10,
      paginLength: 9
    }
  },

  props: {
    items: {
      type: Array,
      default: () => ([])
    },
    show: Boolean
  },

  methods: {
    pageSelect (page) {
      this.currentPage = page
    }
  },

  computed: {
    pageList () {
      const { currentPage, pageSize } = this
      const start = (currentPage - 1) * pageSize
      const end = start + pageSize

      return this.items.slice(start, end)
    }
  }
}

</script>

<style module>

</style>
