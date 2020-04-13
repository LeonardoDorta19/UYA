# Introducción a AJAX

## Javascript

```javascript

var datos;

$(document).ready(function () {
    $("select").change(function () { 
        $(this).find("option:selected").each(function () { 
            var optionvalue = $(this).attr("value");
            $("p").html("Nombre: " + datos[optionvalue].name + " - Email: " + datos[optionvalue].email + " - Body: " + datos[optionvalue].body);   
        });
    });
});

$(function () {
    $("#getdatabtn").click(function () { 
       $.ajax({
           type: "GET",
           url: "https://jsonplaceholder.typicode.com/comments?postId=1",
           dataType: "JSON",
           success: function (data) {
           datos = data;
            for(var i = 0; i < data.length; i++) {
               $("#idnombre").append(new Option(data[i].id, i));
            }   
           }
       });
    });
});

```
## HTML

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<h1>Practica de AJAX</h1>
<h6>Extraer datos de un servidor usando jquery para manejar DOM Y AJAX</h6>
<button id="getdatabtn">Recoger datos</button>

<div class="form-group">
    <label for="sel1">ID del nombre a mostrar :</label>
    <select class="form-control" id="idnombre">
    <option>Seleciona ID</option>
    </select>
  </div>

  <p></p>

<script src="getdatos.js"></script>
</body>
</html>
```
