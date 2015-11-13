Router.route('search',{
    path:'/search/:_query',
    template:'SearchResult',
    waitOn:function () {
        return  Meteor.subscribe('searchBooks',this.params._query)
    },
    data: function () {
        return Books.find();
    }
})