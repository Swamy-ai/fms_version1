<template>
  <v-app>
    <v-app-bar app color="blue lighten-2" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./components/login/Picture1.png"
          transition="scale-transition"
          width="120"
        />
      </div>
      <v-spacer></v-spacer>
      <div>
        <h1>{{this.$store.state.page_name.name}}</h1>
        
      </div>

      <v-spacer></v-spacer>

      <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="./components/login/Picture2.png"
          transition="scale-transition"
          width="100"
        />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  

  data: () => ({
    //pagename("FMS")
  }),
};
</script>
