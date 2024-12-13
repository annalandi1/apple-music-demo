import React from 'react';

const MyMain = () => {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-bold mb-4">Novità</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 rounded p-4">Chill Station</div>
          <div className="bg-gray-800 rounded p-4">Música Uno</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Nuovi episodi radio</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 rounded p-4">Prologo con Abuelo</div>
          <div className="bg-gray-800 rounded p-4">The Wanderer</div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-4">Nuove uscite</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(8)].map((_, i) => (
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
            <div key={i} className="bg-gray-800 rounded p-4 text-center cursor-pointer hover:text-red-500">
              {text}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyMain;

