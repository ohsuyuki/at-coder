const { Console } = require("console");

function main(input) {
    const str = input.split(`\n`)[0];

    const counter = new Array(26);
    for(let i = 0; i < 26; i++) {
        counter[i] = 0;
    }

    let hasDuplicate = false;
    const CODE_a = "a".charCodeAt(0);
    for(let i = 0; i < str.length; i++) {
        const index = str.charCodeAt(i) - CODE_a;
        counter[index]++;
        if(counter[index] >= 2) {
            hasDuplicate = true;
        }
    }

    let total = 0;
    for(let i = 0; i < 25; i++) {
        for(let j = i + 1; j < 26; j++) {
            total += (counter[i] * counter[j]);
        }
    }

    if(hasDuplicate) {
        total++;
    }

    return total;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`abcba
`)

console.log(a);
