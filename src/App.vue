<template>
  <div id="app">
    <Header @search="takeSearch" />
    <div class="results-title">
      <div v-if="!changePageTitle" class="title">POPOLARI SU NETFLIX</div>
      <div v-else>Ricerca per "{{titleSearch}}"</div>
    </div>
    <Main :results="filteredResults" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    Main
  },

  data() {
        return {
        // Searchbar
        titleSearch: "",

        // Array contenente i film più popolari
        results: [],

        // Array contenente film/serie tv filtrate attraverso la searchbar
        filteredResults: [],

        // Api's container
        filmsApi: '',

        // Check per il cambio del titolo "POPOLARI SU NETFLIX" all'avvio di una ricerca
        changePageTitle: false
    }
  },
  
  created() {
    // this.createApi(this.filmsApi)
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=fff24b8cc4bc6f6f4dc37aa7e30da805').then((results) => {
      // Assegno "definitivamente" a results
      this.results = results.data.results;
      // Assegno "momentaneamente" a filteredResults
      this.filteredResults = results.data.results
    })
  },
  
  methods: {
    takeSearch(title) {
      // Assegno a titleSearch l'argomento del method tagliando gli spazi vuoti con trim()
      this.titleSearch = title.trim()
      // Mostro i film più popolari se il campo di ricerca è vuoto all'invio della ricerca
      if(title.length === 0){
      // Assegno a filteredResults i dati salvati precedentemente in this.results
        this.filteredResults = this.results
      // Mantengo o cambio nuovamente il titolo in "POPOLARI SU NETFLIX"
        this.changePageTitle = false
        return; // esco dall'if
      }

      // Creo le nuove APIs
      let filmsApi='https://api.themoviedb.org/3/search/multi?api_key=fff24b8cc4bc6f6f4dc37aa7e30da805'
      
      // Aggiungo la mia query
      filmsApi += '&query=' + this.titleSearch
      // Passo al mio method la nuova API
      this.createApi(filmsApi)
      
      // Console.log del titolo che ricerco
      console.log('Search by title: ' + title)
    },

    createApi(filmsApi){
      axios.get(filmsApi).then((result) => {
        // Assegno a filteredResults i dati relativi alla nuova query
        this.filteredResults = result.data.results;
        this.changePageTitle = true
        // Console.log della query
        console.log('Current query: ' + filmsApi)
      })
    },

    // searchMovie() {
    //   axios.get('https://api.themoviedb.org/3/search/movie?api_key=fff24b8cc4bc6f6f4dc37aa7e30da805&query=').then((result) => {

    //   })
      
    // },
    // searchTv() {

    // },
    
  },  
}
</script>

<style lang="scss">
@import "./style/app.scss";
#app {
  .results-title {
            padding: 20px;
            font-size: 20px;
            font-weight: bold;
        }
}
</style>