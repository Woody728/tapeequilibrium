/* The goal is to split a given array into two pieces such that the absolute value of the difference between the sum of the elements of each piece is minimised. */

//First attempt:

function solution(A) {
    n= A.length;
    let diffarr = [];
    for(i=1;i<n;i++){
        //be careful with slice. slice(2,4), for e.g., produces an array including elements with index 2 and 3. 
        part1 = A.slice(0,i);
        part2 = A.slice(i, n);
        part1sum = part1.reduce((acc, curval)=>acc+curval);
        part2sum = part2.reduce((acc, curval)=>acc+curval);
        newval = Math.abs(part1sum-part2sum);
        diffarr.push(newval);
    }

    const minval = Math.min(...diffarr);
    return minval;
}

console.log(solution([3,1,2,4,3]));

/*Second attempt. We begin by splitting the array into an empt array and the entire array and take elements into the empty array one by one, choosing this new split if the difference decreases. */

function solution(A){
    let leftsum = 0;
    let rightsum = A.reduce((acc, curval)=>acc+curval);
    let diff = null;
    for(i=0; i<A.length-1;i++){
        leftsum += A[i];
        rightsum -= A[i];
        if(i===0 || Math.abs(leftsum - rightsum)<diff){
            diff = Math.abs(leftsum - rightsum);
        }
    }
    return diff;
}

console.log(solution([3,1,2,4,3]));
