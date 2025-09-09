import { useEffect, useRef, useState } from 'react'
import { Pagination } from '../Pagination/Pagination';
import { Link } from 'react-router';

const ListCharacter = () => {

	const [listCharacter, setListCharacter] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [search, setSearch] = useState("");
	const debounceRef = useRef(null);
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(false);

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
			setLoading(true);
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
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, [page, query]);


	return (
		<div className="w-full h-full px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-20 lg:py-12 ">

			<div className="mb-6 w-full relative">
				<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 text-xl">
					🔍
				</span>
				<input
					type="text"
					placeholder="Buscar personaje..."
					value={search}
					onChange={(e) => handleSearch(e.target.value)}
					className="w-full pl-12 pr-4 py-2 border border-slate-300 rounded-xl shadow-sm 
               focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
               text-blue-950 placeholder-slate-400 transition-all"
				/>
			</div>

			{loading ? (
				<p className="text-center col-span-6 text-blue-600 font-semibold">
					Cargando personajes...
				</p>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
					{listCharacter.length > 0 ? (
						listCharacter.map((data) => (
							<div
								key={data.id}
								className="bg-slate-200 shadow-md hover:shadow-xl rounded-2xl transform hover:-translate-y-1 transition-all duration-300"
							>
								<Link to={`/character/${data.id}`} >
									<img src={data?.image} alt="" className="rounded-t-2xl" />
									<p className="text-base font-semibold text-blue-950">
										{data.name}
									</p>
									<p className="text-sm font-normal text-slate-500">
										{data.species}
									</p>
								</Link>
							</div>
						))
					) : (
						<p className="col-span-6 text-center text-slate-500">
							No se encontraron resultados
						</p>
					)}
				</div>
			)}

			{!loading && (
				<Pagination page={page} totalPages={totalPages} setPage={setPage} />

			)}
		</div>
	)
}

export default ListCharacter