# DWEC_JoonGut
# Wordle
## Descripcion
La famosa aplicacion de Wordle, donde tenemos que adivinar una palabra de 5 letras
+ En caso de acertar una letra y el lugar se cambiara el background a *verde*
+ En caso de acertar una letra pero no su lugar se cambiara el background a *naranja*
+ En caso de no acertar una letra cambiara su background a *gris*
## Reglas
+ Usar palabras existentes
+ Tener JavaScript activado en el navegador
### Creado por ***Jon***

### Ejemplo practico 
| Palabra | Feedback |
|---------|----------|
| GATOS   | G V V V V |
|---------|----------|
| SOBRE   | A A G G G |
|---------|----------|
| PATOS   | V V V V V |
------------------------

### Enclace al Github
[Enlace al repositorio](https://github.com/JoonGut/DWEC_JoonGut/tree/wordle)

### Foto del Worlde
[Icono del wordle](https://www.google.com/search?client=firefox-b-d&hs=VQxo&sca_esv=7a7784c0b95b5c0d&udm=2&fbs=AIIjpHx4nJjfGojPVHhEACUHPiMQht6_BFq6vBIoFFRK7qchKEWEvuc0Hbw31oEI7c8o3y5Az9dJyKxsfx0xXZG1h0pUgSbCYZ7LGbQzQzm8Hq47-dSWIgFD9lAW8PGLclI0wT2r0C666g-DJ8GgwIw1821aZzMmoQYt3POpkFyDQbC9CB6JvtxW9sQXKj_LmeBn1HWcin5R&q=Imagen+del+wordle&sa=X&ved=2ahUKEwim5c3GwrWRAxUnVqQEHetGB_AQtKgLegQIEBAB&biw=1536&bih=703&dpr=1.25#sv=CAMSVhoyKhBlLXVSWVJiQVk1Q1l1bXlNMg51UllSYkFZNUNZdW15TToOVUZtaXVnVEs0aDhWTk0gBCocCgZtb3NhaWMSEGUtdVJZUmJBWTVDWXVteU0YADABGAcgqPaKowIwAkoKCAIQAhgCIAIoAg)

### Lineas del codigo
'''
 JavaScrip 
let paleta = document.getElementById("paleta");
let teclado = document.getElementById("teclado");
let mensaje = document.getElementById("mensaje");
'''