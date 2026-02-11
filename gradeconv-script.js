function MarkToGrade(){
    let mark = document.getElementById("mark").value;
    let grade = "";
    let result = document.getElementById("result");

    try{
        if (mark < 0){
            //catch for negative numbers
            result.textContent = "ERROR: Cannot enter a negative grade. Please enter a positive value.";
        }

        else if (mark >= 0 && mark <= 100){
            //valid mark inputs
            if (mark >= 0 && mark < 50){
                grade = "F";
            }

            if (mark >= 50 && mark < 60){
                grade = "E";
            }
        
            if (mark >= 60 && mark < 70){
                grade = "D";
            }
        
            if (mark >= 70 && mark < 80){
                grade = "C";
            }
        
            if (mark >= 80 && mark < 90){
                grade = "B";
            }
        
            if (mark >= 90 && mark <= 100){
                grade = "A";
            }
            result.textContent = "Your grade is: " + grade;
        }
        
        else{
            //catch for numbers greater than 100
            result.textContent = "ERROR: Cannot enter a grade higher than 100 (although it would certainly be worthy of an A grade). Please enter a value less than or equal to 100.";
        }
    } catch(e){
        console.log("Error happened " + e.message);
    } finally{
        console.log("Mark converter finished");
    }
    event.preventDefault();
}