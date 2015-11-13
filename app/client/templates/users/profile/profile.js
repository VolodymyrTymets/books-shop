Template._loginButtonsAdditionalLoggedInDropdownActions.helpers({
    'photo': function () {
        var user = Meteor.user();
        return   user.profile.photo ? user.profile.photo : '/images/noavatar.png';
    },
    'user': function () {
        return  Meteor.user();
    }
})