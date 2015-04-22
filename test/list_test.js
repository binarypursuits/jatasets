var js = require("../jatasets");
var assert = require("assert")
var list = js.list();

describe("JataSets List Tests", function() {

	describe("Test insert function", function() {

		it("List length should equal 0", function() {
			assert.equal(0, list.length());
		});

		it("Call prev method with no items in list", function() {
			assert.equal(false, list.prev());
		});

		it("Call next method with no items in list", function() {
			assert.equal(false, list.next());
		});

		it("Insert a number to list", function() {
			assert.equal(true, list.insert(12));
		});

		it("List length should equal 1", function() {
			assert.equal(1, list.length());
		});

		it("Insert a string to list", function() {
			assert.equal(true, list.insert("Iamastring"));
		});

		it("List length should equal 2", function() {
			assert.equal(2, list.length());
		});

		it("Inserts a string with spaces to list", function() {
			assert.equal(true, list.insert("I am a string"));
		});

		it("List length should equal 3", function() {
			assert.equal(3, list.length());
		});

		it("Inserts a number as a string to list", function() {
			assert.equal(true, list.insert("1"));
		});

		it("List length should equal 4", function() {
			assert.equal(4, list.length());
		});

		it("Insert a float to list", function() {
			assert.equal(true, list.insert(4.32));
		});

		it("List length should equal 5", function() {
			assert.equal(5, list.length());
		});

		it("Insert a array to list", function() {
			assert.equal(true, list.insert([]));
		});
		it("List length should equal 6", function() {
			assert.equal(6, list.length());
		});

		it("Insert a object to list", function() {
			assert.equal(true, list.insert({}));
		});

		it("List length should equal 7", function() {
			assert.equal(7, list.length());
		});

		it("Return false when attempting to insert undefined element to list", function() {
			assert.equal(false, list.insert());
		});

		it("List length should equal 7", function() {
			assert.equal(7, list.length());
		});

		it("Request string", function() {
			assert.equal("12,Iamastring,I am a string,1,4.32,,[object Object]", list.toString());
		});

		it("Request JSON", function() {
			assert.equal('[12,"Iamastring","I am a string","1",4.32,[],{}]', list.toJson());
		});


	});

	describe("Test list traversal", function() {

		it("Request current start position", function() {
			assert.equal(0, list.current());
		});

		it("Iterate to next position", function() {
			assert.equal(1, list.next());
		});

		it("Call end method", function() {
			assert.equal(6, list.end());
		});

		it("Request current start position", function() {
			assert.equal(6, list.current());
		});

		it("Call prev method", function() {
			assert.equal(5, list.prev());
		});

		it("Call front method", function() {
			assert.equal(0, list.front());
		});

		it("Call contains for string which exists", function() {
			assert.equal(true, list.contains('Iamastring'));
		});

		it("Call contains for string which exists", function() {
			assert.equal(false, list.contains('I don\'t exist'));
		});

		it("Call remove with element not in list", function() {
			assert.equal(false, list.remove("Not in there"));
		});

		it("Call remove with element in list", function() {
			assert.equal(true, list.remove('Iamastring'));
		});

		it("Test list length still the same", function() {
			assert.equal(6, list.length());
		});

		it("Insert new element", function() {
			assert.equal(true, list.insert("I am new"));
		});

		it("Test new list length", function() {
			assert.equal(7, list.length());
		});

		it("Move to negative position which does not exist", function() {
			assert.equal(false, list.move(-8));
		});

		it("Move to position which does not exist", function() {
			assert.equal(false, list.move(18));
		});

		it("Move to position which does exist", function() {
			assert.equal(true, list.move(3));
		});

		it("Test current element value", function() {
			assert.equal(4.32, list.getElement());
		});

		it("Test current position value", function() {
			assert.equal(3, list.current());
		});

		it("Retrieve current element", function() {
			assert.equal(4.32, list.getElement());
		});

		it("Call clear method", function() {
			assert.equal(true, list.clear());
		});

		it("Test length of list", function() {
			assert.equal(0,  list.length());
		});
	});

});


