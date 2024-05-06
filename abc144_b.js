function main(input) {
    const N = Number(input.split('\n')[0]);
    for(let i = 1; i <= 9; i++) {
        for(let j = 1; j <= 9; j++) {
            if(i * j === N) {
                return true;
            }
        }
    }

    return false;
}

const r = main(`10`);
// const r = main(require("fs").readFileSync("/dev/stdin", "utf8"));

console.log(r ? "Yes" : "No");
