<template>
  <div id="app">
    <Header @search="takeSearch" />
    <Main :results="filteredFilms" />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Main from './components/Main.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Header,
    Main
  },

  data() {
        return {
        titleSearch: "",
        results: [],
        // tvSeries: [],
        filmsApi: 'https://api.themoviedb.org/3/search/movie?api_key=fff24b8cc4bc6f6f4dc37aa7e30da805&query=django',
        // tvSeriesApi: 'https://api.themoviedb.org/3/search/tv?api_key=fff24b8cc4bc6f6f4dc37aa7e30da805&query=big'
        
    }
  },
  created() {
    this.createApi(this.filmsApi)
    axios.get()
  },
  methods: {
    takeSearch(title) {
      // Assegno a titleSearch l'argomento del method tagliando gli spazi vuoti con trim()
      this.titleSearch = title.trim()
      // Creo le nuove APIs
      let filmsApi='https://api.themoviedb.org/3/search/movie?api_key=fff24b8cc4bc6f6f4dc37aa7e30da805&query='
      // Aggiungo la mia query
      filmsApi += this.titleSearch
      // Passo al mio method la nuova API
      this.createApi(filmsApi)
      // Console.log del titolo che ricerco
      console.log('Search by title: ' + title)
    },
    createApi(filmsApi){
      axios.get(filmsApi).then((result) => {
        this.results = result.data.results;
        // Console.log della query attuale
        console.log('Current query: ' + filmsApi)
      })
    },
    
  },
  computed: {
    filteredFilms() {

      function searchIn(find, item) {
        let check = false;
        item.forEach((element) => {
          if(element.toLowerCase().includes(find.toLowerCase())) {
            check = true;
          }
        });
        return check;
        
      }
      // se il campo di ricerca è vuoto mostro i dati forniti da filmsApi
      if(this.titleSearch.length === 0) {
        return this.results
      } 
      return this.results.filter((element) => {
        // ricerco sia per titolo che per titolo originale
        return searchIn(this.titleSearch, [element.original_title, element.title,])
        
        
      })
      
    }
    
  },
  
}
</script>

<style lang="scss">
@import "./style/app.scss";
</style>