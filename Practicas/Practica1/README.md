# Practica 1 - Introducción al protocolo HTTP.Tarea

## Pagina 1: [Gobierno de Canarias](http://www.gobiernodecanarias.org/istac/api/ )

### ¿ Qué peticiones desencadena la consulta ?

7 consultas, 3 HTML, 1 css, 2 imagenes y  1 documento

¿Qué tipo de petición estás realizando?
Todas son peticiones del tipo GET.


### ¿ Qué código de estatus devuelve ?

3 peticiones devuelven el código 302: es del tipo Redirección, mensaje FOUND
1 peticiones con el código 304:  es del tipo Redirección, Not Modified
3 petición con el cogido 200: es del tipo Exito, Accepted

### ¿Qué DNS tiene el servidor?

www.gobiernodecanarias.org

### ¿Qué IP tiene tiene el servidor?

93.188.137.123

### ¿La página tiene alguna cookie?, ¿Cuáles?.

Si, 1 sola, www.gobiernodecanarias.org

### ¿Qué idioma acepta?

es-419; es

### Alguna línea de código JavaScript

``` javascript
if (!location.href.includes('operabrowserjs=no')) {
  (function(document) {
    const {href, pathname, hostname} = location;
    const setTimeout = window.setTimeout;
    const call = Function.prototype.call;
    const copyMethod = (method, ...defaultArgs) => {
      method.call = call;
      return (...args) => {
        if (defaultArgs.length) {
          args = defaultArgs.concat(args);
        }
        return method.call(...args);
      };
    };   
```
## Alguna línea de código CSS que se aplique

```css
.gap a,.gap a:hover,.gap a:link,.gap a:visited
{text-decoration:none!important;color:#afafaf} 
img.redes
{width:14px;height:14px}'

```
.
.

## Alguna línea de código HTML que se aplique.

```html
<h2><a href="http://www.gobiernodecanarias.org/istac/api/indicators/v1.0/#" alt="API de indicadores">API de indicadores v1.0</a></h2>
```


## Pagina 2: [Gobierno de Canarias](http://www3.gobiernodecanarias.org/sanidad/scs/gc/18/Cita_Previa/index.html)



### ¿ Qué peticiones desencadena la consulta ?

La petición desencadena 8 consultas


### ¿Qué tipo de petición estás realizando?
Todas son peticiones del tipo GET.


### ¿ Qué código de estatus devuelve ?
6 peticiones 202: Accepted
2 peticiones 404: Not Found


### ¿Qué DNS tiene el servidor ?
www3.gobiernodecanarias.org


### ¿Qué IP tiene tiene el servidor?

93.188.137.126


### ¿La página tiene alguna cookie?, ¿Cuáles?.
No tiene ninguna cookie


### ¿Qué idioma acepta?
en-US,en;q=0.5



### Alguna línea de código JavaScript

```JavaScript
Hay tres peticiones aceptadas en JavaScript

 Modal.prototype = {

  	constructor: Modal

	, toggle: function () {
    	return this[!this.isShown ? 'show' : 'hide']()
  	}

	, show: function () {
    	var that = this
      	, e = $.Event('show')

    	this.$element.trigger(e)

    	if (this.isShown || e.isDefaultPrevented()) return

    	$('body').addClass('modal-open')

    	this.isShown = true

    	this.escape()

    	this.backdrop(function () {
      	var transition = $.support.transition && that.$element.hasClass('fade')

      	if (!that.$element.parent().length) {
        	that.$element.appendTo(document.body) //don't move modals dom position
      	}

      	that.$element
        	.show()

      	if (transition) {
        	that.$element[0].offsetWidth // force reflow
      	}

```

### Alguna línea de código CSS que se aplique

Hay dos peticiones aceptadas en CSS

```css
.header {
	padding-bottom: 20px;
	border-bottom: 1px solid #e5e5e5;
	margin-bottom: 20px;
}
```

### Alguna línea de código HTML que se aplique.

Hay 1 peticiones aceptadas en HTML, y dos que no se aplica.

```html

<div class="col-lg-4 pull-right" id="bloque-info-pie" style="text-align: right">
    <a href="http://www.gobiernodecanarias.org/es/avisolegal.html">Aviso legal</a>
    | <a href="https://www.gobiernodecanarias.org/sugrec/">Sugerencias y reclamaciones</a>
</div>
```


















































