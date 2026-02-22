
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

type NewsItem = {
  id: number;
  title: string;
  date: string;
  body: string;
  folder: string;
};

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch('/news-data.json')
      .then(res => res.json())
      .then(setNews);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">ข่าวประชาสัมพันธ์</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {news.map((n) => (
          <a href={`/news/${n.id}`} key={n.id} className="block bg-white p-4 rounded shadow hover:shadow-lg transition-all">
            <img src={`/news-img/${n.folder}/slide.jpg`} alt={n.title} className="w-full h-48 object-cover rounded mb-3" />
            <div className="text-sm text-gray-500">{n.date}</div>
            <h3 className="font-semibold mt-1 text-lg">{n.title}</h3>
            <p className="text-gray-700 mt-2 text-sm line-clamp-2">{n.body}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;
