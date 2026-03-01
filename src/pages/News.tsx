import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

type NewsItem = {
  id: number;
  title: string;
  date: string;
  body: string;
  folder: string;
};

const ITEMS_PER_PAGE = 6;

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('/news-data.json')
      .then(res => res.json())
      .then(setNews);
  }, []);

  const totalPages = Math.ceil(news.length / ITEMS_PER_PAGE);
  const paginated = news.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageNumbers = () => {
    const delta = 2;
    const range: (number | '...')[] = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= page - delta && i <= page + delta)) {
        range.push(i);
      } else if (range[range.length - 1] !== '...') {
        range.push('...');
      }
    }
    return range;
  };

  const btnBase = "w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors";

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">ข่าวประชาสัมพันธ์</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {paginated.map((n) => (
          <a href={`/news/${n.id}`} key={n.id} className="block bg-white p-4 rounded shadow hover:shadow-lg transition-all">
            <img src={`/news-img/${n.folder}/slide.jpg`} alt={n.title} className="w-full h-48 object-cover rounded mb-3" />
            <div className="text-sm text-gray-500">{n.date}</div>
            <h3 className="font-semibold mt-1 text-lg">{n.title}</h3>
            <p className="text-gray-700 mt-2 text-sm line-clamp-2">{n.body}</p>
          </a>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-1 mt-10">
          {/* First page */}
          <button onClick={() => goToPage(1)} disabled={page === 1} className={btnBase}>
            <ChevronsLeft size={18} />
          </button>

          {/* Prev */}
          <button onClick={() => goToPage(page - 1)} disabled={page === 1} className={btnBase}>
            <ChevronLeft size={18} />
          </button>

          {/* Page numbers */}
          {pageNumbers().map((p, i) =>
            p === '...' ? (
              <span key={`ellipsis-${i}`} className="w-9 h-9 flex items-center justify-center text-gray-400">
                ...
              </span>
            ) : (
              <button
                key={p}
                onClick={() => goToPage(p as number)}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-colors
                  ${page === p ? 'bg-green-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {p}
              </button>
            )
          )}

          {/* Next */}
          <button onClick={() => goToPage(page + 1)} disabled={page === totalPages} className={btnBase}>
            <ChevronRight size={18} />
          </button>

          {/* Last page */}
          <button onClick={() => goToPage(totalPages)} disabled={page === totalPages} className={btnBase}>
            <ChevronsRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default News;