var js = require("../jatasets");
var assert = require("assert")
var stack = js.stack();

describe("Stack", function() {
	
	it("Inserts a number to stack", function() {
		var output = stack.push(12);
		expect(output).toEqual(true);
	});
	
	it("Inserts a string to stack", function() {
		var output = stack.push("Iamastring");
		expect(output).toEqual(true);		
	});
	
	it("Inserts a string with spaces to stack", function() {
		var output = stack.push("I am a string");
		expect(output).toEqual(true);		
	});
	
	it("Inserts a number as a string to stack", function() {
		var output = stack.push("1");
		expect(output).toEqual(true);		
	});
	
	it("Inserts a float to stack", function() {
		var output = stack.push(4.32);
		expect(output).toEqual(true);
	});
	
	it("Inserts a array to stack", function() {
		var output = stack.push([]);
		expect(output).toEqual(true);
	});
	
	it("Inserts a object to stack", function() {
		var output = stack.push({});
		expect(output).toEqual(true);
	});
	
	it("Return false when attempting to push undefined element to stack", function() {
		var output = stack.push();
		expect(output).toEqual(false);
	});
	
	it("Request current stack length", function() {
		var output = stack.length();
		expect(output).toEqual(7);
	});
	
	it("Call pop method", function() {
		var output = stack.pop();
		expect(output).toEqual({});
	});
	
	it("Call pop method", function() {
		var output = stack.pop();
		expect(output).toEqual([]);
	});
	
	it("Call pop method", function() {
		var output = stack.pop();
		expect(output).toEqual(4.32);
	});

	it("Request current start position", function() {
		var output = stack.peek();
		expect(output).toEqual("1");
	});
		
	it("Call clear method", function() {
		var output = stack.clear();
		expect(output).toEqual(true);
	});
	
	it("Test length of stack", function() {
		var output = stack.length();
		expect(output).toEqual(0);
	});
});
