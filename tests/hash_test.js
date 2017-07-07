'use-strict';

var js = require('../app');
var assert = require('assert');
var hash = js.hash();

describe('JataSets Hash Tests', function() {	
	
	describe('Add items to the stack', function(){

		it('Should start with zero items in hash table', function(){
			assert.equal(0, hash.table.length);
		});
		
	});
	
});

