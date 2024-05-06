function main(input) {
    const inputs = input.split(`\n`);
    const N = Number(inputs[0]);
    const S = inputs[1];

    const ABC = "ABC";

    let count = 0;
    for(let i = 0; i <= N - ABC.length; i++) {
        const sub = S.substring(i, i + ABC.length);
        if(sub === ABC) {
            count++;
        }
    }
    return count;
}

const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));

console.log(a);
