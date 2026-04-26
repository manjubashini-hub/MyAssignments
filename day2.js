function isOddOrEven(n){
  
   console.log("The value of n is :" +n);
    
    if(n%2===0){
        console.log("The number is even");
    }else{
        console.log("The number is odd");
    }

    for(let i=1;i<=n;i++){
    if(i%2===0){
      console.log("Value of i is :" +i+ " which is even");
    }else{
      console.log("Value of i is :" +i+ " which is odd");
    }
}
}

isOddOrEven(20);


