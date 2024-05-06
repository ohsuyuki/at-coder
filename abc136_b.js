function main(input) {
    const N = Number(input);

    let counter = 0;
    for(let i = 0; i <= 5; i+=2) {
        const current = Math.pow(10, i);
        const next = current * 10;

        if(N < current) {
            break;
        }
        else if(N >= next) {
            let c = i === 0 ? 9 : next - current;
            counter+=c;
        } else {
            let c = i === 0 ? N : N - (current - 1);
            counter+=c;
            break;
        }
    }
    return counter;
}

const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));

console.log(a);
