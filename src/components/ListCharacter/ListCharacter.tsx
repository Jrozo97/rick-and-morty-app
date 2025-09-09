import { useEffect, useRef, useState } from 'react'
import { Pagination } from '../Pagination/Pagination';

const ListCharacter = () => {

	const [listCharacter, setListCharacter] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [search, setSearch] = useState("");
	const debounceRef = useRef(null);
  const [query, setQuery] = useState("");

	// https://rickandmortyapi.com/api/character

  const handleSearch = (value: string) => {
    setSearch(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      setQuery(value);
      setPage(1);
    }, 400);
  };

	useEffect(() => {

		async function fetchData() {
			try {
				const res = await fetch(
					`https://rickandmortyapi.com/api/character?page=${page}&name=${query}`
				);
				if (!res.ok) throw new Error("No results");
				const { results, info } = await res.json();
				setListCharacter(results ?? []);
				setTotalPages(info.pages ?? 1);
			} catch (err) {
				setListCharacter([]);
				setTotalPages(1);
			}
		}
		fetchData();

	}, [page, query])


	return (
		<div className="w-full h-full px-20 py-12">

			<div className="mb-6">
        <input
          type="text"
          placeholder="Buscar personaje..."
          value={search}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          className="px-4 py-2 border rounded w-1/3 border-slate-400 text-blue-950"
        />
      </div>

			<div className="grid grid-cols-6 gap-4">
				{listCharacter.map((data) => (
					<div key={data.id} className="bg-slate-300 shadow-slate-400 rounded-2xl">
						<img src={data?.image} alt="" className="rounded-t-2xl" />
						<p className="text-base font-semibold text-blue-950">{data.name}</p>
						<p className="text-sm font-normal text-slate-500">{data.species}</p>
					</div>
				))}
			</div>

			<Pagination page={page} totalPages={totalPages} setPage={setPage} />
		</div>
	)
}

export default ListCharacter