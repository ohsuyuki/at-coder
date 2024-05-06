function main(input) {
    const inputs = input.split(' ').map(Number);
    const [A, B, K] = [...inputs];

    const min = Math.min(A, B);
    let counter = 0;
    for(let i = min; 0 < i; i--) {
        if(A % i === 0 && B % i === 0) {
            counter++;
            if(counter === K) {
                return i;
            }
        }
    }
}

const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));

console.log(a);
