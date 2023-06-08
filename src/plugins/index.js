export default {
  install (Vue) {
    if (this.installed) return

    this.installed = true

    Vue.prototype.$modal = {
      EventBus: new Vue(),

      show (settings) {
        // console.log('show')
        this.EventBus.$emit('show', settings)
      },

      hide () {
        // console.log('hide')
        this.EventBus.$emit('hide')
      }
    }
  }
}
