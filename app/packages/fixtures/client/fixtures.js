Fixtures =new  function () {
    this.init = function (cb){
        Meteor.call('fixtures/init', function (err, res) {
            if (typeof cb === 'function') {
                    cb.apply(this, [err, res]);
            }
            if (err) return;
        });
    }
}();