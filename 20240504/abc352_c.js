function main(input) {
    input = input.split(`\n`);
    const N = input[0];

    let total = 0;
    let max = 0;
    for(let i = 0; i < N; i++) {
        const [a, b] = input[i + 1].split(` `).map(Number);
        max = Math.max(max, b - a);
        total += a;
    }
    return total + max;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`10
690830957 868532399
741145463 930111470
612846445 948344128
540375785 925723427
723092548 925021315
928915367 973970164
563314352 832796216
562681294 868338948
923012648 954764623
691107436 891127278
`)

console.log(a);
