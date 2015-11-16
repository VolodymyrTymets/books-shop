AdminPermission = function () {
    return (Meteor.user() && Meteor.user().username === 'admin')  ? true : false;
}