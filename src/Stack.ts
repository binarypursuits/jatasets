'use strict';

export class Stack {

    private sKey: any = {};
    private items: WeakMap<any, Array<any>> = new WeakMap();

    public constructor() {
        this.clear();
    }

    public push(element: any): boolean {
        let stack = this.items.get(this.sKey);

        if (!stack || !element) {
            return false;
        }

        stack.push(element);

        return true;
    }

    public pop(): any | undefined {
        let stack = this.items.get(this.sKey);

        if (!stack) {
            return stack;
        }

        return stack.pop();
    }

    public peek(): any | false {

        if (this.size() === 0) {
            return false;
        }

        let stack = this.items.get(this.sKey);

        if (!stack) {
            return false;
        }

        return stack[stack.length - 1];
    }

    public clear(): boolean {
        this.items.set(this.sKey, []);
        return true;
    }

    public size(): number {
        let stack = this.items.get(this.sKey);

        if (!stack) {
            return 0;
        }

        return stack.length;
    }

}

export const hello = () => {
    return 'Hello World';
};