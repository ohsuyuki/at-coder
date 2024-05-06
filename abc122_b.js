const ACGT = "ACGT"

function isACGT(c) {
    return ACGT.includes(c);
}

function main(input) {
    const S = input;

    let max = 0;
    let count = 0;
    for(let c of S) {
        if(isACGT(c)) {
            count++;
        } else {
            max = Math.max(max, count);
            count = 0;
        }
    }

    return max;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main("HATAGAYA");

console.log(a);
