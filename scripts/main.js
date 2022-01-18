
 function botaocriptografia (){
   //essa var recebe o que foi escrito dentro da label  
  var capturaInput = document.getElementById("armazenainput").value;
   criptografa = capturaInput;

   var armazenaCriptografia = criptografa ;
   var mapObj ={
      e:"enter",
      i:"imes",
      a:"ai",
      o:"ober",
      u:"ufat"
   };
  
   armazenaCriptografia = armazenaCriptografia.replace(/e|i|a|o|u/gi, function(matched){
      return mapObj[matched]
   });

   alert(armazenaCriptografia);
 }  

 function botaodescriptografia (){
   var capturaInput = document.getElementById("armazenainput").value;
      descriptografa = capturaInput;

      var armazenaDescriptografia = descriptografa ;
   var mapObj ={
      enter:"e",
      imes:"i",
      ai:"a",
      ober:"o",
      ufat:"u"
   };
  
   armazenaDescriptografia = armazenaDescriptografia.replace(/enter|imes|ai|ober|ufat/gi, function(matched){
      return mapObj[matched]
   });

   alert(armazenaDescriptografia);


 }


