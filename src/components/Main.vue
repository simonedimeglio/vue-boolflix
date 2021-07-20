<template>
    <main>
        <div class="custom-container">
            <div class="films-container">
                <!-- v-if to solve two conditions: on startup where arrays are present and post-search where arrays are null  -->
                <div v-if="!movies && !tvSeries || (movies.length === 0 && tvSeries.length === 0) " class="section">
                    <div v-if="!movies && !tvSeries" class="results-title">
                            <h3>POPULAR ON NETFLIX</h3>
                    </div>
                    <div v-else>
                        <h3>No results found for your search</h3>
                    </div>
                    <div class="custom-row">
                        <Cards class="film-card" v-for="item in popular"
                            :key="item.id"
                            :title="item.title"
                            :name="item.name"
                            :originalName="item.original_name"
                            :img="item.poster_path"
                            :originalTitle="item.original_title"
                            :language="item.original_language"
                            :overview="item.overview"
                            :slicedOverview="item.overview.slice(0,500) + '...'"
                            :noOverview="item.overview + 'No Overview'"
                            :rating="item.vote_average"
                            :voteCount="item.vote_count"
                        />
                    </div>
                </div>
                    

                <div v-else class="section">
                    <div class="visibility-check">
                        <div class="results-title">
                            <h3>Movie</h3>
                        </div>
                    <div class="custom-row">
                        
                        <Cards class="film-card" v-for="movie in movies"
                            :key="movie.id"
                            :title="movie.title"
                            :name="movie.name"
                            :originalName="movie.original_name"
                            :img="movie.poster_path"
                            :originalTitle="movie.original_title"
                            :language="movie.original_language"
                            :rating="movie.vote_average"
                            :overview="movie.overview"
                            :slicedOverview="movie.overview.slice(0,500) + '...'"
                            :noOverview="movie.overview + 'No Overview'"
                            :voteCount="movie.vote_count"
                        />
                    </div>
                    
                    <div class="results-title">
                            <h3>Tv Series</h3>
                    </div>
                    <div class="custom-row">
                        
                        <Cards class="film-card" v-for="series in tvSeries"
                            :key="series.id"
                            :title="series.title"
                            :name="series.name"
                            :originalName="series.original_name"
                            :img="series.poster_path"
                            :originalTitle="series.original_title"
                            :language="series.original_language"
                            :rating="series.vote_average"
                            :overview="series.overview"
                            :slicedOverview="series.overview.slice(0,500) + '...'"
                            :noOverview="series.overview + 'No Overview'"
                            :voteCount="series.vote_count"
                        />
                    </div>

                    </div>
                    
                    
                </div>
                
                
            </div>
        </div>
    </main>
</template>

<script>
import Cards from './Cards.vue'
export default {
    name: 'Main',
    components: {
        Cards
    },
    props: {
        popular: Array,
        movies: Array,
        tvSeries: Array,
    }
}
</script>

<style scoped lang="scss">
@import "../style/_colors.scss";
main {
    ::-webkit-scrollbar {
    width: 10px;
    }

    ::-webkit-scrollbar-track {
    background: rgb(37, 37, 37);
    }
    
    ::-webkit-scrollbar-thumb {
    background: $main-txt-color;
    opacity: .8;
    border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: white;
    
    }
    .custom-container {
        .films-container {
            display: flex;
            flex-direction: column;
            .section {
                .custom-row {
                    display: flex;
                    flex-wrap: nowrap;
                    width: 100%;
                    overflow-x: scroll;
                }
            }
            
        }
    }
}
</style>