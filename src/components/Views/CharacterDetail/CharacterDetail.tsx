import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: { name: string };
  location: { name: string };
}

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await res.json();
        setCharacter(data);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) return <p className="text-center text-blue-600">Cargando...</p>;
  if (!character) return <p className="text-center text-red-600">Personaje no encontrado</p>;

  const episodeNumbers = character.episode.map((ep) => ep.split("/").pop());

  return (
    <div className="w-full h-full flex flex-col px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-20 lg:py-12">
      <Link to="/" className="text-blue-950 font-bold underline self-start">⬅ Volver</Link>
        <h1 className="text-4xl font-semibold text-black mt-4 md:mt-0">Detalles del personaje</h1>
      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <img src={character.image} alt={character.name} className="rounded-2xl shadow" />
        <div className="border border-slate-500 w-full py-4 px-8 flex flex-col items-start text-left">
          <h2 className="text-2xl font-bold text-center mb-2">👤{character.name}</h2>
          <p><b>Status:</b> {character.status}</p>
          <p><b>Species:</b> {character.species}</p>
          {character.type && <p><b>Type:</b> {character.type}</p>}
          <p><b>Gender:</b> {character.gender}</p>
          <p><b>Origin:</b> {character.origin.name}</p>
          <p><b>Location:</b> {character.location.name}</p>
           <div className="mt-4">
            <h2 className="text-lg font-semibold">Episodios:</h2>
            <p className="flex flex-wrap gap-2">
              {episodeNumbers.map((num) => (
                <span
                  key={num}
                  className="px-2 py-1 bg-slate-200 rounded text-sm"
                >
                  {num}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
