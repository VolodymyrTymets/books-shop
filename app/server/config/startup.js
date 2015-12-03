Meteor.startup(function () {
    ServiceConfiguration.configurations.remove({
        service: 'vk'
    });

    ServiceConfiguration.configurations.insert({
        service: 'vk',
        appId:   Meteor.settings.appIdVk,      // Your app id
        secret:  Meteor.settings.secretVk  // Your app secret
    });

    Fixtures.init();

    //if(!Meteor.users.findOne()){
    //    Accounts.createUser({
    //        username:'admin',
    //        email:'admin@admin.com',
    //        password:'admin'
    //    })
    //}
});