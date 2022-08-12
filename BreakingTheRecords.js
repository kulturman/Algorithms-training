//Solution to: https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {   
    let bestRecords = 0;
    let worstRecords = 0;
    
    if (scores.length === 1) {
        return [0, 0];
    }

    let heightestScore = scores[0];
    let lowestScore = scores[0];
    
    for(let i = 0; i < scores.length; i++) {
        
        if (scores[i] > heightestScore) {
            bestRecords++;
            heightestScore = scores[i];
        }
        
        if (scores[i] < lowestScore) {
            worstRecords++;
            lowestScore = scores[i];
        }
    }

    return [bestRecords, worstRecords];
}