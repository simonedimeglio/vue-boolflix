<template>
    <div class="card">

        <div class="poster-container">
            <!-- Build src through poster path with dimension 500 (w500) and I give dynamism to the alt -->
            <img v-if="this.img !=null" :src="'https://image.tmdb.org/t/p/w500/' + this.img" :alt="this.title + ' poster'">
            <!-- I assign a "backup" image to cards without cover -->
            <img v-else src="../assets/notfound.jpg" :alt="this.title + ' poster'" class="not-found-img">
        </div>

        <div class="info">
            <!-- I assign dynamic data for both films and TV seriesv -->
            <div class="card-title info-item"><b>Title: </b>{{title}}{{name}}</div>
            <div class="card-original-title info-item"><b>Original title: </b>{{originalTitle}}{{originalName}}</div>
            <!-- MILESTONE 3 -->
            <div class="card-language info-item"><b>Language: </b>
                <span>
                    <img class="language-flag" :src="require('../assets/flags/' + this.language + '.svg')" alt="Language">
                </span>
            </div>
            <!-- MILESTONE 4 -->
            <div class="card-rating-container info-item">
                <span><b>Rating:</b></span>
                <div class="card-rating">
                    <!-- Dynamic stars based on the element rating -->
                    <div v-if="this.voteCount === 0"> No review / rating</div>
                    <i v-else v-for="n in 5" :key="n" class="fa-star" :class="n <= Math.round(rating / 2) ? 'fas': 'far'"></i>
                </div>
            </div>
            <div class="overview info-item">
                <div class="card-plot">
                    <!-- Dynamic plot of movie / TV series -->
                    <div v-if="this.overview.length > 500"><b>Plot</b>: <em>{{slicedOverview}}</em></div>
                    <div v-else-if="this.overview.length < 1"><b>Plot</b>: <em>{{noOverview}}</em></div>
                    <div v-else><b>Plot</b>: <em>{{overview}}</em></div>
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
        overview: String,
        slicedOverview: String,
        noOverview: String,
        rating: Number,
        voteCount: Number
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
        overflow: hidden;
        .not-found-img {
            width: 300px;
        }
        
        img {
            height: 450px;
            border-radius: 4px;
        }
    }
    .info {
            display: none;
            font-size: 14px;
            padding: 10px;
            position: relative;
            bottom: 100%;
            .info-item{
                margin: 5px 0;
            }
            .card-language {
                display: flex;
                align-items: center;
                .language-flag {
                    margin-left: 10px;
                    width: 20px;
                }
            }
            .card-rating-container {
                display: flex;
                .card-rating {
                    margin-left: 4px;
                    i {
                        margin-left: 5px;
                        color: $rating-stars-color;
                    }
                }
            }
    }
}
</style>