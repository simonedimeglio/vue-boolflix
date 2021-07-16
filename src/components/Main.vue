<template>
    <main>
        <div class="custom-container">
            <div class="title">ORIGINALI NETFLIX</div>
            <div class="films-container">
                <Cards class="film-card" v-for="film in results"
                :key="film.id"
                :title="film.title"
                :img="film.poster_path"
                :originalTitle="film.original_title"
                :language="film.original_language"
                :rating="film.vote_average"
                :searchBool="searchBool"
                />
                <Cards class="film-card" v-for="film in tvSeries"
                :key="film.id"
                :title="film.title"
                :img="film.poster_path"
                :originalTitle="film.original_title"
                :language="film.original_language"
                :rating="film.vote_average"
                :searchBool="searchBool"
                />
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
        results: Array,
        searchBool: Boolean
    }
    
}
</script>

<style scoped lang="scss">
main {
    .custom-container {
        .title {
            padding: 20px 0;
        }
        .films-container {
            flex-wrap: wrap;
            display: flex;
            .film-card {
                width: calc(100% / 5 - 20px);
            }
        }
    }
}
</style>