import { favoritos } from "../utils/favoritos.ts";
import { useSignal } from "@preact/signals";

interface Props {
  pelicula: string;
}

export default function AgregarAFavoritos({ pelicula }: Props) {
  const added = useSignal(false);

  const agregar = () => {
    if (!favoritos.value.includes(pelicula)) {
      favoritos.value = [...favoritos.value, pelicula];
    }
  };

  return (
    <div>
      <button type="button" title="Agregar película favorita" onClick={agregar}
        disabled={favoritos.value.includes(pelicula)}>
        {favoritos.value.includes(pelicula) ? "Ya en favoritos" : pelicula}
      </button>
      {added.value && <p>¡Agregado!</p>}
    </div>
  );
}