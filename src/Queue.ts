'use strict';

export class Queue<T> {

    private qKey: any = {};
    private items: WeakMap<any, Array<T>> = new WeakMap();

    constructor() {
        this.clear();
    }

    public add(element: T): boolean {
        let queue = this.items.get(this.qKey);

        if (!queue) {
            return false;
        }

        queue.push(element);

        return true;
    }

    public remove(): T | undefined {
        let queue = this.items.get(this.qKey);

        if (!queue) {
            return queue;
        }

        return queue.shift();
    }

    public peek(): T | undefined {
        let queue = this.items.get(this.qKey);

        if (!queue) {
            return queue;
        }

        return queue[queue.length - 1];
    }

    public front():  T | undefined {
        let queue = this.items.get(this.qKey);

        if (!queue) {
            return queue;
        }

        return queue[0];
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