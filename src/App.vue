<template>
  <div id="app">
    <Header @search="[takeSearch($event), createApi($event), createSeriesApi($event)]" />
    <Main :popular="popular" :movies="movies" :tvSeries="tvSeries"/>
  </div>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main
  },

  data() {
        return {
        // For Searchbar
        titleSearch: "",
        // Containing the most popular movies / series
        popular: [],
        // For movie search
        movies: null,
        // For Tv Series search 
        tvSeries: null,
    }
  },
  
  created() {
    // this.createApi(this.filmsApi)
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=fff24b8cc4bc6f6f4dc37aa7e30da805').then((results) => {
      // Assign "fixed" data to popular
      this.popular = results.data.results;
    })
  },
  
  methods: {
    takeSearch(title) {
      // I assign to titleSearch the argument of method by trimming blanks with trim()
      this.titleSearch = title.trim()
      // I show popular movies if the search field is empty when submitting the search
      if(title.length === 0){ 
        return;
      }
      // New APIs
      let filmsApi='https://api.themoviedb.org/3/search/movie?api_key=fff24b8cc4bc6f6f4dc37aa7e30da805'
      let seriesApi='https://api.themoviedb.org/3/search/tv?api_key=fff24b8cc4bc6f6f4dc37aa7e30da805'
      // Add query
      filmsApi += '&query=' + this.titleSearch
      seriesApi += '&query=' + this.titleSearch
      // APIs's building
      this.createApi(filmsApi)
      this.createSeriesApi(seriesApi)
      // Console.log for debugging
      console.log('Search by title: ' + title)
    },


    createApi(filmsApi){
      axios.get(filmsApi).then((result) => {
        // movies get results from new query
        this.movies = result.data.results;
        // Console.log for debugging
        console.log('Current movies query: ' + filmsApi)
      })
    },
    

    createSeriesApi(seriesApi){
      axios.get(seriesApi).then((result) => {
        // tvSeries get results from new query
        this.tvSeries = result.data.results;
        // Console.log for debugging
        console.log('Current tv series query: ' + seriesApi)
      })
    },
  },  
}
</script>

<style lang="scss">
@import "./style/app.scss";
</style>