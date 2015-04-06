//var queue = new Queue();
var js = require("../jatasets");
var assert = require("assert")
var queue = js.queue();

describe("Queue", function() {
		
	it("Check if queue is empty", function() {
		var output = queue.empty();
		expect(output).toEqual(true);
	});
	
	it("Inserts an element in to the queue", function() {
		var output = queue.enqueue("Meredith");
		expect(output).toEqual(1);
	});
	
	it("Inserts an element in to the queue", function() {
		var output = queue.enqueue("Cynthia");
		expect(output).toEqual(2);		
	});
	
	it("Inserts an element in to the queue", function() {
		var output = queue.enqueue("Jennifer");
		expect(output).toEqual(3);		
	});
	
	it("Return false when undefined element enqueue", function() {
		var output = queue.enqueue();
		expect(output).toEqual(false);
	});
		
	it("Check if queue is empty", function() {
		var output = queue.empty();
		expect(output).toEqual(false);
	});
	
	it("Retrieve element in front of queue", function() {
		var output = queue.front();
		expect(output).toEqual("Meredith");		
	});
	
	it("Retrieve element in back of queue", function() {
		var output = queue.back();
		expect(output).toEqual("Jennifer");
	});
	
	it("Call toString method", function() {
		var output = queue.toString();
		expect(output).toEqual("Meredith\nCynthia\nJennifer\n");
	});
	
	it("Call dequeue method", function() {
		var output = queue.dequeue();
		expect(output).toEqual("Meredith");
	});
	
	it("Call toString method", function() {
		var output = queue.toString();
		expect(output).toEqual("Cynthia\nJennifer\n");
	});
	
	it("Retrieve element in front of queue", function() {
		var output = queue.front();
		expect(output).toEqual("Cynthia");		
	});
	
	it("Retrieve element in back of queue", function() {
		var output = queue.back();
		expect(output).toEqual("Jennifer");
	});
	
	it("Call dequeue method", function() {
		var output = queue.dequeue();
		expect(output).toEqual("Cynthia");
	});
	
	it("Check if queue is empty", function() {
		var output = queue.empty();
		expect(output).toEqual(false);
	});
	
	it("Call dequeue method", function() {
		var output = queue.dequeue();
		expect(output).toEqual("Jennifer");
	});
	
	
	it("Check if queue is empty", function() {
		var output = queue.empty();
		expect(output).toEqual(true);
	});
	
});

