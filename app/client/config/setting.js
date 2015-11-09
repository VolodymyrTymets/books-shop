Meteor.startup(function () {
    //TAPi18n.setLanguage('ua');
    //accountsUIBootstrap3.setLanguage('ua');
    //sAlert.config({
    //    effect: '',
    //    position: 'bottom',
    //    timeout: 5000,
    //    html: false,
    //    onRouteClose: false,
    //    stack: true,
    //    beep: false
    //});
    //Avatar.setOptions({
    //    customImageProperty: function() {
    //        var user = this;
    //        // calculate the image URL here
    //        return user.profile.photo;
    //    },
    //    backgroundColor:'blue',
    //    textColor:'yellow'
    //});
    Accounts.ui.config({
        passwordSignupFields: "USERNAME_ONLY"
    });
})