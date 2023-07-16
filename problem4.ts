function caesarCipher(offset: number, input: string): string {
    let result: string = ''
    const lowercaseAlphabet: string = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < input.length; i++) {
        const characterNow: string = input[i]

        if (characterNow === ' ') {
            result += ' '
            continue
        }

        const isLowerCase: boolean = characterNow === characterNow.toLowerCase()
        const alphabet: string = isLowerCase ? lowercaseAlphabet : lowercaseAlphabet.toUpperCase()
        const index: number = alphabet.indexOf(characterNow.toLowerCase())
        const indexNew: number = (index + offset) % alphabet.length

        const characterNew: string = isLowerCase ? alphabet[indexNew] : alphabet[indexNew].toUpperCase()
        result += characterNew
    }

    return result
}

console.log(caesarCipher(3, "abc")) 
console.log(caesarCipher(2, "alta")) 
console.log(caesarCipher(10, "alterraacademy")) 
console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz")) 
console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz"))
