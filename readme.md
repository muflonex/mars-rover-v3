# Mars Rover

### Introducción
Se trata de un programa que realiza el movimiento de un robot en el terreno de Marte.
##### El mapa
El terreno esta representado por una mátriz que lleva 10 lineas cada una con 10 columnas.

| [0,0] | [0,1] | [0,2] |
|-------|-------|-------|
| [1,0] | [1,1] | ...   |
| [2,0] | ...   | ...   |
##### Ejecucción
  - Abrir index.html
  - Abrir consola
  
### Rover Class
En este ejemplo creamos instancias de una clase que definimos en Rover.js. Representa a nuestro robot en Marte.

|Propiedad| Descripción 
|--|--
| *direction* | el rumbo hacia donde mira el robot
| *y* | coordenada de la linea 
| *x* | coordenada de la columna 
| *travelLog* | aquí el robot guarda las coordenadas visitadas en un array 
    
|Método| Descripción |
|--|--|
| *turn* | cambiar la dirección hacia donde mira el robot
| *moveForward* | mover en dirección hacia donde miraba el robot
| *canMove* | comprobar si el movimiento del robot cabe dentro del área de la misión
| *positionDelta* | medida del cambio de coordenadas
| *executeCommands* | ejecutar comandos que se ha metido en el robot al crearlo
| *moveLogging* | añadir nuevas coordenadas visitadas al travelLog

### Posibles mejoras
  - Crear una Clase Marte que representa el tablero
  - Realizar la maquetación HTML


