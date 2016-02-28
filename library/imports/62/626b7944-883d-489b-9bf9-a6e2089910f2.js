'use strict';

exports.getUid = function () {
    return window.localStorage.getItem('uid');
};