import AgregarAFavoritos from "../islands/AgregarAFavoritos.tsx";
import ListaFavoritos from "../islands/ListaFavoritos.tsx";

export default function Home() {
  const peliculas = [
    "Lilo y Stich",
    "Titanic",
    "La vida es bella",
    "Sonic",
    "Alvin y las ardillas"
  ];

  return (
    <div>
      <h1>Mis Películas Favoritas</h1>
      <div>
        <h2>Películas disponibles</h2>
        <ul>
          {peliculas.map((pelicula) => (
            <li key={pelicula}>
              
              <AgregarAFavoritos pelicula={pelicula} />
            </li>
          ))}
        </ul>
      </div>

      <ListaFavoritos />
    </div>
  );
}