<template>
    <main>
        <div class="custom-container">
            <div class="title">ORIGINALI NETFLIX</div>
            <div class="films-container">
                <Cards class="film-card" v-for="(film, id) in results"
                :title="film.title"
                :originalTitle="film.original_title"
                :language="film.original_language"
                :rating="film.vote_average"
                :key="id"
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
    data() {
        return {
        "page": 1,
        "results": [
            {
                "adult": false,
                "backdrop_path": "/3lbTiIN8cVonMUQwaeh5nvn61lr.jpg",
                "genre_ids": [
                    12,
                    35,
                    878,
                    10751
                ],
                "id": 105,
                "original_language": "en",
                "original_title": "Back to the Future",
                "overview": "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
                "popularity": 38.464,
                "poster_path": "/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg",
                "release_date": "1985-07-03",
                "title": "Back to the Future",
                "video": false,
                "vote_average": 8.3,
                "vote_count": 15222
            },
            {
                "adult": false,
                "backdrop_path": "/a4qvbI9x3nqu3hKQyDRVVBpMklx.jpg",
                "genre_ids": [
                    12,
                    35,
                    10751,
                    878
                ],
                "id": 165,
                "original_language": "en",
                "original_title": "Back to the Future Part II",
                "overview": "Marty and Doc are at it again in this wacky sequel to the 1985 blockbuster as the time-traveling duo head to 2015 to nip some McFly family woes in the bud. But things go awry thanks to bully Biff Tannen and a pesky sports almanac. In a last-ditch attempt to set things straight, Marty finds himself bound for 1955 and face to face with his teenage parents -- again.",
                "popularity": 21.527,
                "poster_path": "/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg",
                "release_date": "1989-11-22",
                "title": "Back to the Future Part II",
                "video": false,
                "vote_average": 7.7,
                "vote_count": 9744
            },
            {
                "adult": false,
                "backdrop_path": "/igaRMweCynEGoS6w4Rsim7JPnKu.jpg",
                "genre_ids": [
                    12,
                    35,
                    878
                ],
                "id": 196,
                "original_language": "en",
                "original_title": "Back to the Future Part III",
                "overview": "The final installment of the Back to the Future trilogy finds Marty digging the trusty DeLorean out of a mineshaft and looking for Doc in the Wild West of 1885. But when their time machine breaks down, the travelers are stranded in a land of spurs. More problems arise when Doc falls for pretty schoolteacher Clara Clayton, and Marty tangles with Buford Tannen.",
                "popularity": 17.89,
                "poster_path": "/crzoVQnMzIrRfHtQw0tLBirNfVg.jpg",
                "release_date": "1990-05-25",
                "title": "Back to the Future Part III",
                "video": false,
                "vote_average": 7.4,
                "vote_count": 7863
            }
        ],
        "total_pages": 1,
        "total_results": 3
    }

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
            display: flex;
            .film-card {
                width: calc(100% / 5 - 20px);
            }
        }
    }
}
</style>