
function seq(n){
    var array=[];
    for(var i=1; i<=n;i++){
        array.push(i);
    }
    return array
}

function create2dArray(m,n){
    
    var array=[];
    
    for (var i=0; i<m; i++) {
        array.push(seq(n))
    }
    return array 
}

var x= create2dArray(4,4);
x[1].splice(2,1); 


var x=[[1,2],[2,3]];
console.log(x);
x[0].splice(0,1); 
console.log(x)
