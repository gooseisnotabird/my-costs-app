<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-btn to="/dashboard" :rippe="false" plain >Dashboard</v-btn>
    <v-btn to="/about" :rippe="false" plain>About</v-btn>
    <v-spacer></v-spacer>

    </v-app-bar>
    <v-main>
    <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang="scss">
  .v-application--wrap  {
    background-color: rgb(68 68 68);
    color: aliceblue;
    width: 400px;
  }
</style>
