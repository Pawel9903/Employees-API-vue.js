<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Wyszukiwarka" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Szukaj" />
            <b-input-group-append>
              <b-btn :disabled="!filter" @click="filter = ''">Wyczyść</b-btn>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Sortuj" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- Brak --</option>
            </b-form-select>
            <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
              <option :value="false">rosnąco</option>
              <option :value="true">malejąco</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Sortowanie" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortDirection" slot="append">
              <option value="asc">rosnąco</option>
              <option value="desc">malejąco</option>
              <option value="last">ostatni</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-form-group horizontal label="Na stronie" class="mb-0">
          <b-form-select :options="pageOptions" v-model="perPage" />
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table show-empty
             stacked="md"
             :items="items"
             :fields="fields"
             :current-page="currentPage"
             :per-page="perPage"
             :filter="filter"
             :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :sort-direction="sortDirection"
             @filtered="onFiltered"
    >
      <template slot="name" slot-scope="row">{{row.value.name}} {{row.value.surname}}</template>
      <template slot="isActive" slot-scope="row">{{row.value?'Yes :)':'No :('}}</template>
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <router-link tag="button" size="sm" :to="{name:'editEmployees' , id:row.id, params:{ employee:row }}" class="mr-1">
          Edytuj
        </router-link>
        <b-button size="sm" @click.stop="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
      </template>
      <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value}}</li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
    </b-row>

    <!-- Info modal -->
    <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
      <pre>{{ modalInfo.content }}</pre>
    </b-modal>


  </b-container>
</template>

<script>
  import axios from 'axios'

  let items = [
    { isActive: true, age: 40, name: { first: 'Dickerson', last: 'Macdonald' }, surname: 'test' },
    { isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' } },
    {
      isActive: false,
      age: 9,
      name: { first: 'Mini', last: 'Navarro' },
      _rowVariant: 'success'
    },
    { isActive: false, age: 89, name: { first: 'Geneva', last: 'Wilson' } },
    { isActive: true, age: 38, name: { first: 'Jami', last: 'Carney' } },
    { isActive: false, age: 27, name: { first: 'Essie', last: 'Dunlap' } },
    { isActive: true, age: 40, name: { first: 'Thor', last: 'Macdonald' } },
    {
      isActive: true,
      age: 87,
      name: { first: 'Larsen', last: 'Shaw' },
      _cellVariants: { age: 'danger', isActive: 'warning' }
    },
    { isActive: false, age: 26, name: { first: 'Mitzi', last: 'Navarro' } },
    { isActive: false, age: 22, name: { first: 'Genevieve', last: 'Wilson' } },
    { isActive: true, age: 38, name: { first: 'John', last: 'Carney' } },
    { isActive: false, age: 29, name: { first: 'Dick', last: 'Dunlap' } }
  ];


  export default {
    name: "Employees",
    data () {
      return {
        items: items,
        fields: [
          { key: 'name', label: 'Imię', sortable: true, sortDirection: 'desc' },
          { key: 'surname', label: 'Nazwisko', sortable: true, sortDirection: 'desc' },
          { key: 'phone', label: 'Tel.', sortable: true, sortDirection: 'desc' },
          { key: 'email', label: 'Email', sortable: true, 'class': 'text-center' },
          { key: 'salary', label: 'Zarobki', sortable: true, 'class': 'text-center' },
          { key: 'city', label: 'Miasto', sortable: true, 'class': 'text-center' },
          { key: 'isActive', label: 'is Active' },
          { key: 'actions', label: 'Actions' }
        ],
        currentPage: 1,
        perPage: 5,
        totalRows: items.length,
        pageOptions: [ 5, 10, 15 ],
        sortBy: null,
        sortDesc: false,
        sortDirection: 'asc',
        filter: null,
        modalInfo: { title: '', content: '' }
      }
    },
    computed: {
      sortOptions () {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => { return { text: f.label, value: f.key } })
      }
    },
    created() {
      fetch('http://localhost/employees/public/api/employees')
            .then(response => {
            return response.json();
          }).then(result => {
            this.items = result;
      });
    },
    methods: {
      info (item, index, button) {
        this.modalInfo.title = `Row index: ${index}`;
        this.modalInfo.content = JSON.stringify(item, null, 2);
        this.$root.$emit('bv::show::modal', 'modalInfo', button)
      },
      resetModal () {
        this.modalInfo.title = '';
        this.modalInfo.content = ''
      },
      onFiltered (filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length;
        this.currentPage = 1
      }
    }
  }
</script>

<!-- table-complete-1.vue -->
