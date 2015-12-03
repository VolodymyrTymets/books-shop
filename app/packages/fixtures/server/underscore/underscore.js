_.mixin({
    get: function(obj, attrPath) {
        var attrName, attrVal, i, len;
        attrVal = obj;
        attrPath = attrPath.split('.');
        for (i = 0, len = attrPath.length; i < len; i++) {
            attrName = attrPath[i];
            attrVal = attrVal[attrName];
            if (_.isUndefined(attrVal) || _.isNull(attrVal)) {
                break;
            }
        }
        return attrVal;
    }
});