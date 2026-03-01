import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const NewsContent: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = React.useState<any>(null);

  React.useEffect(() => {
    fetch('/news-data.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find((n: any) => String(n.id) === String(id));
        setNews(found);
      });
  }, [id]);

  if (!news) return <div className="p-8 text-center text-gray-500">ไม่พบข่าว</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 rounded bg-green-50 text-green-800 border border-green-200 hover:bg-green-100 transition"
      >
        ← กลับหน้าข่าวประชาสัมพันธ์
      </button>
      <h1 className="text-2xl font-bold mb-2">{news.title}</h1>
      <div className="text-gray-500 text-sm mb-4">{news.date}</div>
      <img src={`/news-img/${news.folder}/content.jpg`} alt={news.title} className="mb-4 rounded shadow w-full max-h-96 object-cover" />
      <div className="text-lg text-gray-800 whitespace-pre-line">{news.detail || news.body}</div>
    </div>
  );
};

export default NewsContent;
