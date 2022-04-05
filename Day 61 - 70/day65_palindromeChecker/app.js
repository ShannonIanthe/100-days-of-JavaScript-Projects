const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click', palindrome);

// 
function palindrome() {
    const word = document.querySelector('.input-text').value;
    let len = word.length;

    let start = word.substring(0, Math.floor(len / 2)).
    toLowerCase();
    let end = word.substring(len - Math.floor(len / 2)).
    toLowerCase();

    //split in order to  compare - split reverse then join it back
    let flip = [...end].reverse().join('');
    // check if start and end are the same
    if (start == flip) {
        result.innerHTML = `${word.toUpperCase()} is a palindrome.`
    } else {
        result.innerHTML = `${word.toUpperCase()} is not a palindrome.`

    }


}