import React, { useState, useEffect } from 'react';

const MyMain = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore nella fetch');
        }
        return response.json();
      })
      .then((data) => {
        setSongs(data.data.slice(0, 8)); 
      })
      .catch((error) => console.error('Errore:', error));
  }, []);

  return (
    <div className="space-y-8">
    
      <h1 className="text-xl font-bold mb-4">Novità</h1>
      <section>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 justify-stretch">
          <div className="bg-gray-800 rounded p-4">
            <img src="src/assets/images/1a.png" alt="Novità 1" />
          </div>
          <div className="bg-gray-800 rounded p-4">
            <img src="src/assets/images/1b.png" alt="Novità 2" />
          </div>
        </div>
      </section>

  
      <section>
        <h2 className="text-xl font-bold mb-4">Nuovi episodi radio</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-stretch">
          <div className="bg-gray-800 rounded p-4">
            <img src="src/assets/images/2a.png" alt="Prologo con Abuelo" />
            Prologo con Abuelo
          </div>
          <div className="bg-gray-800 rounded p-4">
            <img src="src/assets/images/2b.png" alt="The Wanderer" />
            The Wanderer
          </div>
          <div className="bg-gray-800 rounded p-4">
            <img src="src/assets/images/2c.png" alt="Michael Bublé & Carly Pearce" />
            Michael Bublé & Carly Pearce
          </div>
          <div className="bg-gray-800 rounded p-4">
            <img src="src/assets/images/2d.png" alt="Stefan Moccio" />
            Stefan Moccio: The Zane Lowe Interview
          </div>
          <div className="bg-gray-800 rounded p-4">
            <img src="src/assets/images/2e.png" alt="Julia Michaels" />
            Chart Spotlight: Julia Michaels
          </div>
        </div>
      </section>

     
      <section>
        <h2 className="text-xl font-bold mb-4">Nuove uscite</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {songs.length > 0
            ? songs.map((song, i) => (
                <div key={i} className="bg-gray-800 rounded p-4 text-center">
                  <img
                    src={song.album.cover}
                    alt={song.title}
                    className="w-full h-24 object-cover mb-2 rounded"
                  />
                  <p>{song.title}</p>
                  <p className="text-sm text-gray-400">{song.artist.name}</p>
                </div>
              ))
            : [...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-800 rounded p-4 text-center">
                  <div className="bg-gray-700 w-full h-24 mb-2"></div>
                  <p>Song Placeholder</p>
                  <p className="text-sm text-gray-400">Artist Placeholder</p>
                </div>
              ))}
        </div>
      </section>

  
      <section>
        <h2 className="text-xl font-bold mb-4">Altro da esplorare</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Esplora per genere',
            'Decenni',
            'Attività e stati d’animo',
            'Worldwide',
            'Classifiche',
            'Audio spaziale',
            'Video musicali',
            'Nuovi artisti',
            'Hit del passato',
          ].map((text, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded p-4 text-center cursor-pointer hover:text-red-500"
            >
              {text}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyMain;

