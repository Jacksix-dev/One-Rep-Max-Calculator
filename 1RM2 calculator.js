const sheet = new CSSStyleSheet();
sheet.replaceSync('.result__container{border: 2px solid #870000;border-radius: 30px;margin-top: 10px;;display: flex;text-align: center;}.result__animate--animated {font-size:30px ; display:flex;text-align: center;margin-left:90px;} ')
  
    

    


var b = document.getElementById("calcular");
b.addEventListener("click",maxrep)

var pesos = document.getElementById("peso").value
var repeticiones = document.getElementById("repes").value

function maxrep (){
    var pesos =  document.getElementById("peso").value
var repeticiones = document.getElementById("repes").value
if (repeticiones <= 8)
{ 
    
    var maxrep = (pesos * (36 / (37-repeticiones)))

  
    var resultado = maxrep.toFixed(1) +" Kg";

    
    

    document.adoptedStyleSheets = [sheet];
    document.getElementById("resultado").innerHTML = resultado;
    console.log (maxrep)
    }

    else{
        
        var maxrep = (pesos * (1 + repeticiones/30))

  
        var resultado = maxrep.toFixed(1) +" Kg";
    
        
    
        document.adoptedStyleSheets = [sheet];
        document.getElementById("resultado").innerHTML = resultado;
        console.log (maxrep)
    }
}
