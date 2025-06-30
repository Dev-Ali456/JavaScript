
function countVowels(str) {
    let count = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    for (let char of str.toLowerCase()) {
        if (vowels.has(char)) {
            count++;
        }
    }
    
    return count;
}
console.log(countVowels("Javascript"));
