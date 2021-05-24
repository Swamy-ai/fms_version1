<template>
<v-container>
  <v-row>
    <v-col cols="12" class="d-flex flex-row justify-space-between">
        <v-card class="ml-5 pt-3 pb-3 text-center blue lighten-2" dark min-width="200" height="50">{{pagename("Origin Destination")}}Username</v-card>
        <div>
        <v-card class="ml-5 pt-3 pb-3 text-center blue lighten-2" dark min-width="200" height="80">Date: {{getdate()}}<br/>Time: {{gettime()}}</v-card>
        </div>
        </v-col>
    <v-col cols="12">
      <v-data-table
      :headers="headers"
      :items="originDestination"
      class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Origin-Destination</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.supplying_dc_location"
                      label="Supplying Dc Location"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.delivery_type_dry_f_v_combi"
                      label="Delivery type Dry/F&V/Combi"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.format_sm_hm"
                      label="Format SM/HM"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.store_code"
                      label="Store Code"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.store_name"
                      label="Store Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.dry_loading_slot"
                      label="Dry Loading Slot"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.f_v_loading_slot"
                      label="F&V Loading Slot"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.dc_leaving_time"
                      label="Dc Leaving Time"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.max_return_back_to_dc_time"
                      label="Max return back to DC time"
                    ></v-text-field>
                  </v-col>
                   <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.does_the_vehicle_return_in_same_day"
                      label="Does the vehicle return in same day"
                    ></v-text-field>
                  </v-col>
                   <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.tag_local_upc"
                      label="Tag Local upc"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.city_zone"
                      label="City Zone"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.store_latitude"
                      label="Store Latitude"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.store_longitude"
                      label="Store Longitude"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.delivery_slot"
                      label="Delivery Slot"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.type_of_vehicle_used"
                      label="Type of vehicle used"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.highest_capacity_vehicle_which_can_be_used"
                      label="Highest capacity vehicle which can be used"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.remarks_1"
                      label="Remarks 1"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.remarks_2"
                      label="Remarks 2"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
export default {
  name: "origin",
  data: () => ({
     dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Supplying DC Location",
        align: "start",
        sortable: false,
        value: "supplying_dc_location",
        width:"180",
      },
      {
        text: "Delivery type Dry/F&V/Combi",
        sortable: false,
        value: "delivery_type_dry_f_v_combi",
        width:"200",
      },
      {
        text: "Format SM/HM",
        sortable: false,
        value: "format_sm_hm",
        width:"150",
      },
      {
        text: "Store Code",
        sortable: false,
        value: "store_code",
        width:"180",
      },
      {
        text: "Store Name",
        sortable: false,
        value: "store_name",
        width:"180",
      },
      {
        text: "Dry loading slot",
        value: "dry_loading_slot",
        width:"180",
      },
      {
        text: "F&V loading slot",

        value: "f_v_loading_slot",
        width:"180",
      },
      {
        text: "DC leaving time",

        value: "dc_leaving_time",
        width:"180",
      },
      {
        text: "Max return back to DC time",
        value: "max_return_back_to_dc_time",
        width:"180",
      },
      {
        text: "Does the vehicle return in same day",
        sortable: false,
        value: "does_the_vehicle_return_in_same_day",
        width:"180",
      },
      {
        text: "Tag Local/UPC",
        sortable: false,
        value: "tag_local_upc",
        width:"180",
      },
      {
        text: "City ZONE",
        sortable: false,
        value: "city_zone",
        width:"180",
      },
      {
        text: "Store Latitude",
        value: "store_latitude",
        width:"180",
      },
      {
        text: "Store Longitude",
        value: "store_longitude",
        width:"180",
      },
      {
        text: "Delivery Slot",
        sortable: false,
        value: "delivery_slot",
        width:"180",
      },
      {
        text: "Type of vehicle used",
        sortable: false,
        value: "type_of_vehicle_used",
        width:"180",
      },
      {
        text: "Highest capacity vehicle which can be used",
        sortable: false,
        value: "highest_capacity_vehicle_which_can_be_used",
        width:"180",
      },
      {
        text: "Remarks 1",
        sortable: false,
        value: "remarks_1",
        width:"180",
      },
      {
        text: "Remarks 2",
        sortable: false,
        value: "remarks_2",
        width:"180",
      },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    originDestination:[],
        editedIndex: -1,
        editedItem: {
            "supplying_dc_location": "",
            "delivery_type_dry_f_v_combi": "",
            "format_sm_hm": "",
            "store_code": 0,
            "store_name": "",
            "dry_loading_slot": 0,
            "f_v_loading_slot": 0,
            "dc_leaving_time": 0,
            "max_return_back_to_dc_time": 0,
            "does_the_vehicle_return_in_same_day": "",
            "tag_local_upc": "",
            "city_zone": "",
            "store_latitude": 0,
            "store_longitude": 0,
            "delivery_slot": "",
            "type_of_vehicle_used": "",
            "highest_capacity_vehicle_which_can_be_used": "",
            "remarks_1": "",
            "remarks_2": ""
      },
      defaultItem: {
            "supplying_dc_location": "",
            "delivery_type_dry_f_v_combi": "",
            "format_sm_hm": "",
            "store_code": 0,
            "store_name": "",
            "dry_loading_slot": 0,
            "f_v_loading_slot": 0,
            "dc_leaving_time": 0,
            "max_return_back_to_dc_time": 0,
            "does_the_vehicle_return_in_same_day": "",
            "tag_local_upc": "",
            "city_zone": "",
            "store_latitude": 0,
            "store_longitude": 0,
            "delivery_slot": "",
            "type_of_vehicle_used": "",
            "highest_capacity_vehicle_which_can_be_used": "",
            "remarks_1": "",
            "remarks_2": ""
      },
  }),
  computed: {
    getoriginDestination() {
      return this.$store.state.originDestination;
    },
     formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
  },
  watch: {
      dialog (val) {
        console.log("watch")
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      console.log("init")
      this.initialize()
    },
  methods:{
    pagename:function(name){
      
      this.$store.dispatch('pagename',name);
    },
    getdate(){
    let temp = new Date()
    let date  = temp.toLocaleDateString();
    date = date.replaceAll("/","-");
    return date
    },
    gettime(){
    let temp = new Date()
    let time = temp.toLocaleTimeString();
    return time;
    },
    initialize () {
        console.log("began init")
        this.originDestination = this.getoriginDestination;
      },
      editItem (item) {
        this.editedIndex = this.originDestination.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.originDestination.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.originDestination.splice(this.editedIndex, 1)
        this.$store.dispatch('updateTable',["originDestination",this.originDestination]);
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        console.log("save button clicked")
        console.log(this.editedItem)
        console.log(this.editedIndex)
        if (this.editedIndex > -1) {
          Object.assign(this.originDestination[this.editedIndex], this.editedItem)
          this.$store.dispatch('updateTable',["originDestination",this.originDestination]);
        } else {
          console.log("data pushed")
          this.originDestination.push(this.editedItem)
          this.$store.dispatch('updateTable',["originDestination",this.originDestination]);
        }
        this.close()
      },

  },
  
};
</script>

<style scoped>
.table {
  margin-top: 70px;
  width: 90%;
}
</style>