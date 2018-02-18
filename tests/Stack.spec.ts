'use-strict';

import * as js from '../src';
import { expect, assert } from 'chai';
import 'mocha';

let stack = new js.Stack();

describe('Jatasets - Stack', () => {

	it('Should start with zero items in stack', () => {	
		expect(stack.size()).to.equal(0);
	});	

	it('Attempt to peek empty stack should return false', () => {
		expect(stack.peek()).to.equal(false);
	});
	
	it('Able to Insert a number into the stack', () => {
		expect(stack.push(12)).to.equal(true); 
	});
	
	it('Should now be 1 item in stack', () => {
		expect(stack.size()).to.equal(1);  
	});
	
	it('Inserts a string to stack', () => {
		expect(stack.push('Iamastri ng')).to.equal(true);	
	});
	
	it('Should now be 2 items in stack', () => {
		expect(stack.size()).to.equal(2);  
	});
	
	it('Inserts a string with spaces to stack', () => {
		expect(stack.push('I am a string')).to.equal(true);	 
	});
	
	it('Should now be 3 items in stack', () => {
		expect(stack.size()).to.equal(3);  
	});
	
	it('Inserts a number as a string to stack', () => {
		expect(stack.push('1')).to.equal(true);		  
	});
	
	it('Test stack peek with last item inserted', () => {
		expect(stack.peek()).to.equal('1');  
	});
	
	it('Should now be 4 items in stack', () => {
		expect(stack.size()).to.equal(4);  
	});
	
	it('Inserts a float to stack', () => {
		expect(stack.push(4.32)).to.equal(true); 
	});
	
	it('Should now be 5 items in stack', () => {
		expect(stack.size()).to.equal(5);  
	});
	
	it('Inserts a array to stack', () => {
		expect(stack.push([])).to.equal(true); 
	});
	
	it('Should now be 6 items in stack', () => {
		expect(stack.size()).to.equal(6);  
	});
	
	it('Inserts a object to stack', () => {
		expect(stack.push({})).to.equal(true); 
	});
	
	it('Should now be 7 items in stack', () => {
		expect(stack.size()).to.equal(7);  
	});
	
	it('Return false when attempting to push undefined element to stack', () => {
		expect(stack.push()).to.equal(false);  
	});
	
	it('Should still be 7 items in stack', () => {
		expect(stack.size()).to.equal(7);  
	});
	   
	it('Call pop method and returned item should be an empty <object>', () => {
		assert.typeOf(stack.pop(), 'object');
	});
		
	it('Should now be 6 items in stack', () => {
		expect(stack.size()).to.equal(6);  
	});
		
	it('Call pop method', () => {
		expect(Object.prototype.toString.call(stack.pop())).to.equal('[object Array]');
	});
		
	it('Should now be 5 items in stack', () => {
		expect(stack.size()).to.equal(5);  
	});
		
	it('Call pop method', () => {
		expect(stack.pop()).to.equal(4.32);
	});
		
	it('Should now be 4 items in stack', () => {
		expect(stack.size()).to.equal(4);  
	});
	
	it('Request current start position', () => {
		expect(stack.pop()).to.equal('1');  
	});
		
	it('Should now be 3 items in stack', () => {
		expect(stack.size()).to.equal(3);  
	});
			
	it('Call clear method should return true', () => {
		expect(stack.clear()).to.equal(true);
	});
		
	it('Should now be zero items in stack', () => {
		expect(stack.size()).to.equal(0);  
	});		
	

});