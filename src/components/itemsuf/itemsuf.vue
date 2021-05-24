<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="d-flex flex-row justify-space-between">
        <v-card class="ml-5 pt-3 pb-3 text-center blue lighten-2" dark min-width="200" height="50">{{pagename("Item SUF")}}Username</v-card>
        <div>
        <v-card class="ml-5 pt-3 pb-3 text-center blue lighten-2" dark min-width="200" height="80">Date: {{getdate()}}<br/>Time: {{gettime()}}</v-card>
        </div>
        </v-col>
      <v-col cols="12">
        <v-card>
          <v-data-table
    :headers="headers"
    :items="itemsufDetails"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Item SUF</v-toolbar-title>
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
                      v-model="editedItem.dc_id"
                      label="Dc Id"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.item"
                      label="Item"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.item_desc"
                      label="Item Desc"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.division_name"
                      label="Division Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.department_name"
                      label="Department Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.family_name"
                      label="Family Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.class_name"
                      label="Class Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.subclass_name"
                      label="Subclass Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.standard_uom"
                      label="Standard Name"
                    ></v-text-field>
                  </v-col>
                   <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.each_to_tw"
                      label="Each To Tw"
                    ></v-text-field>
                  </v-col>
                   <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.suf"
                      label="Suf"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.suf_status"
                      label="Suf Status"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.crate_type"
                      label="Crate Type"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.crate_weight_kg"
                      label="Crate Weight Kg"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.crate_vol_cft"
                      label="Crate Vol Cft"
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
  name: "itemsuf",
    data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Dc Id",
        align: "start",
        value: "dc_id",
      },
      {
        text: "Item",
        sortable: false,
        value: "item",
      },
      {
        text: "Item Desc",
        sortable: false,
        value: "item_desc",
      },
      {
        text: "Division Name",
        sortable: false,
        value: "division_name",
      },
      {
        text: "Department Name",
        sortable: false,
        value: "department_name",
      },
      {
        text: "Family Name",
        sortable: false,
        value: "family_name",
      },
      {
        text: "Class Name",
        sortable: false,
        value: "class_name",
      },
      {
        text: "Subclass Name",
        sortable: false,
        value: "subclass_name",
      },
      {
        text: "Standard Uom",
        sortable: false,
        value: "standard_uom",
      },
      {
        text: "Each To Tw",
        value: "each_to_tw",
      },
      {
        text: "Suf",
        value: "suf",
      },
      {
        text: "Suf Status",
        sortable: false,
        value: "suf_status",
      },
      {
        text: "Crate Type",
        sortable: false,
        value: "crate_type",
      },
      {
        text: "Crate Weight Kg",
        value: "crate_weight_kg",
      },
      {
        text: "Crate Vol Cft",
        value: "crate_vol_cft",
      },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    itemsufDetails:[],
    editedIndex: -1,
    editedItem: {
        dc_id:0,
        item: 0,
        item_desc: "",
        division_name: "",
        department_name: "",
        family_name: "",
        class_name: "",
        subclass_name: "",
        standard_uom: "",
        each_to_tw: 0,
        suf: 0,
        suf_status: "",
        crate_type: "",
        crate_weight_kg: 0,
        crate_vol_cft:0,
      },
      defaultItem: {
        dc_id:0,
        item: 0,
        item_desc: "",
        division_name: "",
        department_name: "",
        family_name: "",
        class_name: "",
        subclass_name: "",
        standard_uom: "",
        each_to_tw: 0,
        suf: 0,
        suf_status: "",
        crate_type: "",
        crate_weight_kg: 0,
        crate_vol_cft:0,
      },
  }),
  computed: {
    getitemsufDetails() {
      return this.$store.state.itemsufDetails;
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
    },
    getdate(){
    let temp = new Date()
    let date  = temp.toLocaleDateString();
    date = date.replaceAll("/","-");
    return date;
    },
    gettime(){
    let temp = new Date()
    let time = temp.toLocaleTimeString();
    return time;
    },
     initialize () {
        console.log("began init")
        this.itemsufDetails = this.getitemsufDetails;
      },

      editItem (item) {
        this.editedIndex = this.itemsufDetails.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.itemsufDetails.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.itemsufDetails.splice(this.editedIndex, 1)
        this.$store.dispatch('updateTable',["itemsufDetails",this.itemsufDetails]);
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
          Object.assign(this.itemsufDetails[this.editedIndex], this.editedItem)
          this.$store.dispatch('updateTable',["itemsufDetails",this.itemsufDetails]);
        } else {
          console.log("data pushed")
          this.itemsufDetails.push(this.editedItem)
          this.$store.dispatch('updateTable',["itemsufDetails",this.itemsufDetails]);
        }
        this.close()
      },
  },
}
</script>
