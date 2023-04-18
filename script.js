function showScore(){
    let one = document.getElementById("question-one").value;
    let two = document.getElementById("question-two").value;
    let three = document.getElementById("question-three").value;
    let four = document.getElementById("question-four").value;
    let sectionResult = document.getElementById("result");
    let total = 0;
    
    if(one == "C. CSS"){
    sectionResult.innerHTML = "<p>1. Correct!</p>";
        total += 1;
    }
    else {
         sectionResult.innerHTML = "<p>1. Incorrect</p>";
        total += 0;
    }
    
       if(two == "A. function callFunction( )"){
    sectionResult.innerHTML += "<p>2. Correct!</p>";
           total += 1;
    }
    else {
         sectionResult.innerHTML += "<p>2. Incorrect</p>";
        total += 0;
    }
    
        if(three == "C. ul and li"){
    sectionResult.innerHTML += "<p>3. Correct!</p>";
            total += 1;
    }
    else {
         sectionResult.innerHTML += "<p>3. Incorrect</p>";
        total += 0;
    }
    
        if(four == "D. if statements"){
    sectionResult.innerHTML += "<p>4. Correct!</p>";
            total += 1;
    }
    else {
         sectionResult.innerHTML += "<p>4. Incorrect</p>";
        total += 0;
    }
    
    sectionResult.innerHTML += "Total Score: " + total + "/4"
    
}

function seeMore(){
    let element = document.getElementById("myMessage");
    let link = document.getElementById ("expandMe")
    if(element.classList.contains("hidden")){
        element.classList.remove("hidden");
        link.innerHTML = "See Less...";
    } else {
        element.classList.add("hidden");
        link.innerHTML = "See More...";
        }
}

function showMore(){
    let element1 = document.getElementById("firstMessage");
    let link1 = document.getElementById ("readMe")
    if(element1.classList.contains("hidden")){
        element1.classList.remove("hidden");
        link1.innerHTML = "See Less...";
    } else {
        element1.classList.add("hidden");
        link1.innerHTML = "See More...";
        }
}

setInterval(changeSlide, 3000);

function changeSlide(){
    let numP = document.getElementById("image-one");
   let num = numP.getAttribute("data-num");

    if(num == 1){
    numP.setAttribute("data-num",2);
    numP.src ='images/mountain.png';
    }
    else if(num == 2){
     numP.setAttribute("data-num",3);
    numP.src ='images/bird.png';
    }
    else if(num == 3){
    numP.setAttribute("data-num",4);
    numP.src ='images/beach.png';
    }
    else if(num == 4){
   numP.setAttribute("data-num",1);
    numP.src = 'images/sunset.png';
    }
}
