<template>
  <div id="app">
    <Header @search="takeSearch" />
    <Main :searchBool="searchBool" :results="filterResults" />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main
  },

  data() {
        return {
        titleSearch: "",
        searchBool: false,
        "page": 1,
        results: [
            {
            "adult": false,
            "backdrop_path": "/kWYfW2Re0rUDE6IHhy4CRuKWeFr.jpg",
            "genre_ids": [
                12,
                14,
                28
            ],
            "id": 121,
            "original_language": "en",
            "original_title": "The Lord of the Rings: The Two Towers",
            "overview": "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
            "popularity": 64.411,
            "poster_path": "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
            "release_date": "2002-12-18",
            "title": "The Lord of the Rings: The Two Towers",
            "video": false,
            "vote_average": 8.3,
            "vote_count": 16703
        },
        {
            "adult": false,
            "backdrop_path": "/dFWsoHrYSS68sHiykdacM9T6jN3.jpg",
            "genre_ids": [
                10770,
                18
            ],
            "id": 20544,
            "original_language": "en",
            "original_title": "Something the Lord Made",
            "overview": "A dramatization of the relationship between heart surgery pioneers Alfred Blalock and Vivien Thomas.",
            "popularity": 16.422,
            "poster_path": "/AtI5X2UkM08XjGGjB3okULwxpRw.jpg",
            "release_date": "2004-05-30",
            "title": "Something the Lord Made",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 122
        },
        {
            "adult": false,
            "backdrop_path": "/vRQnzOn4HjIMX4LBq9nHhFXbsSu.jpg",
            "genre_ids": [
                12,
                14,
                28
            ],
            "id": 120,
            "original_language": "en",
            "original_title": "The Lord of the Rings: The Fellowship of the Ring",
            "overview": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
            "popularity": 69.766,
            "poster_path": "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
            "release_date": "2001-12-18",
            "title": "The Lord of the Rings: The Fellowship of the Ring",
            "video": false,
            "vote_average": 8.4,
            "vote_count": 19327
        },
        {
            "adult": false,
            "backdrop_path": "/jOuCWdh0BE6XPu2Vpjl08wDAeFz.jpg",
            "genre_ids": [
                12,
                16,
                14
            ],
            "id": 123,
            "original_language": "en",
            "original_title": "The Lord of the Rings",
            "overview": "The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron's reign over Middle-earth.",
            "popularity": 15.062,
            "poster_path": "/4O3s0IGZJirPBecqEnP9qsjlTQw.jpg",
            "release_date": "1978-11-15",
            "title": "The Lord of the Rings",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 571
        },
        {
            "adult": false,
            "backdrop_path": "/pm0RiwNpSja8gR0BTWpxo5a9Bbl.jpg",
            "genre_ids": [
                12,
                14,
                28
            ],
            "id": 122,
            "original_language": "en",
            "original_title": "The Lord of the Rings: The Return of the King",
            "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
            "popularity": 59.372,
            "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
            "release_date": "2003-12-01",
            "title": "The Lord of the Rings: The Return of the King",
            "video": false,
            "vote_average": 8.5,
            "vote_count": 17882
        },
        {
            "adult": false,
            "backdrop_path": "/j724iaQRnQTaxZ5dNIsvYaE4RQo.jpg",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "id": 48130,
            "original_language": "en",
            "original_title": "Edges of the Lord",
            "overview": "A 12-year-old Jewish boy hides with a family of Catholic peasant farmers to escape the Nazis.",
            "popularity": 4.243,
            "poster_path": "/jTnBYcM4on6mvNJmQ0MNHyWlPRL.jpg",
            "release_date": "2001-01-01",
            "title": "Edges of the Lord",
            "video": false,
            "vote_average": 6.7,
            "vote_count": 62
        },
        {
            "adult": false,
            "backdrop_path": "/lwsoLKyGaZbmLg3ZC9mPLjWlfqQ.jpg",
            "genre_ids": [
                12,
                878
            ],
            "id": 9520,
            "original_language": "en",
            "original_title": "The Thief Lord",
            "overview": "A tale about two young boys, Prosper and Bo, who flee to Venice after being orphaned and dumped in the care of a cruel auntie. Hiding in the canals and alleyways of the city, the boys are befriended by a gang of young urchins and their enigmatic leader, the Thief Lord. From their home base of an old cinema theater, the children steal from the rich to support themselves and soon capture the interest of a bumbling detective. However, a greater threat to the children is something from a forgotten past - a beautiful magical treasure with the power to spin time itself",
            "popularity": 5.458,
            "poster_path": "/mLTON0o7tEk37UQMcnIWpngq1ZK.jpg",
            "release_date": "2006-01-04",
            "title": "The Thief Lord",
            "video": false,
            "vote_average": 5.9,
            "vote_count": 143
        },
        {
            "adult": false,
            "backdrop_path": "/uz5uUsckJLEGjoEt2tcxVaY0ash.jpg",
            "genre_ids": [
                36
            ],
            "id": 42664,
            "original_language": "en",
            "original_title": "The War Lord",
            "overview": "A knight in the service of a duke goes to a coastal village where an earlier attempt to build a defensive castle has failed. He begins to rebuild the duke's authority in the face of the barbarians at the border and is making progress until he falls in love with one of the local women.",
            "popularity": 4.257,
            "poster_path": "/nK3wzAcZr16x5yhygTnbqhZySFf.jpg",
            "release_date": "1965-11-17",
            "title": "The War Lord",
            "video": false,
            "vote_average": 6.3,
            "vote_count": 48
        },
        {
            "adult": false,
            "backdrop_path": "/kZVUk9yLNr18XVlWAq5ezvjWK7V.jpg",
            "genre_ids": [
                18,
                10749
            ],
            "id": 51515,
            "original_language": "en",
            "original_title": "At Play in the Fields of the Lord",
            "overview": "Martin and Hazel Quarrier are small-town fundamentalist missionaries sent to the jungles of South America to convert the Indians. Their remote mission was previously run by the Catholics, before the natives murdered them all. They are sent by the pompous Leslie Huben, who runs the missionary effort in the area but who seems more concerned about competing with his Catholic 'rivals' than in the Indians themselves. Hazel is terrified of the Indians while Martin is fascinated. Soon American pilot Lewis Moon joins the Indian tribe but is attracted by Leslie's young wife, Andy. Can the interaction of these characters and cultures, and the advancing bulldozers of civilization, avoid disaster?",
            "popularity": 3.841,
            "poster_path": "/laJxloLyFl3tv8mHKfCFRXUbFmk.jpg",
            "release_date": "1991-12-06",
            "title": "At Play in the Fields of the Lord",
            "video": false,
            "vote_average": 6.5,
            "vote_count": 27
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                36,
                18,
                10751,
                99
            ],
            "id": 48467,
            "original_language": "en",
            "original_title": "The Mountain of the Lord",
            "overview": "Recounts the 40-year history of building the Salt Lake Temple, shown as if recounted by Wilford Woodruff to a young reporter. It portrays the pioneers' dedication to temple worship.",
            "popularity": 1.78,
            "poster_path": "/2Lbeld2zqewPBpO6l2xGRMciHG5.jpg",
            "release_date": "1993-03-01",
            "title": "The Mountain of the Lord",
            "video": false,
            "vote_average": 7.9,
            "vote_count": 9
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                35,
                18,
                14
            ],
            "id": 282377,
            "original_language": "en",
            "original_title": "The Lord of Catan",
            "overview": "The Lord of Catan stars Amy Acker and Fran Kranz as a young married couple whose friendly game of Settlers of Catan plunges them into a vortex of madness and despair.",
            "popularity": 1.283,
            "poster_path": null,
            "release_date": "2014-03-22",
            "title": "The Lord of Catan",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 3
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                99,
                36
            ],
            "id": 473643,
            "original_language": "en",
            "original_title": "The Lord of Sipan",
            "overview": "The tombs of the grand lords of Moche civilization - one of Peru's most important pre-Hispanic civilizations -- are in constant danger from grave robbers, but archeologist Walter Alva has managed to find some priceless treasures and recreate the lives of this ancient people of northern Peru.",
            "popularity": 0.948,
            "poster_path": "/s7ruR6gO6rQiyhGWcfy9WmcnhBz.jpg",
            "release_date": "2009-04-27",
            "title": "The Lord of Sipan",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 2
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                18
            ],
            "id": 588841,
            "original_language": "en",
            "original_title": "The Lord and the Peasant",
            "overview": "In a peasant's cot we find a fair, young maiden who is loved by an honest, true-hearted peasant lad, while yonder stands the manor of Glenwood with its noble lord, who chanced to pass by one fair day and there noble eyes met peasant meekness and love found work a-plenty to do. But maiden thought naught of my lord o' the manor, nor so much as gave him cause to hope that all his castles and lands could win her heart from the true peasant lad who had gone forth in the world to win humble living for his bride to be. It was then that Dame Poverty came knocking at the peasant's door and upon her heels crept a fever which held the young sister close within her breast only waiting for death to knock gently at the humble cot. And still no word from the loved one in a foreign land! Had he deserted his fond-hearted lassie? Weeks passed by and still no word nor sign of the one held most dear, and then my lord of Glenwood Keep came suing for her hand.",
            "popularity": 0.6,
            "poster_path": null,
            "release_date": "1912-08-02",
            "title": "The Lord and the Peasant",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/bru387ewewDRT4Hykyfbz1mgFIf.jpg",
            "genre_ids": [
                99
            ],
            "id": 581913,
            "original_language": "en",
            "original_title": "The Lord of Milan",
            "overview": "The Lord of Milan is a documentary produced by LeftLion. If tells the story of Herbert Kilpin, who was born in Nottingham in 1870. He worked at the Adams Building in the Lace Market as a Lace assistant, before moving to Italy in the 1890s. From there he went on to found European football giants AC Milan.  The film was inspired by Nottingham author Robert Nieri’s novel of the same name. Robert stars in the film alongside former AC Milan players Daniele Massaro, Giovanni Lodetti, Luther Blissett and Mark Hateley.  The film also follows the journey of AC Milan historian Luigi La Rocca and his friends Pierangelo Brivio and Enrico Tosi as they make a pilgrimage to Herbert’s old haunts in Nottingham.  A LeftLion Film  Produced by Robert Nieri  Directed by Georgianna Scurfield and Jared Wilson  Cinematography Raphael Achache, Natalie Owen and Georgianna Scurfield  Editor Georgianna Scurfield  Music Supervisor Rob Rosa  Graphics Curtis Powell",
            "popularity": 0.6,
            "poster_path": "/6Wqp8GuqkFZmS53wG64qOPV1eYR.jpg",
            "release_date": "2018-12-06",
            "title": "The Lord of Milan",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                18
            ],
            "id": 343417,
            "original_language": "en",
            "original_title": "The Bad Lord Byron",
            "overview": "Injured and on his deathbed in Greece, Lord Byron imagines a celestial trial with witnesses to determine the worth of his character.",
            "popularity": 2.443,
            "poster_path": null,
            "release_date": "1949-04-18",
            "title": "The Bad Lord Byron",
            "video": false,
            "vote_average": 6,
            "vote_count": 1
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                28,
                878
            ],
            "id": 703712,
            "original_language": "en",
            "original_title": "The Lord Inquisitor: Prologue",
            "overview": "Warhammer 40,000 influenced short film.",
            "popularity": 0.6,
            "poster_path": "/eEB6yIsXJsoidudtlZK5oOYflSD.jpg",
            "release_date": "2017-12-31",
            "title": "The Lord Inquisitor: Prologue",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [],
            "id": 835824,
            "original_language": "en",
            "original_title": "The Lord Doesn't Hate You",
            "overview": "A young woman who has contracted a mysterious and contagious disease is forced by her village to take a trip to a hermit healer who is said to be her only hope of salvation.",
            "popularity": 0.6,
            "poster_path": null,
            "release_date": "",
            "title": "The Lord Doesn't Hate You",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/mjdgbl4wv0VlcMuj1jxgjd07bJi.jpg",
            "genre_ids": [
                14,
                16,
                35,
                10751,
                12
            ],
            "id": 25523,
            "original_language": "en",
            "original_title": "The Ghost of Lord Farquaad",
            "overview": "Lord Farquaad was eaten by the dragon, but his ghost has returned, and he's still evil. With the help of his henchman, Thelonious, he kidnaps Fiona. Shrek and the donkey set out to save her, with help from the dragon, before she goes over a waterfall on a raft.",
            "popularity": 8.42,
            "poster_path": "/6yyGjJ0Og9LrM9XQ35quIhZpZiQ.jpg",
            "release_date": "2003-05-23",
            "title": "The Ghost of Lord Farquaad",
            "video": false,
            "vote_average": 5.8,
            "vote_count": 175
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                28,
                12,
                14
            ],
            "id": 34648,
            "original_language": "en",
            "original_title": "The Lord of the G-Strings: The Femaleship of the String",
            "overview": "In the mythical realm of Diddle Earth, delectable Throbbit Bildo Saggins, is sent by Smirnoff the Wizard to destroy the legendary G-String - the most powerful weapon in the land.",
            "popularity": 1.601,
            "poster_path": "/nk0LBlLQItdXka8NQYpVUP2jaIv.jpg",
            "release_date": "2003-01-01",
            "title": "The Lord of the G-Strings: The Femaleship of the String",
            "video": false,
            "vote_average": 4.6,
            "vote_count": 19
        },
        {
            "adult": false,
            "backdrop_path": "/mSw3izkJM9pAHnxh7Nx6DCDKJqc.jpg",
            "genre_ids": [
                53,
                10770
            ],
            "id": 495715,
            "original_language": "en",
            "original_title": "The Landlord",
            "overview": "Alyssa moves into a luxury apartment complex but is unaware she is being watched by her disturbed landlord, Robert, via hidden cameras. Robert will do anything to fill the void left by his estranged daughter–even if that means replacing her.",
            "popularity": 3.222,
            "poster_path": "/926WlL1LvTkd8XM1zDqmGOy6bT7.jpg",
            "release_date": "2017-12-26",
            "title": "The Landlord",
            "video": false,
            "vote_average": 6,
            "vote_count": 12
        }
    ],
    }
  },
  methods: {
    takeSearch(title) {
      // Inizializzo searchBool come false
      this.searchBool = false
      // Assegno a titleSearch l'argomento del method
      this.titleSearch = title
      // Se non è vuoto allora cerco
      if(title != "") {
        this.searchBool = true;
      }
    }
  },
  computed: {
    filterResults() {
      // Filtro il mio array results
      return this.results.filter((element) => {
        // Mostro gli elementi che contengono il titolo ricercato o, inizialmente, quelli che contengono "", ovvero tutti.
        return element.title.toLowerCase().includes(this.titleSearch.toLowerCase())
      })
    }
  },
  
}
</script>

<style lang="scss">
@import "./style/app.scss";
</style>