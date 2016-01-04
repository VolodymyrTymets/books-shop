Template.Publication.helpers({
    'authors':function () {
        var authors  = '';
        Authors.find({_id:{$in:this.authorsId}}).forEach(function (author){
            authors +=  author.name + ' ' + author.surname + ', ';
        });
        return authors
    }
})