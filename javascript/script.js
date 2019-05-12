
/**
* Creates Sudoku Object 
* @constructor
* 
* @param {number} small number of squres in small square 
* @param {number} big number of squares in big square
* @returns {object}
*/

function createSudoku(small,big){
    //check small<big
    //check small is a factor of big
    
    //create squarepartition
    //create arrayrow
    //create colrow 
    //create squarerow
    
    this.big = big;
    this.small = small;
    this.dim = [big,big];
    
    //creates partition for squares
    this.partitionx= createPartition(this.small,this.big);
    this.partitiony= createPartition(this.small,this.big);
    
    //creates matrix
    this.matrix= createMatrix(this.big);
    
    //arrays for filling matrix
    this.arrayrow = create2dArray(this.big, this.big);
    // this.arraysquare = create3dArray(this.small,this.small,this.big);
    this.arraysquare = create3dArray(this.partitionx.length,this.partitiony.length,this.big);

    //#### Methods ####
    
    //print object
    this.print = function(){
        for (i in this){
            console.log(i);
            for (key in this[i]){
                console.log( key + ": " + this[i][key]);
            }
        }
        
    }
    
    //prints matrix
    this.printMatrix= function(){
        
        for (var i=0; i<this.matrix.length; i++) {
            for (var j=0; j<this.matrix[0].length; j++) {
                console.log(this.matrix[i][j]+ " ")
            }
        }
        
    }
    
    this.printPartition= function(){
        console.log(this.partition)
    }
    
    
};


/**
* Creates a partition
* 
* @param {number} small number of squres in small square
* @param {number} big number of squares in big square
* @returns {array} 
*/

