/**
*  Fills row i with numbers 
* 
* @param {number} i some number
* @param {array**2} matrix 
* @returns {array**2} matrix
*/
//good code but need some obj logic
//this one assumes that you are just filling numbers
function fillLine(i,matrix){
    
    var big= matrix.length; 
    
    //check if it is empty
    var array=seq(big); //create numbers
    
    var len= array.length;
    // console.log(array);
    // console.log(matrix)
    
    for (var j=0; j<(len-1); j++) {
        var lenx=len-j; //reducing array size
        
        console.log("j= "+j);
        console.log("this is lenx= ", lenx)
        
        //random stuff
        var ind =getRandomNum(lenx);
        var elm= array[ind];
        
        // console.log("below is the array",array);
        // console.log("selected element is ", elm);
        
        var tot=0;
        while(checkRow(elm,i,matrix) || checkCol(elm,j,matrix) ){
            
            var ind = getRandomNum(lenx);
            var elm= array[ind];
            console.log("this is ind "+ ind + " this is elm " +elm)
            
            if(tot>100){
                console.log("Running for too long");
                return 
            }
            
            tot++;
        };
        
        matrix[i][j] = elm;
        
        array.splice(ind,1); //removing element at particular index
        
        // console.log("loop number "+ j+" random index is "+ind);
        // console.log(array);
    };
    
    // 3,4,1,2
    // 2,1,4,3
    // 1,2,3,4
    // 4,3,2,1
    
    matrix[i][big-1]=array[0];
    // console.log(array);
    //can i just use the leftover without checking
    return matrix;
    
}
// console.log(createMatrix(2))
// console.log(fillLine(0,createMatrix(4)))