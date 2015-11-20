AdminPermission = function (userId) {
    if(Meteor.isClient) {
        return (Meteor.user() && Meteor.user().username === 'admin') ? true : false;
    }
    else{
      return  userId === 'YJ2ankrv63DdT8ydr';
    }
}