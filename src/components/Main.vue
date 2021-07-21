<template>
    <main>
        <div class="custom-container">
            <div class="films-container">

                <!-- POPULAR ON NETFLIX SECTION -->
                <div class="popular-section section" v-if="(movies.length === 0 && tvSeries.length === 0)">
                    
                    <div class="results-title">
                        <div v-if="startSearch">
                            <span>NO RESULTS FOUND FOR YOUR SEARCH</span>
                        </div>
                    

                        <div class="results-title" v-else>
                            <span>POPULAR ON NETFLIX</span>
                        </div>
                    </div>

                    <div class="custom-row">
                        <Cards class="film-card" v-for="item in popular" :key="item.id"
                            :img="item.poster_path"
                            :title="item.title"
                            :originalTitle="item.original_title"
                            :name="item.name"
                            :originalName="item.original_name"
                            :language="item.original_language"
                            :rating="item.vote_average"
                            :voteCount="item.vote_count"
                            :overview="item.overview"
                            :slicedOverview="item.overview.slice(0,500) + '...'"
                            :noOverview="item.overview + 'No Overview'"
                        />
                    </div>

                </div> <!-- end popular section -->
                    

                <!-- MOVIES AND TV SERIES SECTION -->
                <div v-else class="movies-and-series-section section">
                    
                    <!-- Movies -->
                    <div class="results-title" v-if="movies.length === 0">
                        <span>NO MATCHES FOR MOVIES</span>
                    </div>

                    <div class="results-title" v-else>
                        <span>MOVIES</span>
                    </div>

                    <div class="custom-row">
                        <Cards class="film-card" v-for="movie in movies" :key="movie.id"
                            :img="movie.poster_path"
                            :title="movie.title"
                            :originalTitle="movie.original_title"
                            :language="movie.original_language"
                            :rating="movie.vote_average"
                            :voteCount="movie.vote_count"
                            :overview="movie.overview"
                            :slicedOverview="movie.overview.slice(0,500) + '...'"
                            :noOverview="movie.overview + 'No Overview'"
                        />
                    </div>
                    

                    <!-- TV Series -->
                    <div class="results-title" v-if="tvSeries.length === 0">
                        <span>NO MATCHES FOR TV SERIES</span>
                    </div>

                    <div class="results-title" v-else>
                        <span>TV SERIES</span>
                    </div>

                    <div class="custom-row">
                        <Cards class="film-card" v-for="series in tvSeries" :key="series.id"
                            :img="series.poster_path"
                            :name="series.name"
                            :originalName="series.original_name"
                            :language="series.original_language"
                            :rating="series.vote_average"
                            :voteCount="series.vote_count"
                            :overview="series.overview"
                            :slicedOverview="series.overview.slice(0,500) + '...'"
                            :noOverview="series.overview + 'No Overview'"
                        />
                    </div>
                </div> <!-- end movies/tvseries section -->
            </div> <!--end films-container -->
        </div> <!--end custom-container -->
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
        startSearch: Boolean
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
                
                .results-title {
                    margin: 40px 0 20px 10px;
                    span {
                        font-size: 20px;
                        font-weight: bold;
                    }
                }
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