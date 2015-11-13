Accounts.onCreateUser(function(options, user) {
    if (!user.profile) user.profile = {};
    user.profile.photo = (user.services && user.services.vk) ?
        user.services.vk.photo : null;
    user.profile.name = (user.services && user.services.vk) ?
    user.services.vk.first_name + ' ' +user.services.vk.last_name  : null;
    return user;
});