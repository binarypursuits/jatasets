declare class Stack {
    private sKey: any;
    private items: WeakMap<any, Array<any>>;
    public push(element: any): void;
    public pop(): any | undefined;
    public peek(): any | undefined;
    public clear(): void;
    public size(): number;
}

