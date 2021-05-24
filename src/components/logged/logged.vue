<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                 <v-card class="ml-5 pt-3 pb-3 text-center blue lighten-2" dark width="200" height="50">{{pagename("FMS MENU")}}Username</v-card>
            </v-col>
            <v-col cols="12">
                <v-card class="d-flex flex-column justify-center align-center blue lighten-4">
                    <v-card-title >Transportation planning modules</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card class="d-flex flex-column justify-center align-center blue lighten-4">
                    <v-card-title >LPN/TO feed verification</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card class="d-flex flex-column justify-center align-center blue lighten-4">
                    <v-card-title >Trip planning</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card class="d-flex flex-column justify-center align-center blue lighten-4">
                    <v-card-title >E-way bill</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card class="d-flex flex-column justify-center align-center blue lighten-4">
                    <v-card-title >LPN/TO feed verification</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card class="d-flex flex-column justify-center align-center blue lighten-4">
                    <v-card-title >Transportation management modules</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card class="d-flex flex-column justify-center align-center blue lighten-4">
                    <v-card-title >Cost calculator</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="6">
                <v-card class="d-flex flex-column justify-center align-center blue lighten-4">
                    <v-card-title >OFIN integration for generating vendor invoice</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="3">
                <v-card class="d-flex flex-column justify-center align-center blue lighten-4">
                    <v-card-title >Monthly fleet planning</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="12" @click="showButtons">
                <v-card class="d-flex flex-column justify-center align-center blue lighten-4 button">
                    <v-card-title>Master</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="3" class="mb-5" v-bind:class="{'d-none':masterClicked}">
                <v-card class="d-flex flex-column justify-center align-center blue lighten-4 button" @click="toOrigin">
                    <v-card-title >Origin Destination</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="3" class="mb-5" v-bind:class="{'d-none':masterClicked}">
                <v-card class="d-flex flex-column justify-center align-center blue lighten-4 button" @click="toVendor">
                    <v-card-title>Vehicle-vendor</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="3" class="mb-5" v-bind:class="{'d-none':masterClicked}">
                <v-card class="d-flex flex-column justify-center align-center blue lighten-4 button" @click="toContract">
                    <v-card-title>Vendor-contract</v-card-title>
                </v-card>
            </v-col>
            <v-col cols="3" class="mb-5" v-bind:class="{'d-none':masterClicked}">
                <v-card class="d-flex flex-column justify-center align-center blue lighten-4 button" @click="toItemsuf">
                    <v-card-title>Item-SUF</v-card-title>
                </v-card>
            </v-col>
            
        </v-row>
    </v-container>
</template>
<script>

export default {
    name:"logged",
    methods:{
    showButtons(){
        this.masterClicked=!this.masterClicked;
    },
    pagename:function(name){
      this.$store.dispatch('pagename',name)
    },
    toOrigin:function(){
        this.$router.push('/origin');
    },
    toVendor:function(){
        this.$router.push('/vendor');
    },
    toContract:function(){
        this.$router.push('/contract');
    },
    toItemsuf:function(){
        this.$router.push('/itemsuf');
    }
  },
    data(){
        return{
        username:"XYZ",
        masterClicked:true,
        }
    }
}
</script>
<style scoped>
    .button{
        cursor:pointer;
    }
</style>
