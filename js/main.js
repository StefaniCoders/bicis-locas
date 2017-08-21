function validateForm(){

	// SELECCION DE CADA UNO DE LOS ELEMENTOS A VALIDAR
    var last_name = document.getElementById("lastname").value; //obtenemos la referencia a un elementoy devuelve el valor de cada elemento
    var email = document.getElementById("input-email").value;
    var password = document.getElementById("input-password").value;
    var name = document.getElementById("name").value;
    var noOption = document.querySelector("select").value;

    // VALIDACION DEL NOMBRE
    if(name == null || name.length == 0 || /^\s+$/.test(name)){
        var span = document.createElement("span");
        var referencia= document.getElementById("name");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Debe ingresar su name");
        span.appendChild(texto);
        return span;
    }   else {
       var m = /^[a-zA-Z]*$/;
       if(!name.search(m)) {
            m = /[a-z]/g;
        }    
        if(!name.search(m)){
            var span = document.createElement("span")
            var referencia= document.getElementById("name");
            var padre=referencia.parentNode;
            padre.insertBefore(span,referencia);
            var texto = document.createTextNode("La primera letra debe empezar con maýuscula");
            span.appendChild(texto);
            return span;
        }
    }


    // VALIDACION DEL APELLIDO
    if(last_name == null || last_name.length == 0 || /^\s+$/.test(last_name)) {
        var span = document.createElement("span");
        var referencia= document.getElementById("lastname");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Debe ingresar su last_name");
        span.appendChild(texto);
        return span;
    } else {
       var n = /^[a-zA-Z]*$/;
       if(!last_name.search(n)) {
            n = /[a-z]/g;
        }    
        if(!last_name.search(n)){
            var span = document.createElement("span");
            var referencia= document.getElementById("lastname");
            var padre=referencia.parentNode;
            padre.insertBefore(span,referencia);
            var texto = document.createTextNode("La primera letra debe empezar con maýuscula");
            span.appendChild(texto);
            return span;
        }
    }

    // VALIDACION DEL EMAIL
    if(!(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email))) {
        var span = document.createElement("span");
        var referencia= document.getElementById("input-email");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Por favor llene un correo válido");
        span.appendChild(texto);
        return span;
    } else if( password == null || password.length <= 6 || password == "password" || password == 123456 || password == 098754 || /^\s+$/.test(password) ) {
        var span = document.createElement("span");
        var referencia= document.getElementById("input-password");
        var padre=referencia.parentNode;
        padre.insertBefore(span,referencia);
        var texto = document.createTextNode("Ingresa una contraseña válida");
        span.appendChild(texto);
        return span;
    } 
    
    //VALIDACION DE LA ELECCION DE BICICLETA
    if((noOption == 0)){
            var span = document.createElement("span");
            var referencia = document.querySelector("select");
            var padre=referencia.parentNode;
            padre.insertBefore(span,referencia);
            var texto = document.createTextNode("Elige un tipo de bicicleta.");
            span.appendChild(texto);
            return span;
        }
    
}