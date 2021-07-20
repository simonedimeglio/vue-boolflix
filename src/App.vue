<template>
  <div id="app">
    <Header @search="[takeSearch($event), createApi($event), createSeriesApi($event)]" />
    <Main :popular="popular" :movies="movies" :tvSeries="tvSeries"/>
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

        // Array contenente film/serie più popolari
        popular: [],

        // Array per filtro film
        movies: [],

        // Array per filtro serie tv
        tvSeries: [],
    }
  },
  
  created() {
    // this.createApi(this.filmsApi)
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=fff24b8cc4bc6f6f4dc37aa7e30da805').then((results) => {
      // Assegno "definitivamente" a results
      this.popular = results.data.results;
      // Assegno "momentaneamente" a movies
      // this.movies = results.data.results
    })
  },
  
  methods: {
    takeSearch(title) {
      // Assegno a titleSearch l'argomento del method tagliando gli spazi vuoti con trim()
      this.titleSearch = title.trim()
      // Mostro i film più popolari se il campo di ricerca è vuoto all'invio della ricerca
      if(title.length === 0){
      // Assegno a movies i dati salvati precedentemente in this.results
        this.movies = this.results
        return;
      }

      // Creo le nuove APIs
      let filmsApi='https://api.themoviedb.org/3/search/movie?api_key=fff24b8cc4bc6f6f4dc37aa7e30da805'
      let seriesApi='https://api.themoviedb.org/3/search/tv?api_key=fff24b8cc4bc6f6f4dc37aa7e30da805'
      // Aggiungo la mia query
      filmsApi += '&query=' + this.titleSearch
      seriesApi += '&query=' + this.titleSearch
      // Passo al mio method le nuove APIs
      this.createApi(filmsApi)
      this.createSeriesApi(seriesApi)
      
      // Console.log del titolo che ricerco
      console.log('Search by title: ' + title)
    },

    createApi(filmsApi){
      axios.get(filmsApi).then((result) => {
        // Assegno a movies i dati relativi alla nuova query
        this.movies = result.data.results;
        // Console.log della query
        console.log('Current movies query: ' + filmsApi)
      })
    },
    createSeriesApi(seriesApi){
      axios.get(seriesApi).then((result) => {
        // Assegno a movies i dati relativi alla nuova query
        this.tvSeries = result.data.results;
        // Console.log della query
        console.log('Current tv series query: ' + seriesApi)
      })
    },
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