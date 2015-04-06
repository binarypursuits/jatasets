var js = require("../jatasets");
var assert = require("assert")
var dictionary = js.dictionary();

describe("JataSets Dictionary Tests", function() {;
	
	it("Check if dictionary is empty", function() {
		assert.equal(0, dictionary.total);
	});

	it("Add an element in to the dictionary", function() {
		assert.equal(true, dictionary.add("Raymond", "123"));
	});

	it("Add an element in to the dictionary", function() {
		assert.equal(true, dictionary.add("David", "345"));
	});

	it("Add an element in to the dictionary", function() {
		assert.equal(true, dictionary.add("Cynthia", "456"));
	});

	it("Attempt to add undefined element in to the dictionary", function() {
		assert.equal(false, dictionary.add("Sheryll"));
	});

	it("Check number of elements in dictionary", function() {
		assert.equal(3, dictionary.total);
	});

	it("Find an element by key", function() {
		assert.equal("456", dictionary.find("Cynthia"));
	});

	it("Find an element by key", function() {
		assert.equal("345", dictionary.find("David"));
	});

	it("Find an element by key", function() {
		assert.equal("123", dictionary.find("Raymond"));
	});

	it("Remove an element from the dictionary with incorrect key", function() {
		assert.equal(false, dictionary.remove("Sheryll"));
	});

	it("Remove an element from the dictionary", function() {
		assert.equal(true, dictionary.remove("David"));
	});

	it("Find an element by key", function() {
		assert.equal("456", dictionary.find("Cynthia"));
	});

	it("Find an element by key which does not exist", function() {
		assert.equal(false, dictionary.find("David"));
	});

	it("Find an element by key", function() {
		assert.equal("123", dictionary.find("Raymond"));
	});

	it("Check number of elements in dictionary", function() {
		assert.equal(2, dictionary.total);
	});

	it("Remove an element from the dictionary", function() {
		assert.equal(true, dictionary.remove("Raymond"));
	});

	it("Check number of elements in dictionary", function() {
		assert.equal(1, dictionary.total);
	});

	it("Remove an element from the dictionary", function() {
		assert.equal(true, dictionary.remove("Cynthia"));
	});

	it("Check number of elements in dictionary", function() {
		assert.equal(0, dictionary.total);
	});

});