Template.SearchResult.helpers({
    'hasResult':function () {
        return Books.find().count() >  0 ||
            Journals.find().count() >  0 ||
            Publications.find().count() >  0 ? true : false;
    },
    'books' : function () {
        return Books.find();
    },
    'journals' : function () {
        return Journals.find();
    },
    'publications' : function () {
        return Publications.find();
    },
})