function factRecursiveTS(num: number): number {
    if(num==0) {
        return 1;
    }
    return num * factRecursiveTS(num - 1);
}

console.log(factRecursiveTS(5));