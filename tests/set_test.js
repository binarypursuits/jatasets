'use-strict';

var js = require('../app');
var assert = require('assert');
var setA = js.jataset();
var setB = js.jataset();

describe('JataSets Set Tests', function() {

	describe('Test basic manipulation functions', function() {

		it('Set length should equal 0', function() {
			assert.equal(0, setA.size());
		});

		it('Add a number into set', function() {
			assert.equal(true, setA.add(1));
		});

		it('Set length should equal 1', function() {
			assert.equal(1, setA.size());
		});

		it('Set values should equal ["1"]', function() {
			var values = setA.values();
			assert.equal('["1"]', JSON.stringify(values));
		});

		it('Add a string to set', function() {
			assert.equal(true, setA.add('I am a string'));
		});

		it('Set size should equal 2', function() {
			assert.equal(2, setA.size());
		});

		it('Set values should equal ["1","I am a string"]', function() {
			var values = setA.values();
			assert.equal('["1","I am a string"]', JSON.stringify(values));
		});

		it('Add a number into set which already exists, should return false', function() {
			assert.equal(false, setA.add(1));
		});

		it('Set size should still equal 2', function() {
			assert.equal(2, setA.size());
		});

		it('Set values should still equal ["1", "I am a string"]', function() {
			var values = setA.values();
			assert.equal('["1","I am a string"]', JSON.stringify(values));
		})

		it('Add another number into set', function() {
			assert.equal(true, setA.add(2));
		});

		it('Set size should equal 3', function() {
			assert.equal(3, setA.size());
		});

		it('Set values should equal [1]', function() {
			var values = setA.values();
			assert.equal('["1","2","I am a string"]', JSON.stringify(values));
		});

		it('Test remove method of set which value not in set', function() {
			assert.equal(false, setA.remove('I am not there'));
		});

		it('Test remove method of set which value in set', function() {
			assert.equal(true, setA.remove('2'));
		});

		it('Test clear method of set', function() {
			assert.equal(true, setA.clear());
		});

	});

	describe('Test Union, Intersection, Differnce and Subset functionality of Set', function() {

		beforeEach(function(){
			setA.clear();
			setB.clear();

			setA.add('1');
			setA.add('B');
			setA.add('3');

			setB.add('A');
			setB.add('B');
			setB.add('3');
		});

		it('Test Union method of Set', function(){
			var setIntersect = setA.union(setB);
			var values = setIntersect.values();
			assert.equal('["1","3","B"]', JSON.stringify(values));
		});

		it('Test Intersection method of Set', function(){
			var setIntersect = setA.intersection(setB);
			var values = setIntersect.values();
			assert.equal('["3","B"]', JSON.stringify(values));
		});

		it('Test Subset method of Set which is not subset', function(){
			assert.equal(false, setA.subset(setB));
		});

		it('Test Subset method of Set which is a subset', function(){
			setB.clear();
			setB.add('1');
			setB.add('3');
			assert.equal(true, setB.subset(setA));
		});

		it('Test Subset method of Set which is larger than set testing against', function(){
			setA.add('D');
			setA.add('5');
			assert.equal(false, setA.subset(setB));
		});

		it('Test Difference method of Set', function(){
			var setIntersect = setA.difference(setB);
			var values = setIntersect.values();
			assert.equal('["1"]', JSON.stringify(values));
		});



	});

});


