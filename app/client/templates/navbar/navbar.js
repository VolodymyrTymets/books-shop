Template.NavBar.helpers({
    'categories': function(){
        return Categories.find();
    },
    'baysCount':function () {
        return Cart.find().count();
    }
});

Template.NavBar.events({
    'click a[data-action="change-language"]': function(e,tmp){
        TAPi18n.setLanguage(e.target.attributes['data-name'].nodeValue);
        accountsUIBootstrap3.setLanguage(e.target.attributes['data-name'].nodeValue);
    },
    'submit #search-form':function(e,tmp){
        e.preventDefault();
        var query =  tmp.$('input').val();
        if(query !== ''){
            Router.go('search',{ _query:query });
        }else{
            Router.go('home')
        }
    },
    'click a[data-action="show-cart"]': function(e,tmp){
            $(".shopping-cart").fadeToggle( "fast");
    }
});