function createPartition(small, big){
    //need to check small< big 
    // need to check small is factor of big
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


/**
* Finds which partition an index is from
* 
* @param {number} i index position 
* @param {number} big number of squares in big square
* @returns {number} index of partition
*/

function whichPartition(i, partition ){
    
    var map1 = partition.map(elm => elm <= i);
    
    var pos= map1.filter(Boolean).length-1;
    
    return pos;
};
//console.log(whichPartition(3,[0,2]))

// 0 should mean 0th square
// if 4 squares but indexed 0,1,2,3
// whichPartition(1,[0,2]);




/**
* Creates empty matrix of size n by n (of zeroes)
* 
* @param {number} big number of squares in big square
* @returns {array**2} 2d array 
*/

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


/**
* Creates an m by n array with each row having 1:n
* 
* @param {number} m number of rows
* @param {number} n number of cols
* @returns {array**2} 2d array 
*/
// each row represents the set of elements in each square
function create2dArray(m,n){
    
    var array=[];
    
    for (var i=0; i<m; i++) {
        array.push( seq(n))
    }
    return array 
}
// console.log(create2dArray(9,9))

/**
* Creates an m by n by k array with final dimension having 1:k
* 
* @param {number} m number in dimension 1 (small)
* @param {number} n number in dimension 2 (small)
* @param {number} k number in dimension 3 (big)
* @returns {array**2} 2d array 
*/
// each row represents the set of elements in each square
//please check the reference
function create3dArray(m,n,k){
    
    var array=[];
    
    for (var i=0; i<m; i++) {
        var array2=[];
        array.push(array2);
        for (var j=0; j<n; j++){
            array2.push(seq(k));
        }
        
    }
    return array 
}
// console.log(create3dArray(2,2,4))
// console.log(create3dArray(3,3,9))

/**
* Creates an array of 1:n 
* 
* @param {number} n some number
* @returns {array} Array of numbers 
*/
function seq(n){
    var array=[];
    for(var i=1; i<=n;i++){
        array.push(i);
    }
    return array
}
// console.log(seq(10))


/**
* Generate single random number from collection 1:n
* 
* @param {number} n some number
* @returns {array} Array of random numbers
*/
function getRandomNum(n) {
    var out = Math.floor(Math.random() * Math.floor(n));
    // console.log("this is the rand= ", out);
    return out;
};
// for (var i=0; i<10; i++) {
//     console.log(getRandomNum(10));
// }


/**
* Check wheather a number is in a row 
* 
* @param {number} number some number
* @param {array} line row of numbers
* @returns {boolean} true or false
*/
function check(number, line ){
    // console.log("this is the line= "+ line)
    // console.log("this is the number= "+ number );
    if(line.includes(number)){
        return true;
    }else{
        return false
    }
    
};
// console.log(check(4,[1,2,3]))
// console.log(check(2,[1,2,3]))


/**
* Check wheather a number is in i-th row of matrix
* 
* @param {number} number some number
* @param {number} i index of row
* @param {array**2} matrix 
* @returns {boolean} true or false
*/
function checkRow(number,i,matrix){
    return check(number, matrix[i]);
};
// var M=[[2,10,3], [6,5,3], [9,0,4]]; 
// console.log(checkRow(10, 1 , M));
// console.log(checkRow(6, 1 , M));


/**
* Check whether a number is in j-th column of matrix
* 
* @param {number} number some number
* @param {number} j index of column
* @param {array**2} matrix 
* @returns {boolean} true or false
*/
function checkCol(number,j,matrix){
    var matrixt=matrix.map((col, i) => matrix.map(col => col[i]));
    return check(number, matrixt[j]);
};
// var M=[[2,10,3], [6,5,3], [9,0,4]]; 
// console.log(checkCol(10, 0 , M));
// console.log(checkCol(5, 1 , M));

/**
*  Finds which square a position belongs to
* 
* @param {number} i row index of number
* @param {number} j column index of number
* @param {array} partitionx  x partition
* @param {array} partitiony  y partition (partitions give coordinate of square)
* @returns {array} Coordinate of square 
*/
function whichSquare(i,j,partitionx,partitiony){
    return [whichPartition(i,partitionx),whichPartition(j,partitiony)]
};

/**
* Check whether a number in a square is still available to use or not in the ith square
* 
* @param {number} number some number
* @param {array}  square  square [x,y]
* @param {object} obj sudoku object
* @returns {boolean} true or false
*/
// this is slightly cheating because it is looking at whether a number has been used in a square
//looking at arraysquare
//maybe instead of obj use arraysquare
function checkSquare(number ,square, obj){
    
    if(check(number, obj.arraysquare[square[0]][square[1]])){
        return true
    }else{
        return false
    }
}
// var sudoku = {
//     small:2,
//     big:4
// }
// sudoku.partitionx=createPartition(sudoku.small,sudoku.big)
// sudoku.partitiony=createPartition(sudoku.small,sudoku.big)
// sudoku.arraysquare = create3dArray(sudoku.small,sudoku.small,sudoku.big)
// sudoku.arraysquare[0][0][1]=0; // square 0
// sudoku.arraysquare[1][0][2]=0; // square 1
// console.log(sudoku);
// // console.log(checkSquare(1,[0,1],sudoku))



/**
* Fill ith line of matrix with random numbers
* 
* @param {number} i
* @param {object} obj sudoku object
* @returns {object} sudoku object
*/
//start by filling a line
function fillLine(i,obj){
    
    //these all variables by reference
    var big=obj.big;
    var small=obj.small;
    var partitionx=obj.partitionx;
    var partitiony=obj.partitiony;
    var matrix= obj.matrix;
    var arrayrow=obj.arrayrow;
    var arraysquare=obj.arraysquare;
    
    //new variables created
    var array= arrayrow[i];
    var len=array.length;
    console.log(arraysquare);
    
   

    for (var j=0; j<big; j++) {
        
        var ind= getRandomNum(array.length);
        var elm= array[ind];
        
        var square= whichSquare(i,j,partitionx,partitiony);
        
        // checkSquare
        // checkLastFill
        // checkLastFillMatrix

       
        
        var tot=0;
        while(checkRow(elm,i,matrix)||checkCol(elm,j,matrix)){ // ||checkSquare(elm,square,arraysquare)
            
            var ind= getRandomNum(array.length);
            var elm= array[ind];
            if(tot>200){
                console.log("Running for too long");
                return 
            }
            tot++;
        }
        
        matrix[i][j]=elm;
        
        array.splice(ind,1)
        arraysquare[square[0]][square[1]].splice(arraysquare[square[0]][square[1]].indexOf(elm),1)
        
        
    };
    
}

var sudoku = {
    small:2,
    big:4
};
sudoku.partitionx=createPartition(sudoku.small,sudoku.big)
sudoku.partitiony=createPartition(sudoku.small,sudoku.big)
sudoku.arraysquare = create3dArray(sudoku.partitionx.length,sudoku.partitiony.length,sudoku.big);
sudoku.arrayrow= create2dArray(sudoku.big,sudoku.big)
sudoku.matrix=createMatrix(sudoku.big);

console.log(sudoku)
fillLine(0,sudoku)
console.log(sudoku)
sudoku.printMatrix;


/**
* Fill matrix with random numbers
* 
* @param {number} number some number
* @param {array}  square  square [x,y]
* @param {object} obj sudoku object
* @returns {boolean} true or false
*/
function fillMatrix(obj){
    
    for (var i=0; i<obj.big; i++) {
        fillLine(i,obj)
    };
    return obj;
    
}
// var sudoku = {
//     small:2,
//     big:4
// }
// sudoku.partitionx=createPartition(sudoku.small,sudoku.big)
// sudoku.partitiony=createPartition(sudoku.small,sudoku.big)
// sudoku.arraysquare = create3dArray(sudoku.small,sudoku.small,sudoku.big)
// sudoku.arrayrow= create2dArray(sudoku.big,sudoku.big)
// sudoku.matrix=createMatrix(sudoku.big);
// fillMatrix(sudoku);
// console.log(sudoku)
// sudoku.printMatrix; // do not know why this is as a property.


// 3, 2, 4, 1 
// 2, 4, 3, 1
// 4, 1, 2, 3 
// 1, 4, 2, 3


/**
* Check whether there is one last 0 in line
* 
* @param {array} line arrays of numbers 
* @returns {boolean} true or false
*/
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
// console.log(checkLastFill([1,2,0,0]));
// console.log(checkLastFill([1,2,2,0]));


/**
* Check position of last fill (assumes checkLastFill = true)
* 
* @param {array} line arrays of numbers 
* @returns {boolean} true or false
*/
function whichLastFill(line){
    var big= line.length; 
    var whichElm = whichNonEmpty(line).indexOf(false);
    return whichElm;
};
// console.log(whichLastFill([1,2,0,4]))

/**
* Check the non empty elements (true is non-empty)
* 
* @param {array} line arrays of numbers 
* @returns {array} array of true or false
*/
function whichNonEmpty(line){
    
    var map1 = line.map(elm => elm > 0);
    return map1;
};
// var M=createMatrix(2**2);
// M[1][1]=3;
// console.log(M[1]); 
// console.log(whichNonEmpty(M[1]));





















//###################################stopped commenting here


//readMatrix with already filled values
//and remove values according to arraysquare and arrayline 
function readMatrix(matrix){
    return true
}

/**
* Filling empty matrix with numbers - deprecated does not have sudoku logic
* 
* @param {array**2} matrix 
* @returns {array**2} matrix
*/
function fillMatrix2(matrix){
    
    var big=matrix.length;
    for (var i=0; i<big; i++) {
        fillLine(i,matrix);
    }
    return matrix 
    
}
// console.log(fillMatrix(createMatrix(2**2)))



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
















