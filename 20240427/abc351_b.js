function main(input) {
    input = input.split(`\n`);
    const N = Number(input[0]);

    const startA = 1;
    const startB = 1 + N;

    for(let i = 0; i < N; i++) {
        const lineA = input[startA + i];
        const lineB = input[startB + i];
        for(let j = 0; j < N; j++) {
            const charA = lineA[j];
            const charB = lineB[j];
            if(charA !== charB) {
                return `${i + 1} ${j + 1}`;
            }
        }
    }

    return "Error";
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`10
eixfumagit
vtophbepfe
pxbfgsqcug
ugpugtsxzq
bvfhxyehfk
uqyfwtmglr
jaitenfqiq
acwvufpfvv
jhaddglpva
aacxsyqvoj
eixfumagit
vtophbepfe
pxbfgsqcug
ugpugtsxzq
bvfhxyehok
uqyfwtmglr
jaitenfqiq
acwvufpfvv
jhaddglpva
aacxsyqvoj
`)

console.log(a);