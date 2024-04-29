alert("hi brahim");
function pow(x, n) {
    let result = 1;
 
    for(i = 1 ; i <= n ; i++) {
     result *= x ;
    }
 
    return result;
 }
 
 
 describe("pow", function() {
     describe("raises x to power 3", function() {
         
         function makeTest(x){
             
             let expected = x*x*x ;
             it(`${x} in power 3 is ${expected}`, function() {
                 assert.equal(pow(x, 3), expected);
             });
         }
         
         for(let x = 1; x <= 5 ; x++) {
             makeTest(x);
         }
     })
 
     describe("prime or not" , function() {
         function isPrime(z) {
             
             for(let i = 2 ; i < z ; i++) {
                 if(z % i === 0) return false;
             }
             return true;
         } 
         it(`${z} is prime or not`, function() {
             assert.equal(isPrime(z)),true;
         })
         for(let z = 1 ; z <= 20 ; z++) {
             isPrime(z)
         }
     })
 });
