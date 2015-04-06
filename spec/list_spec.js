var js = require("../jatasets");
var assert = require("assert")
var list = js.list();

describe("List", function() {
	
	describe("Test insert function", function() {
		
		it("Inserts a number to list", function() {
			var output = list.insert(12);
			expect(output).toEqual(true);
		});
		
		it("Inserts a string to list", function() {
			var output = list.insert("Iamastring");
			expect(output).toEqual(true);		
		});
		
		it("Inserts a string with spaces to list", function() {
			var output = list.insert("I am a string");
			expect(output).toEqual(true);		
		});
		
		it("Inserts a number as a string to list", function() {
			var output = list.insert("1");
			expect(output).toEqual(true);		
		});
		
		it("Inserts a float to list", function() {
			var output = list.insert(4.32);
			expect(output).toEqual(true);
		});
		
		it("Inserts a array to list", function() {
			var output = list.insert([]);
			expect(output).toEqual(true);
		});
		
		it("Inserts a object to list", function() {
			var output = list.insert({});
			expect(output).toEqual(true);
		});
		
		it("Return false when attempting to insert undefined element to list", function() {
			var output = list.insert();
			expect(output).toEqual(false);
		});
		
	});

	describe("Test length function", function() {
		it("Request current list length", function() {
			var output = list.length();
			expect(output).toEqual(7);
		});
	});
	
	describe("Test current function", function() {
		
		it("Request current start position", function() {
			var output = list.current();
			expect(output).toEqual(0);
		});
		
	});
	
	describe("Test toString function", function() {
		
		it("Request string", function() {
			var output = list.toString();
			expect(output).toEqual("12,Iamastring,I am a string,1,4.32,,[object Object]");
		});
		
	});
	
	describe("Test toJson function", function() {
		
		it("Request JSON", function() {
			var output = list.toJson();
			expect(output).toEqual('[12,"Iamastring","I am a string","1",4.32,[],{}]');
		});
		
	});
	
	describe("Test next function", function() {
		it("Iterate to next position", function() {
			list.next();
			var one = list.current();
			expect(one).toEqual(1);
		});
		
	});
	
	describe("Test end function", function() {
		
		it("Call end method", function() {
			list.end();
			var end = list.current();
			expect(end).toEqual(6);
		});
		
		it("Request current start position", function() {
			var output = list.current();
			expect(output).toEqual(6);
		});
		
	});
	
	describe("Test prev function", function() {
		
		it("Call prev method", function() {
			list.prev();
			var five = list.current();
			expect(five).toEqual(5);
		});
		
	});
	
	describe("Test front function", function() {
		
		it("Call front method", function() {
			list.front();
			var front = list.current();
			expect(front).toEqual(0);
		});
		
	});
	
	describe("Test contains function", function() {
		
		it("Call contains for string which exists", function() {
			var output = list.contains('Iamastring');
			expect(output).toEqual(true);
		});
		
		it("Call contains for string which exists", function() {
			var output = list.contains('I don\'t exist');
			expect(output).toEqual(false);
		});

	});
	
	describe("Test remove function", function() {
		
		it("Call remove with element not in list", function() {
			var output = list.remove("Not in there");
			expect(output).toEqual(false);
		});
		
		it("Call remove with element in list", function() {
			var output = list.remove('Iamastring');
			expect(output).toEqual(true);
		});
		
		it("Test list length still the same", function() {
			var output = list.length();
			expect(output).toEqual(6);
		});
	});
	
	describe("Test insert function", function() {
		
		it("Insert new element", function() {
			var output = list.insert("I am new");
			expect(output).toEqual(true);
		});
		
		it("Test new list length", function() {
			output = list.length();
			expect(output).toEqual(7);
		});
		
	});
	
	describe("Test move function", function() {
		
		it("Move to negative position which does not exist", function() {
			var output = list.move(-8);
			expect(output).toEqual(false);
		});
	
		it("Move to position which does not exist", function() {
			output = list.move(18);
			expect(output).toEqual(false);
		});
		
		it("Move to position which does exist", function() {
			output = list.move(3);
			expect(output).toEqual(true);
		});
		
		it("Test current element value", function() {
			output = list.getElement();
			expect(output).toEqual(4.32);
		});
		
		it("Test current position value", function() {
			output = list.current();
			expect(output).toEqual(3);
		});
	});

	describe("Test getElement function", function() {
		it("Retrieve current element", function() {
			var output = list.getElement();
			expect(output).toEqual(4.32);
		});
	});
	
	describe("Test clear function", function() {
		it("Call clear method", function() {
			var output = list.clear();
			expect(output).toEqual(true);
		});
		
		it("Test length of list", function() {
			var output = list.length();
			expect(output).toEqual(0);
		});
	});
});
	
		
