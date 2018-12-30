<template>
  <b-container fluid>
    <h4>Lista pracowników</h4>

    <!-- User Interface controls -->
    <router-link tag="button" size="sm" :to="{name:'addEmployee'}" class="mr-1">
      Dodaj pracownika
    </router-link>

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
          <b-form-select :options="pageOptions" v-model="perPage"></b-form-select>
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
      <template slot="name" slot-scope="row">{{ row.value }}</template>
      <template slot="isActive" slot-scope="row">{{row.value?'Yes :)':'No :('}}</template>
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <router-link tag="button" size="sm" :to="{name:'editEmployees' , params:{ id:row.item.id }}" class="mr-1">
          Edytuj
        </router-link>
        <router-link tag="button" size="sm" :to="{name:'showEmployee' , params:{ id:row.item.id }}" class="mr-1">
          Pokaż
        </router-link>
        <b-button tag="button" size="sm" @click="deleteEmployee(row.item.id)" class="mr-1">
          Usuń
        </b-button>
        <!--<b-button size="sm" @click.stop="row.toggleDetails">-->
          <!--{{ row.detailsShowing ? 'Hide' : 'Show' }} Details-->
        <!--</b-button>-->
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
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0"></b-pagination>
      </b-col>
    </b-row>

    <!-- Info modal -->
    <b-modal id="modalInfo" @hide="resetModal" :title="modalInfo.title" ok-only>
      <pre>{{ modalInfo.content }}</pre>
    </b-modal>

  </b-container>
</template>

<script>
let items = [];
  import  dataSupport  from '../mixins/supportData';
  export default {
    name: "Employees",
    mixins:[ dataSupport ],
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
    created()
    {
      this.getEmployees();
    },
    computed: {
      sortOptions () {
        // Create an options list from our fields
        return this.fields
          .filter(f => f.sortable)
          .map(f => { return { text: f.label, value: f.key } })
      },
    },
    methods: {
      getEmployees(){
        this.$store.dispatch('employees/GET_EMPLOYEES').then(() => {
          this.items = this.$store.getters['employees/EMPLOYEES'];
        });

      },
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
      },
      async deleteEmployee(id) {
        await this.$store.dispatch('employees/DELETE_EMPLOYEE', id);
        this.getEmployees()
      }
    }
  }
</script>

<!-- table-complete-1.vue -->
