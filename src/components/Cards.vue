<template>
    <div class="card">
        <div class="poster-container">
            <!-- <img :src="img" /> -->
        </div>
        <div class="info">
            <div class="card-title">Titolo: {{title}}</div>
            <div class="card-original-title">Titolo originale: {{originalTitle}}</div>
            <div class="card-language">Lingua: {{language}}</div>
            <div class="card-rating">Voto: {{rating}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Cards',
    props: {
        title: String,
        originalTitle: String,
        language: String,
        rating: String,
    }
}
</script>

<style scoped lang="scss">
.card {
    padding: 0 10px;
    &:hover .info {
            display: block;
            opacity: 1;
        }
    .poster-container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url('https://image.tmdb.org/t/p/w342/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg');
        background-size: cover;
        width: 100%;
        height: 450px;
        &:hover {
            opacity: 0.5;
            transition: 0.5s;
        }
    }
    .info {
            display: none;
            font-size: 12px;
            padding: 10px;
            position: relative;
            top: -50%;
        }
}
</style>