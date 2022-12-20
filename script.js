function checkPalindrome(){
    // get value from input to str and then call isPalindrome(str)
    const str=document.getElementById("palindrome_input").value;
    isPalindrome(str);

}

function isPalindrome(str){
    const palindrome=document.getElementById("palindrome_res");
    if (str==""){
        return palindrome.textContent="No input";
    }
    const Str=str.toLowerCase();
    const revStr=Str.split('').reverse().join('');
    if (Str==revStr){
        console.log('true');
        return palindrome.textContent="True. It is palindrome";
    }else{
        console.log('false');
        return palindrome.textContent="False. It is not palindrome";
    }
}

function reverseString(){
    // get value from input to str and then call reverseString(str)
    const str=document.getElementById("reverse_input").value;
    reversesString(str);
}

function reversesString(str){
    const reverse=document.getElementById("reverse_result");
    reverse.textContent=str.split('').reverse().join('');
}

function getCount(){
    // get value from input to str and c and then call countChar(str,c)
    const str=document.getElementById("string_value").value;
    const c=document.getElementById("character_value").value;
    countChar(str,c);
}

function countChar(str,c){
    let count = 0;
    const res=document.getElementById("res_calc");
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == c) {
            count += 1;
        }
    }
    console.log(count);
    res.textContent=count;
}
