var qwest = require('qwest');

var ajax = function ajax(type, url, data) {
    var promise = new Promise(function (resolve, reject) {
        qwest.map(type, url, data).then(function (res, data) {
            if (data.ok) {
                resolve(data);
            } else {
                reject(data);
            }
        });
    });
    return promise;
};

var api = {
    login: function login(data) {
        return ajax('POST', 'http://127.0.0.1:8123/api/login/', data);
    },
    register: function register(data) {
        return ajax('POST', 'http://127.0.0.1:8123/api/register/', data);
    }
};

module.exports = api;