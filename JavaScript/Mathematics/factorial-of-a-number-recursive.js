function factRecursiveJS(num) {
    if(num==0) {
        return 1;
    }
    return num * factRecursiveJS(num - 1);
}

console.log(factRecursiveJS(5));