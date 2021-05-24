<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex flex-row justify-space-between">
        <v-card class="ml-5 pt-3 pb-3 text-center blue lighten-2" dark min-width="200" height="50">{{pagename("Vehicle-Vendor")}}Username</v-card>
        <div>
        <v-card class="ml-5 pt-3 pb-3 text-center blue lighten-2" dark min-width="200" height="80">Date: {{getdate()}}<br/>Time: {{gettime()}}</v-card>
        
        </div>
      </v-col>
      <v-col
      cols="12">
    <v-card class="vendortable">
    <v-data-table
    :headers="headers"
    :items="vendorDetails"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Vehicle Vendor</v-toolbar-title>
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
                      v-model="editedItem.dc_location"
                      label="Dc Location"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.dry_f_v"
                      label="Dry F&V"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.transporter_name"
                      label="Transporter Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.vehicle_no"
                      label="Vehicle No"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.vehicle_payload_capacity"
                      label="Vehicle Payload Capacity"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.payload"
                      label="Payload"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.length"
                      label="Length"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.width"
                      label="Width"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.height"
                      label="Height"
                    ></v-text-field>
                  </v-col>
                   <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.volume_cft"
                      label="Volume Cft"
                    ></v-text-field>
                  </v-col>
                   <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.usage_zone"
                      label="Usage Zone"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.format"
                      label="Format"
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
    </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
    name:"vehicle",
    data:() =>({
      dialog: false,
    dialogDelete: false,
headers: [
        {
          text: 'Dc Location',
          align: 'start',
          sortable: false,
          value: 'dc_location',
        },
        {
          text: 'Dry F&V',
          sortable: false,
          value: 'dry_f_v',
        },
         {
          text: 'Transporter Name',
          sortable: false,
          value: 'transporter_name',
        },
        {
          text: 'Vehicle No',
          sortable: false,
          value: 'vehicle_no',
        },
        {
          text: 'Vehicle Payload Capacity',
          sortable: false,
          value: 'vehicle_payload_capacity',
        },
        {
          text: 'Payload',
          value: 'payload',
        },
        {
          text: 'Length',
          
          value: 'length',
        },
        {
          text: 'Width',
          
          value: 'width',
        },
        {
          text: 'Height',
          value: 'height',
        },
        {
          text: 'Volume Cft',
          value: 'volume_cft',
        },
        {
          text: 'Usage Zone',
          sortable: false,
          value: 'usage_zone',
        },
        {
          text: 'Format',
          sortable: false,
          value: 'format',
        },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
       vendorDetails:[],
        editedIndex: -1,
        editedItem: {
        "dc_location": "",
        "dry_f_v": "",
        "transporter_name": "",
        "vehicle_no": "",
        "vehicle_payload_capacity": "",
        "payload": 0,
        "length": 0,
        "width": 0,
        "height": 0,
        "volume_cft": 0,
        "usage_zone": "",
        "format": ""
      },
      defaultItem: {
        "dc_location": "",
        "dry_f_v": "",
        "transporter_name": "",
        "vehicle_no": "",
        "vehicle_payload_capacity": "",
        "payload": 0,
        "length": 0,
        "width": 0,
        "height": 0,
        "volume_cft": 0,
        "usage_zone": "",
        "format": ""
      },
    }),
	computed: {
    getvendorDetails() {
      return this.$store.state.vendorDetails;
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
    pagename:function(name){
      this.$store.dispatch('pagename',name);
    },initialize () {
        console.log("began init")
        this.vendorDetails = this.getvendorDetails;
      },
      editItem (item) {
        this.editedIndex = this.vendorDetails.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.vendorDetails.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.vendorDetails.splice(this.editedIndex, 1)
        this.$store.dispatch('updateTable',["vendorDetails",this.vendorDetails]);
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
          Object.assign(this.vendorDetails[this.editedIndex], this.editedItem)
          this.$store.dispatch('updateTable',["vendorDetails",this.vendorDetails]);
        } else {
          console.log("data pushed")
          this.vendorDetails.push(this.editedItem)
          this.$store.dispatch('updateTable',["vendorDetails",this.vendorDetails]);
        }
        this.close()
      },

  },
}
</script>
<style scoped>
.vendortable{
    margin:50px;
    width:"80%";
}
</style>
