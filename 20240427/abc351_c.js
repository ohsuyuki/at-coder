function main(input) {
    input = input.split(`\n`);
    const N = Number(input[0]);
    const A = input[1].split(` `).map(Number);

    const ans = [];
    const pushAndMerge = (current) => {
        if(ans.length === 0) {
            ans.push(current);
            return;
        }

        const end = ans[ans.length - 1];
        if(end === current) {
            ans.pop();
            pushAndMerge(current + 1);
        } else {
            ans.push(current);
        }
    }

    for(let i = 0; i < N; i++) {
        const current = A[i];
        pushAndMerge(current);
    }

    return ans.length;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`5
0 0 0 1 2
`)

console.log(a);
