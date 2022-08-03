/* Zion, Nash, Anthony */

// Submit Button submits inputted data
let submitButton = document.getElementById("submit_button");
//Title is inputted by user through text
let titleInput = document.getElementById("title_input");
let head = document.getElementById("main_title");
let word1 = document.getElementById("noun").value;
let word2 = document.getElementById("verb").value;
let word3 = document.getElementById("adjective").value;
let resultBox = document.getElementById("story_result");

titleInput.onkeyup = function(){
    let userInput = titleInput.value;
    head.innerHTML = userInput.toUpperCase();
    

}
submitButton.onclick = function(event) {
    console.log(event);
    event.preventDefault();
    
    if (titleInput.value == ''|| word1 == '' || word2 == '' || word3 == ''){
        alert('Please fill in all fields');
        console.log("selected if");
    }
    
    else {
    // End story displayed
    resultBox.innerHTML = ("Last night I ate a " + word1 + " and today I just had to " + word2 + " what a " + word3 + " day!")


        
        let y = document.querySelector("form");
        y.style.display = 'none';
        console.log("selected else");
    }
}





