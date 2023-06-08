<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="dashboard" class="router-link">Dashboard</router-link>
        <router-link to="about" class="router-link">About</router-link>
        <router-link to="notfound" class="router-link">Not Found</router-link>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
    <transition name="fade">
      <ModalWindowAddPayment
        v-if="showModal"
        :settings="modalSettings"
      />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    ModalWindowAddPayment: () => import(/* webpackChunkName: "ModalWindow" */ '@/components/ModalWindowAddPayment.vue')
  },
  data: () => ({
    showModal: false,
    modalSettings: {}
  }),
  methods: {
    modalOpen (settings) {
      this.modalSettings = settings
      this.showModal = true
    },

    modalClose () {
      this.showModal = false
    }
  },
  mounted () {
    // console.log(this.$modal)
    this.$modal.EventBus.$on('show', this.modalOpen)
    this.$modal.EventBus.$on('hide', this.modalClose)
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background-color: rgb(68 68 68);
}

a.router-link {
  margin: 20px;
}
.router-link {
  text-decoration: none;
  margin: 0 5px;
  color: #28c9a6;
  font-family: sans-serif;
  letter-spacing: 0.05em;
  font-size: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
