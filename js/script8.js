console.log("Task 8");

amountNum=0;
sumNum=0;
num=true;
while(num){
    num=prompt('введите число');
    if(num!='' || num != '0'){
        num=+num;
        if(typeof +num == 'number'){
        amountNum+=1; 
        sumNum+=+num; 
        }else{
        alert('ошибка ввода');
    }
    }   
}
console.log('Общая сумма ' +sumNum);
console.log('Среднее арифметическое ' + sumNum/(amountNum-1));