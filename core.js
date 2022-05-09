si = document.getElementById("radioSI");
no = document.getElementById("radioNO");
valores = document.getElementById("puntos");

si.onchange = function() {
    valores.style.display = "block";
    
}

no.onchange = function() {
    valores.style.display = "none";
}

nombre = document.getElementById("nombre");
apellido = document.getElementById("apellido");

nombre.onblur = function(){
    var nombreM = nombre.value;
    nombreM = nombreM.toUpperCase();
    alert(nombreM);
}

apellido.onblur = function(){
    var apellidoM = apellido.value;
    apellidoM = apellidoM.toUpperCase();
    alert(apellidoM);
}

email = document.getElementById("correo");
boton = document.getElementById("boton");
msg = document.getElementById("mensaje");

email.onchange = function(){
    if(email.value != null && email.value != "" && email.value.indexOf('@') != '-1'){
        boton.style.display = "block";
        msg.innerText = "";

    }else{
        msg.innerText = "Ingrese un correo valido.";
    }
}





