console.log("Task 9");

let str='4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';

n=str.split(' ');
console.log(n);
let smallest=n[0],
    biggest=n[0];

for(i=0;i<n.length;i++){
    n[i]=+n[i];
}
console.log(n);

for(i=0;i<n.length;i++){    
    for(let j=0;j<n.length;j++){
        if(n[i]<n[j]){
            let small=n[i];
            let big = n[j];
            if(smallest >small) smallest=small;
            if(biggest<big) biggest=big;
        }
    }
}
console.log(smallest);
console.log(biggest);