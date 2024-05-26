function main(input) {
    const str = input.split(`\n`)[0];
    for(let i = 0; i < str.length; i++) {
        const c = str[i];

        switch(i) {
            case 0:
                if(c !== `<`) {
                    return "No";
                }
                continue;
            case (str.length - 1):
                if(c !== `>`) {
                    return "No";
                }
                continue;
            default:
                if(c !== `=`) {
                    return "No";
                }
                continue;
        }
    }

    return "Yes";
}

const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
console.log(a);
