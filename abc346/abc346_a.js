function main(input) {
    const inputs = input.split(`\n`);
    const N = Number(inputs[0]);
    const nums = inputs[1].split(` `).map(Number);
    const ans = [];
    for(let i = 0; i < nums.length - 1; i++) {
        ans.push(nums[i] * nums[i+1]);
    }
    return ans.join(" ");
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`5
22 75 26 45 72
`);
console.log(a);