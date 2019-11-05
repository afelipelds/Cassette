## Bienvenido a Cassette!

Para poder contribuir tenga en cuenta la siguente:

### PRINCIPIOS

- Mantenerlo simple y reusar lo más posible.
- Un código que luzca como si una sola persona lo haya escrito
- Escribir para escalabilidad.


### GENERALES

- Usamos BEM como metodología de creación de código
- Nombre de archivos en plural (Ejemplo: _botones.scss)
- Clases en singular y minúsculas (Ejemplo: .galeria__boton)
- Nombrar imágenes relativas a su bloque. (Ejemplo: icono-busqueda.png)

### SINTAXIS

- 1 espacio después del selector y antes de {}
- 2 espacios para indentación.
- 1 espacio después del :
- Bloques de CSS separados por 2 líneas
- Mixins para tamaño, estilos y valores numéricos de fuentes.

### MANEJO DE PROPIEDADES
- Propiedades y selectores deben ordenarse de la siguiente forma:
- Propiedades del modelo de caja (display, width, height, margin, etc)
- Posicionamiento (position, left, top, right, etc)
- Tipografía(text-transform, text-decoration)
- Decoración (background-image, color, etc)
- Variables
- Mixins
Ejemplo:
```
.button {
  display: block;
  width: 220px;
  height: 40px;
  position: relative;
  text-transform: uppercase;
  background-color: #333333;
  font-weight: $semibold;
  @include font-size (13px);
}

```

#### A veces olvido muchas cosas, por lo que no sigo las "reglas". (Sometimes, I forget a bunch of things, that is why I'm not born to follow the "rules" )