<template>
<v-container>
  <v-row>
        <v-col cols="12" class="d-flex flex-row justify-space-between">
        <v-card class="ml-5 pt-3 pb-3 text-center blue lighten-2" dark min-width="200" height="50">{{pagename("Vendor Contract")}}Username</v-card>
        <div>
        <v-card class="ml-5 pt-3 pb-3 text-center blue lighten-2" dark min-width="200" height="80">Date: {{getdate()}}<br/>Time: {{gettime()}}</v-card>
        </div>
      </v-col>
    <v-col cols="12">
      <v-data-table
    :headers="headers"
    :items="Details"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Vendor contract</v-toolbar-title>
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
                      v-model="editedItem.contract_type"
                      label="Contract Type"
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
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Transporter Name',
          align: 'start',
          sortable: false,
          value: 'transporter_name',
        },
        { text: 'Vehicle No', value: 'vehicle_no',sortable:false},
        { text: 'Contract Type', value: 'contract_type',sortable:false },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      Details:[],
      editedIndex: -1,
      editedItem: {
        transporter_name: '',
        vehicle_no: '',
        contract_type:'',
      },
      defaultItem: {
        transporter_name: '',
        vehicle_no: '',
        contract_type:'',
      },
    }),

    computed: {
      contractDetails(){
        console.log("details loaded")
        return this.$store.state.contractDetails;
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

    methods: {
      pagename: function (name) {
      this.$store.dispatch("pagename", name);
    },getdate(){
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
        this.Details = this.contractDetails;
      },

      editItem (item) {
        this.editedIndex = this.Details.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.Details.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.Details.splice(this.editedIndex, 1)
        this.$store.dispatch('updateTable',["contractDetails",this.Details]);
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
          Object.assign(this.Details[this.editedIndex], this.editedItem);
          this.$store.dispatch('updateTable',["contractDetails",this.Details]);
        } else {
          console.log("data pushed")
          this.Details.push(this.editedItem)
          this.$store.dispatch('updateTable',["contractDetails",this.Details]);
        }
        this.close()
      },
    },
  }
</script>
