Template.SearchResult.helpers({
    'hasResult':function () {
        return Books.find().count() > 0 ? true : false;
    }
})