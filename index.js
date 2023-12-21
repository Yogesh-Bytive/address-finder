"use strict";

var pincodeData = require('./pincodes.json');

function isNumeric(num) {
    return !isNaN(num);
}

module.exports = {
    lookup: function(pincode) {
        if (isNumeric(pincode)) {
            if (typeof pincode === 'string') {
                return pincodeData.filter(function(e) {
                    return e.pincode === +pincode;
                });
            } else if (typeof pincode === 'number') {
                return pincodeData.filter(function(e) {
                    return e.pincode === pincode;
                });
            }
        } else {
            var regex = RegExp(pincode, 'i');
            return pincodeData.filter(function(e) {
                return e.officeName.match(regex);
            });
        }
    },

    lookupByState: function(stateName) {
        return pincodeData.filter(function(e) {
            return e.state === stateName;
        });
    },

    lookupByDistrict: function(districtName) {
        return pincodeData.filter(function(e) {
            return e.district === districtName;
        });
    }
};

