function main(input) {
    const S = input.split(`\n`)[0];

    let skip = false;
    let ret = "";
    for(let i = 0; i < S.length; i++) {
        const c = S[i];
        if(c === "|") {
            skip = !skip
            continue;
        }
        if(!skip) {
            ret += c;
        }
    }
    return ret;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`||xyz
`)
console.log(a);
