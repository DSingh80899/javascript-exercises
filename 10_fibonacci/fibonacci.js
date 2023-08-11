const fibonacci = function(index) {
    
    if (index < 1) return 'OOPS'
    if (index == 0) return 0
    if(index ==1 || index == 2) return 1
    let fib0=1,fib1=1,fib2=1

    for(let i=3;i<=index;i++){
        fib0=fib1
        fib1=fib2
        fib2=fib1+fib0
    }

    return fib2
};

// Do not edit below this line
module.exports = fibonacci;
