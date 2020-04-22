
function registrar() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var generoh = document.getElementById('generoh');
    var generom = document.getElementById('generom');
    var genero;
    var ciudad = document.getElementById('ciudad').value;
    var correo = document.getElementById('correo').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('repassword').value;
    var intereses = document.getElementsByName('interes');
    var interes = [];
    var interes_adicional = document.getElementById('interesad').value;

    console.log(nombre);
    console.log(apellido);

    if (generoh.checked) {
        genero = "hombre";
    }
    if (generom.checked) {
        genero = "mujer";
    }

    console.log(genero);
    console.log(ciudad);

    console.log(correo);
    console.log(password);
    console.log(repassword);

    for (var i = 0; i < intereses.length; i++) {
        if (intereses[i].checked) {
            interes.push(intereses[i].value);
            console.log(intereses[i].value);
        }
    }

    console.log(interes_adicional);


    firebase.auth().createUserWithEmailAndPassword(correo, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });



    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            firebase.database().ref(user.uid).once('value', function (snapshot) {
                var exists = (snapshot.val() !== null);
                if (!exists) {
                    firebase.database().ref(user.uid).set({
                        Nombre: nombre,
                        Apellido: apellido,
                        Genero: genero,
                        Ciudad: ciudad,
                        Intereses: interes,
                        Adicional: interes_adicional
                    });
                    console.log(user.uid);
                    location.reload();
                }

            });
        } else {

            // User not logged in or has just logged out.
        }
    });

}