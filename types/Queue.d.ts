declare class Queue {
    private qKey: any;
    private items: WeakMap<any, Array<any>>;
    public add(element: any): void;
    public remove(): any;
    public front(): any;
    public clear(): void;
    public size(): number;
}

