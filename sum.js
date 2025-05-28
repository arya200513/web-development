var n,rem,sum=0;
n=parseInt(prompt("ENTER A NUMBER"));
while(n){
    rem=n%10;
    sum=sum+rem;
    n=Math.floor(n/10);
}
console.log(sum);