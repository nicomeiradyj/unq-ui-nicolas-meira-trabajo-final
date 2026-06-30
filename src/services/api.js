export async function validateWord(word) {
    const res = await fetch(`https://word-api-hmlg.vercel.app/api/validate?word=${word}`);
    const data = await res.json();
    return data.exists;
}

async function validate(word, usedWords, lastWord) {
    if (usedWords.includes(word)) return 'La palabra ya fue utilizada';
    if (lastWord && word[0] !== lastWord[lastWord.length - 1]) return 'No respeta la cadena';
    const exists = await validateWord(word);
    if (!exists) return 'La palabra no existe';
    return null;
}
