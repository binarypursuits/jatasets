'use strict';

export class Queue {

    private qKey: any = {};
    private items: WeakMap<any, Array<any>> = new WeakMap();

    constructor() {
        this.clear();
    }

    public add(element: any): boolean {
        if (!element) {
            return false;
        }
        
        let queue = this.items.get(this.qKey);

        if (!queue) {
            return false;
        }

        queue.push(element);

        return true;
    }

    public remove(): any {
        let queue = this.items.get(this.qKey);

        if (!queue || this.size() === 0) {
            return false;
        }

        return queue.shift();
    }

    public peek(): any {
        let queue = this.items.get(this.qKey);

        if (!queue) {
            return queue;
        }

        return queue[queue.length - 1];
    }

    public front():  any {
        let queue = this.items.get(this.qKey);

        if (!queue || this.size() === 0) {
            return false;
        }

        return queue[0];
    }

    public back():  any {
        let queue = this.items.get(this.qKey);

        if (!queue) {
            return queue;
        }

        return queue[queue.length - 1];
    }

    clear(): void {
        this.items.set(this.qKey, []);
    }

    size(): number {
        let queue = this.items.get(this.qKey);

        if (!queue) {
            return 0;
        }

        return queue.length;
    }

}