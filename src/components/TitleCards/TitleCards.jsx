import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category, searchQuery }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NThlOGU3OTUwMGRkYjkxNmJhNzkzNzU4ZWE3ZWVhYyIsIm5iZiI6MTc0OTg3OTQ4NS40NjQsInN1YiI6IjY4NGQwYWJkMmMzOTkwMjJmMDFlYmVjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ikec-heMMi_a-VZlObxC-vDsDI80sCr5ncHp6n7eJ6I'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    let url = '';

    if (searchQuery) {
      url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(searchQuery)}&language=en-US&page=1`;
    } else if (category) {
      url = `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`;
    } else {
      return; // 🛑 Don't run fetch if neither searchQuery nor category exists
    }

    fetch(url, options)
      .then(res => res.json())
      .then(res => setApiData(res.results || []))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
    return () => cardsRef.current?.removeEventListener('wheel', handleWheel);
  }, [category, searchQuery]);

  return (
    <div className='title-cards'>
      <h2>{title}</h2>
      <div className='card-list' ref={cardsRef}>
        {searchQuery && apiData.length === 0 ? (
          <p style={{ color: 'white', padding: '10px' }}>No results found.</p>
        ) : (
          apiData.map((card, index) => (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`}
                alt={card.original_title || card.title}
              />
              <p>{card.original_title || card.title}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default TitleCards;
