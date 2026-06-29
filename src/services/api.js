export async function validateWord(word) {
    const res = await fetch(`https://word-api-hmlg.vercel.app/api/validate?word=${word}`);
    const data = await res.json();
    return data.exists;
}

function validate(word, usedWords, lastWord) {
    if (usedWords.includes(word)) return 'La palabra ya fue utilizada';
    if (lastWord && word[0] !== lastWord[lastWord.length - 1]) return 'No respeta la cadena';
    if (!validateWord(word)) return 'La palabra no existe';
    return null;
}
