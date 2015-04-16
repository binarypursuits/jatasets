var js = require("../jatasets");
var assert = require("assert")
var queue = js.queue();

describe("JataSets Queue Tests", function() {
		
	it("Check if queue is empty", function() {
		assert.equal(true, queue.empty());
	});
	
	it("Check if dequeue returns false when empty", function() {
		assert.equal(false, queue.dequeue());
	});
	
	it("Check if front returns false when empty", function() {
		assert.equal(false, queue.front());
	});
	
	it("Inserts an element in to the queue", function() {
		assert.equal(1, queue.enqueue("Meredith"));
	});
	
	it("Inserts an element in to the queue", function() {
		assert.equal(2, queue.enqueue("Cynthia"));
	});
	
	it("Inserts an element in to the queue", function() {
		assert.equal(3, queue.enqueue("Jennifer"));
	});
	
	it("Return false when undefined element enqueue", function() {
		assert.equal(false, queue.enqueue());
	});
		
	it("Check if queue is empty", function() {
		assert.equal(false, queue.empty());
	});
	
	it("Retrieve element in front of queue", function() {
		assert.equal("Meredith", queue.front());
	});
	
	it("Retrieve element in back of queue", function() {
		assert.equal("Jennifer", queue.back());
	});
	
	it("Call toString method", function() {
		assert.equal("Meredith\nCynthia\nJennifer\n", queue.toString());
	});
	
	it("Call dequeue method", function() {
		assert.equal("Meredith", queue.dequeue());
	});
	
	it("Call toString method", function() {
		assert.equal("Cynthia\nJennifer\n", queue.toString());
	});
	
	it("Retrieve element in front of queue", function() {
		assert.equal("Cynthia", queue.front());
	});
	
	it("Retrieve element in back of queue", function() {
		assert.equal("Jennifer", queue.back());
	});
	
	it("Call dequeue method", function() {
		assert.equal("Cynthia", queue.dequeue());
	});
	
	it("Check if queue is empty", function() {
		assert.equal(false, queue.empty());
	});
	
	it("Call dequeue method", function() {
		assert.equal("Jennifer", queue.dequeue());
	});
	
	
	it("Check if queue is empty", function() {
		assert.equal(true, queue.empty());
	});
	
});

