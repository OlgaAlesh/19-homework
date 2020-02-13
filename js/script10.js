console.log("Task 10");

n=prompt('произвольное число для задачи 10',123);
amountNum=0;
sumNum=0;
if(n==false){
    alert('введите число');
}else{
    for(i=0;i<n.length;i++){
        console.log(n[i]);
        amountNum+=1;
        sumNum+=+n[i];        
    }
}
console.log("-----------");
console.log(amountNum+' цифр(ы)');
console.log(sumNum+' сумма цифр');

let nNew=n[n.length-1];
let k;
for(i=n.length-2;i>=0;i--){
    nNew+=n[i];  
} 
console.log(nNew);
