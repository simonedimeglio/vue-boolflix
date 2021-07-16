<template>
    <div class="card">
        <div class="poster-container">
            <img v-if="this.img !=null" :src="'https://image.tmdb.org/t/p/w342/' + this.img" :alt="this.title + ' poster'">
            <img v-else src="../assets/notfound.jpg" :alt="this.title + ' poster'">
        </div>
        <div class="info">
            <div class="card-title">Titolo: {{title}}</div>
            <div class="card-original-title">Titolo originale: {{originalTitle}}</div>
            <div class="card-language">Lingua: 
                <span>
                    <img class="language-flag" :src="require('../assets/flags/' + this.language + '.svg')" alt="Language">
                </span>
            </div>
            <div class="card-rating">Voto: {{rating}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cards',
    props: {
        img: String,
        title: String,
        originalTitle: String,
        language: String,
        rating: Number,
    },
}
</script>

<style scoped lang="scss">
.card {
    height: 450px;
    margin-bottom: 20px;
    padding: 0 10px;
    &:hover .info {
            display: block;
            opacity: 1;
        }
    &:hover .poster-container{
            opacity: 0.2;
            transition: 0.5s;
        }
    .poster-container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 450px;
        img {
            height: 450px;
            width: 100%;
        }
    }
    .info {
            display: none;
            font-size: 12px;
            padding: 10px;
            position: relative;
            bottom: 50%;
            .card-language {
                display: flex;
                align-items: center;
                .language-flag {
                    margin-left: 10px;
                    width: 20px;
                }
            }
    }
}
</style>