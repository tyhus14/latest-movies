var apiURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=efaa926100b4c162580ee08f41d6439e";

var demoList = new Vue({

  el: '#movieList',

  data: {
    items: [],
    firstItem: []
  },

  created: function () {
    this.fetchData();
  },

  methods: {
    fetchData: function () {
    this.$http.get( apiURL, function( data ) {
        this.items = data;
        this.firstItem = data.results[0].backdrop_path;
    });

    }

  }
});
