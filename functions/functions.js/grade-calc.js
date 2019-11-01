

const setGrade = function(score ,totalScore){

    const percent= (score/totalScore) * 100 
    let Grade =''

    if(percent >= 90){
         Grade = 'A'
        }
    else if(percent >= 80){
         Grade = 'B'
        }
    else if(percent >= 70){
         Grade = 'C'
        }
    else if(percent >= 60){
         Grade = 'D'
        }
    else {
        Grade = 'F'
    }
    return `You got a ${Grade}(${percent}%)!`
}

const score = setGrade(15,20)
console.log(score)