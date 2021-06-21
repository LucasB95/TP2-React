- La API que elegiste no funciona, si entro a https://apionepiece.herokuapp.com/ me tira error.
  - No puedo corregir la funcionalidad de la app porque no puedo leer la documentación de la API.

- El error de que la app comience en la `<PaginaError />` sucede porque la ruta de la misma es `./`, que es la ruta inicial (que debería tener la `<HomePage />`). A la página de error podés ponerle `./error` y cuando haya un error redirigir ahí.
    - Después de hacer esto vas a tener que poner la `<HomePage />` abajo de todo para que funcione bien. Esto sucede porque el **Router** lee el código de arriba a abajo y si se encuentra con una ruta `./` siempre va a coincidir entonces se va a quedar ahí sin leer el código siguiente.