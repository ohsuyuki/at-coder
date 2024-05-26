function main(input) {
    input = input.split(`\n`);
    S = input[0].toUpperCase();
    T = input[1];

    let indexT = 0;
    for(let i = 0; i < S.length; i++) {
        const c = S[i].toUpperCase();
        if(c === T[indexT]) {
            indexT++;
        }
        if(indexT === 3) {
            return "Yes";
        }
    }
    if(indexT === 2 && T[T.length - 1] === "X") {
        return 'Yes';
    }
    return "No";
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`snuke
RNG
`)

console.log(a);
