

//how many squares in big square 
//how many squares in small square
//there wil always be 9 squares so second number must be square
//this partition is the same for both x and y axis. we  do not need to create a function to form a matrix.
function createPartition(small, big){
    //need to check small< big 
    // need to check small is factor of big
    //need to make this method of object
    //big number have to be square of small number 
    x=0;
    partition=[];
    while(x<big){
        partition.push(x);
        x=x+small; 
    }
    
    return partition;
};

// console.log(createPartition(2,4));


// createPartition(2,4);
// createPartition(3,9);
//createParition(5,10)


function whichPartition(x, partition ){
    // console.log(partition);
    var map1 = partition.map(elm => elm <= x);
    // console.log("map="+map1);
    var pos= map1.filter(Boolean).length-1;
    // console.log("pos="+ pos);
    return pos;
};

// 0 should mean 0th square
// if 4 squares but indexed 0,1,2,3
// whichPartition(1,[0,2]);


function createBigSquare(small,big){
    //check small<big
    //check small is a factor of big
    
    //create squarepartition
    //create arrayrow
    //create colrow 
    //create squarerow
    
    this.big = big;
    this.small = small;
    this.dim = [big,big];
    this.partition= createPartition(small,big);
    this.matrix= createMatrix(this.big);
    
    //createPartition
    
    //createMatrix
    
    //print object
    this.print = function(){
        for (i in this){
            console.log(i);
            for (key in this[i]){
                console.log( key + ": " + this[i][key]);
            }
        }
        
    }
    
    
    
};

function createMatrix(big){
    var matrix = [];
    for(var i=0; i<big; i++) {
        matrix[i] = new Array(big);
        matrix[i].fill(0,0,big); //fill with 0s
    };
    return matrix;
};
// var M=createMatrix(2**2);
// console.log(M);

//make sequence of numbers from 1 to n 
//can optimise by specifying size of array
function seq(n){
    var array=[];
    for(var i=1; i<=n;i++){
        array.push(i);
    }
    return array
}


//generate random number between 1 and n
function getRandomNum(n) {
    var out = Math.floor(Math.random() * Math.floor(n));
    console.log("this is the rand= ", out);
    return out;
};
// for (var i=0; i<10; i++) {
//     console.log(getRandomNum(10));
// }



// console.log(getRandomNum(10));

//check whether another number in line
function check(number, line ){
    console.log("this is the line= "+ line)
    console.log("this is the number= "+ number );
    if(line.includes(number)){
        return true;
    }else{
        return false
    }
    
};
//console.log(check(4,[1,2,3]))

//check whether number is in row i of matrix
function checkRow(number,i,matrix){
    
    return check(number, matrix[i]);
};
// var M=[[2,10,3], [6,5,3], [9,0,4]]; 
// checkRow(10, 1 , M);

//check whether number is in col j of matrix
function checkCol(number,j,matrix){
    var matrixt=matrix.map((col, i) => matrix.map(col => col[i]));
    return check(number, matrixt[j]);
};
//var M=[[2,10,3], [6,5,3], [9,0,4]]; 
// checkCol(10, 1 , M);



//based on coordinates, which square referring to
// x and y are same values of partition (statring from 0)
//2d version of whichPartititon
function whichSquare(x,y,partition){
    
    array=[whichPartition(x,partition),whichPartition(y,partition)]; //0th coordinate
    
    return array
    //1,2,3,4
};


//fill numbers in a row
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
    return M;
    
};




//check if there is one more element
//basically check if there is one less element
// make it the last element
function checkLastFill(line){
    var big= line.length; //can be small too
    var last=big-1;
    var totNonEmpty= whichNonEmpty(line).filter(Boolean).length; //check for non zero values
    if(totNonEmpty==last){
        return true;
    }else{
        return false;
    }
};
// console.log(checkLastFill([1,2,3]));


function whichLastFill(line){
    var big= line.length; //can be small too
    if(checkLastFill(line)){
        var whichElm = whichNonEmpty(line).indexOf(false);
        return whichElm;
    }
    
};


//check for non zero  elements
function whichNonEmpty(line){
    
    var map1 = line.map(elm => elm > 0);
    return map1;
};
// var M=createMatrix(2**2);
// M[1][1]=3;
// console.log(M[1]); 
// console.log(whichNonEmpty(M[1]));

function whichNonEmptyMat(matrix){
    var big= matrix.length;
    var whichArray= matrix;
    for(var i=0;i<big;i++){
        whichArray[i]=whichNonEmpty(matrix[i]); 
    };
    return whichArray
}

// var M=createMatrix(2**2);
// console.log(M);
// M[1]=[3,4,0,1];
// console.log(M);
// console.log(whichNonEmptyMat(M));


//given a column check the last fill 
function checkLastFillMatrix(i,j,matrix){
    var elm = matrix[i][j];
    var matrixt=matrix.map((col, i) => matrix.map(col => col[i]));//transpose
    if( ( checkLastFill(matrix[i]) || checkLastFill(matrixt[j])) && (elm==0)   ){
        return true;
    }else{
        return false; 
    }
};
// var M=createMatrix(2**2);
// M[0]=[3,1,2,1]
// M[1]=[3,4,0,1];
// M[2]=[1,2,3,4]
// M[3]=[0,0,1,0]
// console.log(checkLastFillMatrix(1,2,M));
// console.log(checkLastFillMatrix(3,0,M));
// console.log(checkLastFillMatrix(3,1,M));
// console.log(checkLastFillMatrix(3,2,M));

function whichLastFillMatrix(matrix){
    var big=matrix.length;
    var whichArray=createMatrix(big); //or matrix.slice() DO NOT refer by reference
    for (var i=0; i<(big); i++) {
        for (var j=0; j<(big); j++) {
            whichArray[i][j]=checkLastFillMatrix(i,j,matrix);
        }
    }
    return whichArray;
}
// var M=createMatrix(2**2);
// M[0]=[3,1,2,1]
// M[1]=[3,4,0,1];
// M[2]=[1,2,3,4]
// M[3]=[0,0,1,0]
// console.log(whichLastFillMatrix(M));
// console.log(checkLastFillMatrix(3,0,M))






// //Testing Code here.
// var M=createMatrix(2**2);

// for(var i=0; i< M.length; i++){
//     fillLine(i,M); // should not actually fill the final row
// };
// console.log("final output of M is here");
// console.log( M);

// // console.log(M);















