import React from "react";

interface PaginationProps {
  page: number;
  totalPages: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: React.FC<PaginationProps> = ({ page, totalPages, setPage }) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page === 1}
        className="px-4 py-2 bg-slate-200 rounded disabled:opacity-50 text-blue-950 font-semibold"
      >
        Anterior
      </button>

      <span className="font-semibold text-blue-950">
        Página {page} de {totalPages}
      </span>

      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        className="px-4 py-2 bg-slate-200 rounded disabled:opacity-50 text-blue-950 font-semibold"
      >
        Siguiente
      </button>
    </div>
  );
};
