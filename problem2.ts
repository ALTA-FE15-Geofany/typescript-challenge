function ubahHuruf(sentence: string): string {
    const hurufAlphabet: string = 'KLMNOPQRSTUVWXYZABCDEFGHIJ';
    let hasil: string = ''

    for (let i = 0; i < sentence.length; i++) {
        const characterNow: string = sentence[i]
        let characterEncript: string = characterNow

        if (characterNow.match(/[A-Z]/)) {
            const index: number = characterNow.charCodeAt(0) - 65
            characterEncript = hurufAlphabet[index]
        }

        hasil += characterEncript
    }

    return hasil
}

console.log(ubahHuruf("SEPULSA OKE"))     
console.log(ubahHuruf("ALTERRA ACADEMY")) 
console.log(ubahHuruf("INDONESIA"))       
console.log(ubahHuruf("GOLANG"))          
console.log(ubahHuruf("PROGRAMMER"))     
