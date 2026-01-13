//--> IIFE STANDS FOR "IMMEDIATELY INVOKED FUNCTION EXPRESSION".
//----NORMAL FUNCTIOON-----------
(function addnumbers(num1, num2) {
  //--> if we given name of function(addnumbers),it is called as named IIFE.
  console.log(num1 + num2);
})(8, 9); //--> semicolon (;) is used to stop IIFE.

//--------IMMEDIATELY INVOKED FUNCTION EXPRESSION--------------
/*-----NOTE: 1.IIFE Runs only once,
2. IIFE Runs immediately.
3. IIFE No need to call it.
*********** Globalscope variables are accessible everywhere, which can cause conflicts,so IIFE creates its own private space (scope).which 
means anything inside it does NOT leak into the global scope.********************************* */

((num3, num4) => {
  console.log(num3 + num4);
})(8, 8); //--> IIFE using arrow function.
//--> if we haven't given name of function(),it is called as un-named IIFE.

  