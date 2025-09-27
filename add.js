
                                          //  Palindrome Check 
              
// ------------------------------------------------------------------------------------------------------------------------
                                   //    Character by Character Comparison   
let word = "stairs"
let len = word.length
let isPalindrome = true


for (let i = 0; i < len / 2 ; i++) {
    
if (word[i] !== word[len - 1 - i]) {
    console.log("word is not palindrome")
    isPalindrome = false
    break;
}

}

if (isPalindrome) {
    console.log("word is palindrome")
}


// --------------------------------------------------------------------------------------------------------------
                                   //    Character by Character Comparison  
let word2 = "madam" 
let len2 = word2.length
let isPalindrome2 = true

for (let i = 0; i < len2 / 2; i++) {

    if (word2[i] !== word2[len - 1 - i]) {
        console.log("word is not palindrome")
        isPalindrome2 = false;
        break;
    }

}

if (isPalindrome2) {
    console.log("word is palindrome")
}


// ------------------------------------------------------------------------------------------------------------------------- 
                                        //    Character by Character Comparison   

let car = "civic"
let leng = car.length
let palindrome = true

for (let i = 0; i < leng / 2 ; i++) {

    if (car[i] !== car[leng - 1 - i]) {
        console.log("not Palindrome word")
        palindrome = false;
        break;
    }
}

if (palindrome) {
    console.log("palindrome word")
};


// ------------------------------------------------------------------------------------------------------------------

                               //    Reverse & Compare 
let m = "meelad"
let b = "";

for (let i = m.length - 1; i >= 0; i--) {

    b  += m[i]
}

if (m === b) {
    console.log(`${m} is ka palindrome word`)
} else {
    console.log(`${m} is not a palindrome word`)
}


// ----------------------------------------------------------------------------------------------------------------  