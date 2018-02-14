declare class Queue<T> {
    private qKey: any;
    private items: WeakMap<any, Array<T>>;
    public add(element: T): void;
    public remove(): T | undefined;
    public front(): T | undefined;
    public clear(): void;
    public size(): number;
}

