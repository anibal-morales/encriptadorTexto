var areaEncriptar = document.getElementById('areaEncriptar');
var botonEncriptar = document.getElementById('botonEncriptar');
var botonDesencriptar = document.getElementById('botonDesencriptar');
var areaSalida = document.getElementById('areaSalida');
var botonCopiar = document.getElementById('botonCopiar');

function resetearArea(){
    areaEncriptar.value = "";
}

function quitaracentos(texto){
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function encriptar(){
    var textoUsuario = quitaracentos((areaEncriptar.value).toLowerCase());
    var cadenaEncriptada="";
    var temporal="";
    for(posicion=0;posicion<=textoUsuario.length-1;posicion++){
        if(textoUsuario.charAt(posicion)=="a"){
            temporal = "ai";
        }else if (textoUsuario.charAt(posicion)=="e") {
            temporal = "enter";    
        } else if(textoUsuario.charAt(posicion)=="i"){
            temporal = "imes";
        }else if(textoUsuario.charAt(posicion)=="o"){
            temporal = "ober";
        }else if(textoUsuario.charAt(posicion)=="u"){
            temporal = "ufat";
        }else{
            temporal = textoUsuario.charAt(posicion);
        }
        cadenaEncriptada = cadenaEncriptada + temporal;
    }

    areaSalida.value = cadenaEncriptada;

}


function desencriptar(){
    var textoUsuario = areaEncriptar.value;
    var temporal="";
    temporal = textoUsuario.replaceAll("ai", "a");
    temporal = temporal.replaceAll("enter", "e");
    temporal = temporal.replaceAll("imes", "i");
    temporal = temporal.replaceAll("ober", "o");
    temporal = temporal.replaceAll("ufat", "u");
    areaSalida.value = temporal;
}

function copiarTexto() {
    
    areaSalida.select();
    document.execCommand('copy');
}

areaEncriptar.addEventListener("focus", resetearArea);
botonEncriptar.addEventListener("click",encriptar);
botonDesencriptar.addEventListener("click",desencriptar);
botonCopiar.addEventListener("click",copiarTexto);