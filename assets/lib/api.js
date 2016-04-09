var qwest = require('qwest');

var ajax = function(type, url, data) {
    var promise = new Promise(function(resolve, reject) {
        qwest.map(type, url, data, { withCredentials: true }).then(function(res, data) {
            if (res.status !== 200) return reject(data);
            if (data.ok) { resolve(data); } 
            else { reject(data); }
        })
    });
    return promise;
};

var api = {
  login: function(data) { return ajax('POST', 'http://127.0.0.1:8123/login/', data) },  
  register: function(data) { return ajax('POST', 'http://127.0.0.1:8123/register/', data) },
  update: function(data) { return ajax('PATCH', 'http://127.0.0.1:8123/user/', data) }
};

module.exports = api

