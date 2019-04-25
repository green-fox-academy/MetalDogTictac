'use strict'

function spiral(row:number,col:number):number[][]{
 let arr:number[][]=[[]]
 for (let i:number=0;i<row;i++){
   arr[i]=[]
   for (let j:number=0;j<col;j++){
     arr[i][j]=0
   }
 }
 let e:number=1;
 let startRow:number=0;
 let endRow:number=row-1;
 let startCol:number=0;
 let endCol:number=col-1;
 do
 {
 for (let j:number=startCol;j<=endCol;j++){
   arr[startRow][j]=e
   e++
 }
 startRow++
 for (let i:number=startRow;i<=endRow;i++) {
   arr[i][endCol]=e
   e++
 }
 endCol--
 for (let j:number=endCol;j>=startCol;j--){
   arr[endRow][j]=e
   e++
 }
 endRow--
 for (let i:number=endRow;i>=startRow;i--){
   arr[i][startCol]=e
   e++
 }
 startCol++
 }
 while (e<=row*col)

 return arr
}

console.log(spiral(5,5));