'use strict'

function magicMatrix(matrix:number[][]):boolean{
 let row:number=matrix.length;
 let col:number=matrix[0].length;
 let sum1:number=0;
 let sum2:number=0;
 for (let j:number=0;j<col;j++){
   sum2+=matrix[0][j]
 }

 for (let i:number=0;i<row;i++){
   for (let j:number=0;j<col;j++){
     sum1+=matrix[i][j]
   }
   if (sum1!=sum2){
     return false
   }
   sum1=0
 }


 for (let i:number=0;i<row;i++){
   for (let j:number=0;j<col;j++){
     sum1+=matrix[j][i]
   }
   if (sum1!=sum2){
     return false
   }
   sum1=0
 }
 return true
}

const arr=[[4,5,6],[6,5,4],[5,5,5]]

console.log(magicMatrix(arr));