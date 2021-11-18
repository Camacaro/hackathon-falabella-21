# Hackathon Falabella-21
## Equipo Kunstmann
* Lorena Levil
* Francisco Gajardo
* Ernesto Rojas
* Alejandro Rivero
* Jesus Camacaro

## Estatus del proyecto
> Atendiendo el reto Hackathon
> Se desarrolla un microservicio en nodejs usuando buenas practicas de diseño y codificaion, 
> como los principios SOLID y diferentes frameworks y librerias para optimizar el trabajo. 
> Asi como la implementación de comunicación asincrona

## Para usar este repositorio
Este proyecto contiene tanto el codigo fuente para su ejecucion, el codigo fuente es una aplicacion en nodejs.

La aplicacion cuenta con unas API
| HTTP METHOD | POST                   | GET       | PUT         | DELETE           |
| ----------- | ---------------        | --------- | ----------- | ------           |
| CRUD OP     | CREATE                 | READ      | UPDATE      | DELETE           |
| UP          | N/A                    | /healthy  | N/A         | N/A              |
| Reglas      | /rule/add              | /rule/all | P           | /rule/delete/123 |
| FIle CSV    | /csv/upload            | N/A       | N/A         | N/A              |

Todas las dependencias estan descritas en el fichero de configuracion de package.json

El codigo de R se encuentra en la carpera 'R Data'

El puerto por defecto es el ```4000``` para evitar posibles conflictos

N/A: No aplica
P: En Proceso 

### Requisitos previos
nodejs ^8
MongoDB
git 
IDE de desarrollo

### Probar la aplicación mediante la interface web
1- Clonar el repositorio usando [Git](https://github.com/ernestojr/hackathon-falabella-21-front)  o cualqueir asistente grafico
   Una vez descargado puede ejecutar ```npm start```
   
2- Cargar Reglas

3- Subir CSV
