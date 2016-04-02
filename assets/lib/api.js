var qwest = require('qwest');

var ajax = function(type, url, data) {
    var promise = new Promise(function(resolve, reject) {
        qwest.map(type, url, data).then(function(res, data) {
            if (data.ok) { resolve(data); } 
            else { reject(data); }
        })
    });
    return promise;
};

var api = {
  login: function(data) { return ajax('POST', '/api/login/', data) },  
  register: function(data) { return ajax('POST', '/api/register/', data) },
  update: function(data) { return ajax('PATCH', '/api/user/', data) }
};

module.exports = api

