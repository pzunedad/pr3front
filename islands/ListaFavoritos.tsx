import { favoritos } from "../utils/favoritos.ts";

export default function ListaFavoritos() {
  const eliminar = (index: number) => {
    favoritos.value = favoritos.value.filter((_, i) => i !== index);
  };

  return (
    <div>
      <h2>Tus películas favoritas</h2>
      {favoritos.value.length === 0 ? (
        <p>No tienes películas favoritas aun</p>
      ) : (
        <ul>
          {favoritos.value.map((pelicula, index) => (
            <li key={index}>
              <button type="button" title="Eliminar película favorita" onClick={() => eliminar(index)}>
                {pelicula}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}