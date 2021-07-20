<template>
    <div class="card">
        <div class="poster-container">
            <!-- costruisco src tramite poster path con dimensione 500(w500) e conferisco dinamicità all'alt -->
            <img v-if="this.img !=null" :src="'https://image.tmdb.org/t/p/w500/' + this.img" :alt="this.title + ' poster'">
            <!-- assegno alle card senza copertina una immagine di "backup" -->
            <img v-else src="../assets/notfound.jpg" :alt="this.title + ' poster'">
        </div>
        <div class="info">
            <!-- assegno dati dinamici sia per film che per serie tv -->
            <div class="card-title">Titolo: {{title}}{{name}}</div>
            <div class="card-original-title">Titolo originale: {{originalTitle}}{{originalName}}</div>
            <!-- MILESTONE 3 -->
            <div class="card-language">Lingua: 
                <span>
                    <img class="language-flag" :src="require('../assets/flags/' + this.language + '.svg')" alt="Language">
                </span>
            </div>
            <!-- MILESTONE 4 -->
            <div class="card-rating">
                <span>Voto: </span>
                <div class="card-rating">
                    <!-- stelle dinamiche in base al rating dell'elemento -->
                    <i v-for="n in 5" :key="n" class="fa-star" :class="n <= Math.round(rating / 2) ? 'fas': 'far'"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cards',
    props: {
        img: String,
        title: String,
        name: String,
        originalTitle: String,
        originalName: String,
        language: String,
        rating: Number,
    },
}
</script>

<style scoped lang="scss">
@import "../style/_colors.scss";
.card {
    height: 450px;
    margin-bottom: 20px;
    padding: 0 10px;
    &:hover .info {
            display: block;
            opacity: 1;
        }
    &:hover .poster-container{
            opacity: 0.1;
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
            border-radius: 4px;
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
            .card-rating {
                display: flex;
                i {
                    margin-left: 5px;
                    color: $rating-stars-color;
                }
            }
    }
}
</style>