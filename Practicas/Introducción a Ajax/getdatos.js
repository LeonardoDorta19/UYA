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