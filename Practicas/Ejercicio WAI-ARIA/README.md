# Ejercicio WAI-ARIA

## Integrantes

- Leonardo Dorta Bejarano
- Elvis Nogueiras Gonzalez
- Daniel Arbelo Hernandez

## Roles

 ### Roles de Widget

Hemos agregado Algunos Roles de Widget:

- Roles en los menús, así como sus items

![menurole](Screenshots/menurole.png)

- Roles en los botones
![buttonrole](Screenshots/buttonrole.png)


### Roles de Estructura

Roles en listas

![listrole](Screenshots/listrole.png)

### Roles de Referencia

Header
![headerrole](Screenshots/headerrole.png)

Contentinfo
![contentinfo](Screenshots/contentinforole.png)

## Estados y Propiedades

### tabindex

tabindex = "1" para actualizar lo elementos que no recibían el foco

En nuestro caso, uno de estos elementos es el boton de Registrar en el formulario, que al estas sobre el, no recibe el foco

![formularioNoFocus](gif\formularioNoFocus.gif)

![tabindex0](Screenshots\tabindex0.png)

Ahora, es posible seleccionar el botón

![formularioFocus](gif\formularioFocus.gif)

Por otro lado, tenemos contenido que no queremos que reciba el foco, en nuestro caso son los iconos

![iconfocus](gif\iconfocus.gif)

con tabindex = "-1" estos elementos ya no reciben el foco

![iconNNofocus](gif\iconNNofocus.gif)

#### Aria-required

Aria-required=”true” en los campos del formulario que son obligatorios, los cuales son
(*)Nombre: 
(*)Apellido:
(*)Género:
(*)Ciudad:
(*)Correo electrónico:
(*)Contraseña:
(*)repetir  la contraseña:

![ariarequiredtrue](Screenshots\ariarequiredtrue.png)


#### Aria label

Gracias a esto se con el uso del chromevox, ahora se escucha el nombre del formulario

![arialabel](Screenshots\arialabel.png)
