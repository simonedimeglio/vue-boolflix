<template>
    <main>
        <div class="custom-container">
            <div class="films-container">
                
                <div v-if="movies.length === 0 && tvSeries.length === 0 && !flagVisibility" class="section">
                    <div class="results-title">
                            <h3>POPOLARI SU NETFLIX</h3>
                    </div>
                    <div class="custom-row">
                        <Cards class="film-card" v-for="film in popular"
                            :key="film.id"
                            :title="film.title"
                            :name="film.name"
                            :originalName="film.original_name"
                            :img="film.poster_path"
                            :originalTitle="film.original_title"
                            :language="film.original_language"
                            :rating="film.vote_average"
                        />
                    </div>
                </div>
                    

                <div v-else class="section">
                    <div class="visibility-check" v-if="flagVisibility">
                        <div class="results-title">
                            <h3>Film</h3>
                    </div>
                    <div class="custom-row">
                        
                        <Cards class="film-card" v-for="film in movies"
                            :key="film.id"
                            :title="film.title"
                            :name="film.name"
                            :originalName="film.original_name"
                            :img="film.poster_path"
                            :originalTitle="film.original_title"
                            :language="film.original_language"
                            :rating="film.vote_average"
                        />
                    </div>
                    
                    <div class="results-title">
                            <h3>Serie Tv</h3>
                    </div>
                    <div class="custom-row">
                        
                        <Cards class="film-card" v-for="film in tvSeries"
                            :key="film.id"
                            :title="film.title"
                            :name="film.name"
                            :originalName="film.original_name"
                            :img="film.poster_path"
                            :originalTitle="film.original_title"
                            :language="film.original_language"
                            :rating="film.vote_average"
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
        flagVisibility: Boolean,
    }
}
</script>

<style scoped lang="scss">
main {
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