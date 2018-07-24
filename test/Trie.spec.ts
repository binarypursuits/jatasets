'use-strict';

import { Trie } from '../src/Trie';
import { expect } from 'chai';

describe('Jatasets - Trie', () => {

    let trie: Trie;

    before('Populate data set', () => {
        trie = new Trie([
            "aaron",
            "andy",
            "art",
            "billy",
            "brian",
            "bob",
            "dan",
            "dave",
            "danny",
            "donald"
        ]);
    });

    it('Work', () => {	
		expect(trie.search('a')).to.equal(true);
    });	
    
});


