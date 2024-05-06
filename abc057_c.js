function F(a,b) {
    return Math.max(digit(a), digit(b));
}

function digit(n) {
    return String(n).length;
}

function main(input) {
    const N = Number(input);
    if(N === 1) {
        return 1;
    }

    const max = Math.sqrt(N);
    let answer = Number.MAX_VALUE;
    for(let i=1; i<=max; i++) {
        const n = N/i;
        if(!Number.isInteger(n)) {
            continue;
        }

        const v = F(i,n);
        answer = Math.min(answer, v);
    }
    return answer;
}

const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));

console.log(a);
