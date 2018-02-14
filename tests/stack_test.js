'use-strict';

import test from 'ava';
import { Stack } from '../dist/jatasets';

let stack = new Stack();

console.log(stack);

test('Should start with zero items in stack', (t) => {	
	t.equal(stack.length, 0);
});

/*
test('Attempt to peek empty stack should return false', (t) => {
	t.equal(stack.peek(), false);
});

test('Able to Insert a number into the stack', (t) => {
	t.equal(stack.push(12), true); 
});

test('Should now be 1 item in stack', (t) => {
	t.equal(stack.length(), 1);  
});

test('Inserts a string to stack', (t) => {
	t.equal(stack.push('Iamastri ng'), true);	
});

test('Should now be 2 items in stack', (t) => {
	t.equal(stack.length(), 2);  
});

test('Inserts a string with spaces to stack', (t) => {
	t.equal(stack.push('I am a string'), true);	 
});

test('Should now be 3 items in stack', (t) => {
	t.equal(stack.length(), 3);  
});

test('Inserts a number as a string to stack', (t) => {
	t.equal(stack.push('1'), true);		  
});

test('Test stack peek with last item inserted', (t) => {
	t.equal(stack.peek(), '1');  
});

test('Should now be 4 items in stack', (t) => {
	t.equal(stack.length(), 4);  
});

test('Inserts a float to stack', (t) => {
	t.equal(stack.push(4.32), true); 
});

test('Should now be 5 items in stack', (t) => {
	t.equal(stack.length(), 5);  
});

test('Inserts a array to stack', (t) => {
	t.equal(stack.push([]), true); 
});

test('Should now be 6 items in stack', (t) => {
	t.equal(stack.length(), 6);  
});

test('Inserts a object to stack', (t) => {
	t.equal(stack.push({}), true); 
});

test('Should now be 7 items in stack', (t) => {
	t.equal(stack.length(), 7);  
});

test('Return false when attempting to push undefined element to stack', (t) => {
	t.equal(stack.push(), false);  
});

test('Should still be 7 items in stack', (t) => {
	t.equal(stack.length(), 7);  
});
   
test('Call pop method', (t) => {
	t.equal(Object.prototype.toString.call(stack.pop()), '[object Object] ');
});
	
test('Should now be 6 items in stack', (t) => {
	t.equal(stack.length(), 6);  
});
	
test('Call pop method', (t) => {
	t.equal(Object.prototype.toString.call(stack.pop()), '[object Array]');
});
	
test('Should now be 5 items in stack', (t) => {
	t.equal(stack.length(), 5);  
});
	
test('Call pop method', (t) => {
	t.equal(stack.pop(), 4.32);
});
	
test('Should now be 4 items in stack', (t) => {
	t.equal(stack.length(), 4);  
});

test('Request current start position', (t) => {
	t.equal(stack.pop(), '1');  
});
	
test('Should now be 3 items in stack', (t) => {
	t.equal(stack.length(), 3);  
});
		
test('Call clear method', (t) => {
	t.equal(stack.clear(), true);
});
	
test('Should now be zero items in stack', (t) => {
	t.equal(stack.length(), 0);  
});		
	
*/