export async function validateWord(word) {
    const res = await fetch(`https://word-api-hmlg.vercel.app/api/validate?word=${word}`);
    const data = await res.json();
    return data.exists;
}