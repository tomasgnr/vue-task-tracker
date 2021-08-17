<template>
  <v-app>
    <v-card
      class="mx-auto"
      width="800"
      color="grey lighten-1"
    >
      <Header />
      <router-view></router-view>
      <Footer />
    </v-card>
  </v-app>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>
