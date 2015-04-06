var js = require("../jatasets");
var assert = require("assert")
var setA = js.set();
var setB = js.set();

describe("JataSets Set Tests", function() {

	describe("Test basic manipulation functions", function() {

		it("Set length should equal 0", function() {
			assert.equal(0, setA.size());
		});

		it("Add a number into set", function() {
			assert.equal(true, setA.add(1));
		});

		it("Set length should equal 1", function() {
			assert.equal(1, setA.size());
		});

		//it("Set values should equal ['1']", function() {
			//assert.equal(['1'], setA.values());
		//});

		it("Add a string to set", function() {
			assert.equal(true, setA.add("I am a string"));
		});

		it("Set size should equal 2", function() {
			assert.equal(2, setA.size());
		});

		//it("Set values should equal ['1', 'I am a string']", function() {
			//assert.equal(['1','I am a string'], setA.values());
		//});

		it("Add a number into set which already exists, should return false", function() {
			assert.equal(false, setA.add(1));
		});

		it("Set size should still equal 2", function() {
			assert.equal(2, setA.size());
		});

		//it("Set values should still equal ['1', 'I am a string']", function() {
			//assert.equal(['1','I am a string'], setA.values());
		//})

		it("Add another number into set", function() {
			assert.equal(true, setA.add(2));
		});

		it("Set size should equal 3", function() {
			assert.equal(3, setA.size());
		});

		//it("Set values should equal [1]", function() {
			//assert.equal(['1','2','I am a string'], setA.values());
		//});

	});

	describe("Test Union functionality", function() {

	});

	describe("Test Intersection functionality", function() {

	});

	describe("Test Difference functionality", function() {

	});

	describe("Test Subset functionality", function() {

	});

});


