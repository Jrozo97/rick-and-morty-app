import React, { useEffect, useState } from 'react'
import { Pagination } from '../Pagination/Pagination';

const ListCharacter = () => {

	const [listCharacter, setListCharacter] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);

	// https://rickandmortyapi.com/api/character
	useEffect(() => {

		async function fetchData() {
			fetch(`https://rickandmortyapi.com/api/character?page=${page}`).then(async (data) => {
				if (data) {
					const { results, info } = await data.json()
					console.log("result", results)
					setListCharacter(results);
					setTotalPages(info.pages)
				}
			})
		}
		fetchData()

	}, [page])


	return (
		<div className="w-full h-full px-20 py-12">
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