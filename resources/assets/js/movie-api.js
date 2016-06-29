var demoList = new Vue({

  el: '#movieList',

  data: {
    items: []
  },

  created: function () {
    this.fetchData();
  },

  methods: {
    fetchData: function () {
    this.$http.get( apiURL, function( data ) {
        this.items = data;
    });

    }

  }
});
