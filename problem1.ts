function playWithAsterik(n: number): string {
    let output: string = ''

    for (let i: number = 1; i <= n; i++) {
        for (let j: number = 1; j <= n - i; j++) {
            output += ' '
        }
        for (let k: number = 1; k <= i; k++) {
            output += '* '
        }
        output += '\n'
    }
    return output
}

console.log(playWithAsterik(5))
