function main(input) {
    input = input.split(`\n`);
    const N = Number(input[0]);
    if(N % 2 !== 0) {
        return null;
    }

    const isValid = (parentheses) => {
        let score = 0;
        for(let i = 0; i < parentheses.length; i++) {
            const c = parentheses[i];
            const curScore = c === "(" ? 1 : -1;
            score += curScore;
            if(score < 0) {
                return false
            }
        }
        return score === 0;
    };

    const brackets = "()";
    const ret = [];
    const solve = (parentheses) => {
        if(parentheses.length === N - 1) {
            parentheses += ")";
            if(isValid(parentheses)) {
                ret.push(parentheses);
            }
            return;
        }

        for(let i = 0; i < brackets.length; i++) {
            const b = brackets[i];
            solve(parentheses + b);
        }
    };
    solve("(");
    return ret;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`10
`)
// console.log(a);
if(a != null) {
    for(const ans of a) {
        console.log(ans);
    }
}
