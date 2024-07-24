Esta API trabaja con personajes y libros de Harry Potter. Consume una API publica para popular una base de datos local con los personajes de las peliculas y consume directamente de la API publica la informacion de los libros.
Las acciones que admite son:

Personajes:
GET all characters => Devuelve una lista de todos los personajes en la base de datos local.
GET character by name => Devuelve los resultados que coincidan con el parametro de busqueda.
GET character by house => Devuelve la lista de personajes de la casa de Hogwarts especificada.
CREATE character => Crea un nuevo personaje en la base de datos local.

Libros:
GET all books => Devuelve una lista de los libros de la saga.
GET by name => Devuelve los resultados que coincidan con el parametro de busqueda.
GET by number => Devuelve el libro buscado por numero de orden.

Formato de las peticiones:
{
path: string,
action: string,
body: number | string | obj,
};

Los PATH o endpoints disponibles son 'characters' & 'books'

Las ACTION son:
READ --> para los GET
CREATE --> para crear un personaje

El BODY es requerido en las peticiones con parametro de busqueda, puede ser el numero de un libro, el nombre de un libro (completo o parcial), el nombre de un personaje (completo o parcial), el nombre de una casa de Hogwarts, o un objeto para la creacion de un personaje, cuyo formato debe ser:

body: {
fullName: string,
nickname: string,
hogwartsHouse: string,
interpretedBy: string,
children: string[],
image: string,
birthdate: string,
}

\*Todos los campos son requeridos
