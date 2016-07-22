"use-strict";

var js = require("../jatasets");
var assert = require("assert");
var stack = js.stack();

describe('JataSets Stack Tests', function() {	
	
	describe('Add items to the stack', function(){

		it('Should start with zero items in stack', function(){
			assert.equal(0, stack.length());
		});
		
		it("Test stack peek with zero items", function() {
			assert.equal(false, stack.peek());
		});
		
		it("Inserts a number to stack", function() {
			assert.equal(true, stack.push(12));
		});
		
		it("Should now be 1 item in stack", function() {
			assert.equal(1, stack.length());
		});
		
		it("Inserts a string to stack", function() {
			assert.equal(true, stack.push("Iamastring"));	
		});
		
		it("Should now be 2 items in stack", function() {
			assert.equal(2, stack.length());
		});
		
		it("Inserts a string with spaces to stack", function() {
			assert.equal(true, stack.push("I am a string"));	
		});
		
		it("Should now be 3 items in stack", function() {
			assert.equal(3, stack.length());
		});
		
		it("Inserts a number as a string to stack", function() {
			assert.equal(true, stack.push("1"));		
		});
		
		it("Test stack peek with last item inserted", function() {
			assert.equal("1", stack.peek());
		});
		
		it("Should now be 4 items in stack", function() {
			assert.equal(4, stack.length());
		});
		
		it("Inserts a float to stack", function() {
			assert.equal(true, stack.push(4.32));
		});
		
		it("Should now be 5 items in stack", function() {
			assert.equal(5, stack.length());
		});
		
		it("Inserts a array to stack", function() {
			assert.equal(true, stack.push([]));
		});
		
		it("Should now be 6 items in stack", function() {
			assert.equal(6, stack.length());
		});
		
		it("Inserts a object to stack", function() {
			assert.equal(true, stack.push({}));
		});
		
		it("Should now be 7 items in stack", function() {
			assert.equal(7, stack.length());
		});
		
		it("Return false when attempting to push undefined element to stack", function() {
			assert.equal(false, stack.push());
		});
		
		it("Should still be 7 items in stack", function() {
			assert.equal(7, stack.length());
		});
		
	});
	
	describe('Remove items and peek at top element in stack', function(){
		
		it("Call pop method", function() {
			assert.equal('[object Object]', Object.prototype.toString.call(stack.pop()));
		});
		
		it("Should now be 6 items in stack", function() {
			assert.equal(6, stack.length());
		});
		
		it("Call pop method", function() {
			assert.equal('[object Array]', Object.prototype.toString.call(stack.pop()));
		});
		
		it("Should now be 5 items in stack", function() {
			assert.equal(5, stack.length());
		});
		
		it("Call pop method", function() {
			assert.equal(4.32, stack.pop());
		});
		
		it("Should now be 4 items in stack", function() {
			assert.equal(4, stack.length());
		});

		it("Request current start position", function() {
			assert.equal("1", stack.pop());
		});
		
		it("Should now be 3 items in stack", function() {
			assert.equal(3, stack.length());
		});
			
		it("Call clear method", function() {
			assert.equal(true, stack.clear());
		});
		
		it("Should now be zero items in stack", function() {
			assert.equal(0, stack.length());
		});		
		
	});
	
});

