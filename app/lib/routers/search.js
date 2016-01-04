Router.route('search',{
    path:'/search/:_query',
    template:'SearchResult',
    controller:BaseController,
    waitOn:function () {
        return  [
            Meteor.subscribe('searchBooks',this.params._query),
            Meteor.subscribe('searchJournals',this.params._query),
            Meteor.subscribe('searchPublications',this.params._query)
        ]
    }
})