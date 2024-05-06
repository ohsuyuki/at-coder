function main(input) {
    const inputs = input.split(`\n`);
    const [N, M] = inputs[0].split(` `).map(Number);
    const edges = inputs.slice(1, 1 + M).map((input) => input.split(` `).map(Number));

    const graph = [...Array(N)].map(n => [...Array(N)].fill(false));
    for(const edge of edges) {
        start = edge[0] - 1;
        end = edge[1] - 1;
        graph[start][end] = true;
        graph[end][start] = true;
    }

    let count = 0;
    const dfs = (v, visited) => {
        if(visited.every(v => v === true)) {
            count++;
            return;
        }

        for(let i=0; i<N; i++) {
            if(!graph[v][i]) {
                continue;
            }
            if(visited[i]) {
                continue;
            }

            visited[i] = true;
            dfs(i, visited);
            visited[i] = false;
        }
    }
    let visited = [true, ...[...Array(N - 1).fill(false)]];
    dfs(0, visited);

    return count;
}

const a = main(require("fs").readFileSync("/dev/stdin", "utf8"));
// const a = main(`7 7
// 1 3
// 2 7
// 3 4
// 4 5
// 4 6
// 5 6
// 6 7
// `)

console.log(a);
