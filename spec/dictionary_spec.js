//var dictionary = new Dictionary();
var js = require("../jatasets");
var assert = require("assert")
var dictionary = js.dictionary();

describe("Dictionary", function() {;
	
	it("Check if dictionary is empty", function() {
		expect(dictionary.total).toEqual(0);
	});

	it("Add an element in to the dictionary", function() {
		expect(dictionary.add("Raymond", "123")).toEqual(true);
	});

	it("Add an element in to the dictionary", function() {
		var output = dictionary.add("David", "345");
		expect(output).toEqual(true);
	});

	it("Add an element in to the dictionary", function() {
		var output = dictionary.add("Cynthia", "456");
		expect(output).toEqual(true);
	});

	it("Attempt to add undefined element in to the dictionary", function() {
		var output = dictionary.add("Sheryll");
		expect(output).toEqual(false);
	});

	it("Check number of elements in dictionary", function() {
		var output = dictionary.total;
		expect(output).toEqual(3);
	});

	it("Find an element by key", function() {
		var output = dictionary.find("Cynthia");
		expect(output).toEqual("456");
	});

	it("Find an element by key", function() {
		var output = dictionary.find("David");
		expect(output).toEqual("345");
	});

	it("Find an element by key", function() {
		var output = dictionary.find("Raymond");
		expect(output).toEqual("123");
	});

	it("Remove an element from the dictionary with incorrect key", function() {
		var output = dictionary.remove("Sheryll");
		expect(output).toEqual(false);
	});

	it("Remove an element from the dictionary", function() {
		var output = dictionary.remove("David");
		expect(output).toEqual(true);
	});

	it("Find an element by key", function() {
		var output = dictionary.find("Cynthia");
		expect(output).toEqual("456");
	});

	it("Find an element by key which does not exist", function() {
		var output = dictionary.find("David");
		expect(output).toEqual(false);
	});

	it("Find an element by key", function() {
		var output = dictionary.find("Raymond");
		expect(output).toEqual("123");
	});

	it("Check number of elements in dictionary", function() {
		expect(dictionary.total).toEqual(2);
	});

	it("Remove an element from the dictionary", function() {
		var output = dictionary.remove("Raymond");
		expect(output).toEqual(true);
	});

	it("Check number of elements in dictionary", function() {
		expect(dictionary.total).toEqual(1);
	});

	it("Remove an element from the dictionary", function() {
		var output = dictionary.remove("Cynthia");
		expect(output).toEqual(true);
	});

	it("Check number of elements in dictionary", function() {
		expect(dictionary.total).toEqual(0);
	});

});