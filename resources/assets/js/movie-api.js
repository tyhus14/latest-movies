import { apiKey as apiKeyNew } from './keys';

var apiURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + apiKeyNew;
// api.themoviedb.org/3/tv/1399/season/1/episode/1?api_key=

var demoList = new Vue({

    el: '#movieList',

    data: {
        items: [],
        firstItem: null
    },

    created: function () {
        this.fetchData();
    },

    methods: {
        fetchData: function () {
            this.$http.get( apiURL, function( data ) {
                this.items = data;
                var randomNumber = Math.floor(Math.random()*(6-0+1)+0);
                this.firstItem = data.results[randomNumber].backdrop_path;
            });
        }
    }
});
