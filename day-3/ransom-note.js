/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length > magazine.length) return false;
    const initMagazineLength = magazine.length;

    for(let item of ransomNote){
        magazine = magazine.replace(item, '');
    }
    
    return initMagazineLength === magazine.length + ransomNote.length;
};

console.log(canConstruct("aaaaaa", "abafdfsfasdADADAAAaaadassfadasdaddsda"));
console.log(canConstruct("a", "bcdew"));
console.log(canConstruct("aa", "aba"));