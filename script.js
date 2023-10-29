function calculate(){

    
    var userName = document.getElementById("nameBox").value;
    var userCourse = parseInt(document.getElementById("courseBox").value);
    
    // Calculation formula
    var Fee = userCourse * 1000;
    
    // Joining HTML using .innerHTML
    document.getElementById("content").innerHTML =
    
    `<br><br><br>
    
     <i>Stundent Name: </i> ${userName} <br><br>
     <i>Course Taken: </i> ${userCourse} <br>
     <i><h4>Total tution fees: </i> <spam class="red">${Fee}</spam></h4>
     `
    
    }
    