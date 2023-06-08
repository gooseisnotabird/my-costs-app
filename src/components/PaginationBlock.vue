<template>
  <v-row>
    <v-pagination
    dark
    v-model="currentPage"
    :length="pageCount"
    @input="selectedPage"
    />
   </v-row>
</template>

<script>
export default {
  name: 'PaginationBlock',
  props: {
    listLength: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 5
    },
    startPage: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    selectedPage: null
  }),
  computed: {
    pageCount () {
      return Math.ceil(this.listLength / this.pageSize)
    }
  },
  methods: {
    selectPage (page) {
      this.selectedPage = page
      this.$emit('select-page', this.selectedPage)
    }
  },
  created () {
    this.selectedPage = this.startPage
  }
}
</script>

<style lang="scss" scoped>
.paginate {
  display: flex;
  justify-content: center;
}
.page-link {
  display: flex;
  align-items: center;
  font-size: 18px;
  margin: 4px;
  text-decoration: none;
  color: rgb(255, 255, 255);

&:hover {
   cursor: pointer;
 }

&_active {
  font-size: 22px;
   color: #28c9a6;
   font-weight: 500;
 }
}
</style>
