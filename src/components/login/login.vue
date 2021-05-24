<template> 
    <v-form>
    <v-container>
      <v-row class="d-flex flex-column justify-center align-center log">
        <v-card color="blue lighten-4" width="500" height="250">
          <v-col
          cols="12"
          sm="6"
          md="8"
          class="ml-5"
          
        >{{pagename("FMS")}}
          <v-text-field
            :rules="[rules.required]"
            label="Username"
            hint="Enter Username"
            placeholder="Username"
            ref="username"
            v-model="username"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="8"
          class="ml-5"
        >
          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required]"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Password"
            hint="At least 8 characters"
            placeholder="Password"
            class="input-group--focused"
            ref="password"
            v-model="password"
             @click:append="show2 = !show2"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4" md="6" class="ml-5">
            <v-btn to="/logged" class="primary">Login</v-btn>
        </v-col>
        </v-card>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
    name:"login",
     data () {
      return {
        username:null,
        password:null,
        show2:false,
        rules: {
          required: value => !!value || 'Required.',
        },
      }
    },
      methods:{
        checkLogin:function(){
            if(this.username === "swamy" && this.password === "swamy"){
                    console.log("login success full");
            }
            else{
                console.log("user not registered here");
            }
            },       
    pagename:function(name){
      console.log("origin page");
      this.$store.dispatch('pagename',name);
    }
  },
        
    
}
</script>
<style scoped>
.log{
    margin-top:150px;

}
</style>