<template>
    <main>
        <div class="custom-container">
            <div class="films-container">
                <Cards class="film-card" v-for="film in results"
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
    }
}
</script>

<style scoped lang="scss">
main {
    .custom-container {
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