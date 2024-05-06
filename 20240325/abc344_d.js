function main(input) {
    input = input.split(`\n`);
    T = input[0];
    N = Number(input[1]);

    const getList = (index) => {
        const current = 2 + index;
        const line = input[current].split(` `);
        return [Number(line[0]), line.slice(1)];
    };

    let min = Number.MAX_VALUE;

    const dic = {};
    const [num, list] = getList(0);
    for(let i = 0; i < num; i++) {
        const str = list[i];
        if(T === str) {
            return 1;
        }
        if(T.startsWith(str)) {
            dic[str] = 1;
        }
    }

    for(let i = 1; i < N; i++) {
        const [num, list] = getList(i);
        for(let j = 0; j < num; j++) {
            const str = list[j];
            for(const [k, v] of Object.entries(dic)) {
                const tmpStr = k + str;
                if(!T.startsWith(tmpStr)) {
                    continue;
                }
                if(tmpStr in dic) {
                    dic[tmpStr] = Math.min(dic[tmpStr], v + 1);
                } else {
                    dic[tmpStr] = v + 1;
                }
                if(T === tmpStr) {
                    min = Math.min(min, dic[tmpStr]);
                }
            }

            if(!T.startsWith(str)) {
                continue;
            }
            if(T === str) {
                return 1;
            }
            dic[str] = 1;
        }
    }

    return min === Number.MAX_VALUE ? -1 : min;
}

// const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
const a = main(`aaabbbbcccc
6
2 aa aaa
2 dd ddd
2 ab aabb
4 bbaa bbbc bbb bbcc
2 cc bcc
3 ccc cccc ccccc
`)

console.log(a);
