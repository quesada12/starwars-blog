# Starwars Blog

_La fuerza es fuerte con este ejercicio...._

## Objetivo

Vamos a construir una versi贸n minimalista del [Banco de datos de Star Wars](https://www.starwars.com/databank) con una funci贸n React o lista de favoritos.

### Aqu铆 esta un Demo!

![Starwars Demo](https://github.com/breatheco-de/exercise-starwars-blog-reading-list/blob/master/preview.gif?raw=true)

## 馃摑 Instrucciones

1. Empieza un nuevo projecto utilizando el template de [4Geeks Academy React Advanced](https://github.com/4GeeksAcademy/react-hello-webapp).
2. Utiliza los componentes de bootstrap (Card, Buttons, etc.), pr谩cticamente no necesitar谩s casi CSS propio.
3. Tomate un tiempo para entender SWAPI.tech, esta sera el API que vamos a utilizar para obtener la informaci贸n.
4. Utiliza la funci贸n Fetch para consumir SWAPI.tech y obtener los Personajes (people), Vehiculos y Planetas y mostrarlos en tu web.
5. Deber谩s tener un store centralizado con tu informaci贸n (planetas, personajes).
6. Para resolver la funcionalidad de "favoritos" te recomendamos declarar un arreglo `favorites` en el store y tener alli la lista de todos los planetas o personajes que se van marcando como favoritos.

#### Construyendo la red de personajes y planetas.

- Crear una aplicaci贸n web React que enumera _personas_, _vehiculos_ y _planetas_ **entidades** proporcionado por el [SWAPI](https://swapi.tech/documentation).

Nota: por favor utiliza swapi.tech y no swapi.dev porque la segunda esta dando problemas 煤timamente.

<p align="center">
   <img height="100" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data.png" />
</p>

#### Construyendo una vista de detalles para el personaje o el planeta

- Cada entidad debe tener una breve descripci贸n (Tarjeta Bootstrap) y una vista de detalles (Componentes Bootstrap):

<p align="center">
   <img height="100" src="https://raw.githubusercontent.com/nachovz/projects/master/p/javascript/semi-senior/startwars-blog-reading-list/sw_data_details.png" />
</p>

***Importante***: El SWAPI no proporciona las im谩genes, puede usar marcadores de posici贸n o evitar las im谩genes por completo. El enfoque de este ejercicio es practicar *fetch*, *router* y *context*; puedes enfocarte en el tema del color y el dise帽o simple para que se vea bien.

***Importante 2***: no se preocupe si los datos que obtiene de la SWAPI no coinciden con los datos que ve en starwars.com.

Usa toda la informaci贸n provista por el SWAPI (verifique los documentos y / o las respuestas de json).

## Leer m谩s tarde o la funcionalidad de favoritos

Implementa una funcionalidad de lectura posterior, es decir, un bot贸n que permita al usuario "guardar" el elemento (personaje, veh铆culo o planeta) en una lista especial. Esta lista se mostrar谩 en la parte inferior de la p谩gina de inicio, se asemeja a la lista principal, pero solo muestra los elementos "guardados".

#### Uso de Context

Para asegurarse de que el usuario pueda "guardar" el elemento, debe implementar una acci贸n a la que se pueda acceder desde cualquier lugar dentro de la aplicaci贸n.