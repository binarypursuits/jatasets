'use-strict';

import * as JataSets from '../src';
import { expect } from 'chai';

const queue = new JataSets.Queue();

describe('JataSets Queue Tests', () => {

	it('Queue size should be zero', () => {
		expect(queue.size()).to.equal(0);
	});

	it('Check if remove returns false when queue is empty', () => {
		expect(queue.remove()).to.equal(false);
	});

	it('Check if front returns false when queue is empty', () => {
		expect(queue.front()).to.equal(false);
	});

	it('Inserts an element in to the queue returns true', () => {
		expect(queue.add('Meredith')).to.equal(true);
	});

	it('Size of queue should be 1', () => {
		expect(queue.size()).to.equal(1);
	});

	it('Inserts an element in to the queue returns true', () => {
		expect(queue.add('Cynthia')).to.equal(true);
	});

	it('Size of queue should be 2', () => {
		expect(queue.size()).to.equal(2);
	});

	it('Inserts an element in to the queue returns true', () => {
		expect(queue.add('Jennifer')).to.equal(true);
	});

	it('Size of queue should be 3', () => {
		expect(queue.size()).to.equal(3);
	});

	// it('Return false when undefined element add', () => {
	// tslint:disable-next-line
	// expect(queue.add()).to.equal(false);
	// });

	it('Retrieve element in front of queue', () => {
		expect(queue.front()).to.equal('Meredith');
	});

	it('Retrieve element in back of queue', () => {
		expect(queue.back()).to.equal('Jennifer');
	});

	it('Call remove method', () => {
		expect(queue.remove()).to.equal('Meredith');
	});

	it('Retrieve element in front of queue', () => {
		expect(queue.front()).to.equal('Cynthia');
	});

	it('Retrieve element in back of queue', () => {
		expect(queue.back()).to.equal('Jennifer');
	});

	it('Call remove method', () => {
		expect(queue.remove()).to.equal('Cynthia');
	});

	it('Call remove method', () => {
		expect(queue.remove()).to.equal('Jennifer');
	});

});
