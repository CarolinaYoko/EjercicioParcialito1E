/*
Se debe pedir al usuario, mientras quiera:
	- Nombre de artículo
	- Categoría
	- Precio.
Al finalizar, se debe informar:
	- Nombre de artículo con mayor precio
	- Nombre de artículo con mayor precio, de la categoría lácteos.
	- Cantidad de artículos ingresados de categoría bebidas
Considerar que las categorías pueden ser: almacen, lácteos, limpieza o bebidas y que el precio no puede ser menor a 0 ni mayor a 1000.
*/

function mostrar() { 
	let NombreArt;
	let Categoria;
	let Precio;

	NombreArt = prompt("Ingrese un artículo en minúscula ",);
	Categoria = prompt("Ingrese una categoría en minúscula",);
	Precio = prompt("Ingresar precio")

	switch (Categoria) {
		case "almacén":
			switch (NombreArt) {
				case "galletitas":
					Precio = 70;
					break;
				case "pan":
					Precio = 100;
					break;
				case "yerba":
					Precio = 130;
					break;
			}
			break;
		case "lácteos":
			switch (NombreArt) {
				case "yogurt":
					Precio = 100;
					break;
				case "leche":
					Precio = 80;
					break;
			}
			break;
		case "limpieza":
			switch (NombreArt) {
				case "lavandina":
					break;
				case "jabón":
					break;
			}
			break;

		case "bebidas":
			break;
	}

	
}