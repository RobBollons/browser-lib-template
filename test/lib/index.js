'use strict';

var expect = require('chai').expect;

describe('index', function () {
    it('must run the tests', function () {
        var index  = require('../lib/index'),
            result = index();

        expect(result).to.exist;
    });
});
