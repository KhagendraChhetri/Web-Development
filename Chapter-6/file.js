function myClickFunctionH1() {       
    var element = document.getElementById('pageheading');       
    element.firstChild.nodeValue = 'After Heading';
}

function myClickFunctionP1() {
  var element = document.getElementById('paragraph');    
  element.firstChild.nodeValue = 'The text has gone!!';
}


function myLoadFunction() 
{ 
    var elementH1 = document.getElementById('pageheading'); 
    elementH1.addEventListener('click', myClickFunctionH1);

    var elementP1 = document.getElementById('paragraph');  
    elementP1.addEventListener('click', myClickFunctionP1);
} 
    
document.addEventListener('DOMContentLoaded', myLoadFunction);
       