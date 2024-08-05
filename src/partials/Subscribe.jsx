import React from 'react';

function Subscribe() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20 border-t border-gray-800">
        {/* Section header */}
        <div className="text-center pb-12 md:pb-16">
          <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-blue-600 bg-blue-200 rounded-full mb-4">
            Rejoindre l'Aventure Poom
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Plans Tarifaires Des Abonnements Poom</h1>
          <p className="text-xl text-gray-400">
                        1) Commandez votre abonnement.
            <br /><br />2) Veuillez nous contacter pour avoir vos informations d'abonnements (cela peut prendre entre 30min et 1h). 
            <br /><br />3) Consultez le guide d’installation pour connaître les étapes à suivre pour installer l’IPTV sur votre appareil.
          </p>
        </div>

        <div className="mb-12">
          <h1 className="text-2xl font-semibold mb-6 text-center pb-2">Abonnement Classique</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Column 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-dotted pb-2">PACK CLASSIQUE</h3>
              <p className="text-lg font-bold text-gray-800 mb-2">10€ / 1 Mois</p>
              <ul className="text-gray-500 mb-4 text-center">
                <li className="border-b pb-2">+24 000 Chaînes mondiales En Direct</li>
                <li className="border-b pb-2">+110 000 VOD et Films</li>
                <li className="border-b pb-2">+19 000 Séries</li>
                <li className="border-b pb-2">Time-Shift & EPG guide</li>
                <li className="border-b pb-2">Qualité SD, HD, FHD et 4K</li>
                <li className="border-b pb-2">Technologie Anti-Freeze</li>
                <li className="border-b pb-2">Mises à Jour Quotidiennes</li>
              </ul>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                COMMANDEZ
              </button>
            </div>
            {/* Column 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-dotted pb-2">PACK CLASSIQUE</h3>
              <p className="text-lg font-bold text-gray-800 mb-2">25€ / 3 Mois</p>
              <ul className="text-gray-500 mb-4 text-center">
                <li className="border-b pb-2">+24 000 Chaînes mondiales En Direct</li>
                <li className="border-b pb-2">+110 000 VOD et Films</li>
                <li className="border-b pb-2">+19 000 Séries</li>
                <li className="border-b pb-2">Time-Shift & EPG guide</li>
                <li className="border-b pb-2">Qualité SD, HD, FHD et 4K</li>
                <li className="border-b pb-2">Technologie Anti-Freeze</li>
                <li className="border-b pb-2">Mises à Jour Quotidiennes</li>
              </ul>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                COMMANDEZ
              </button>
            </div>
            {/* Column 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-dotted pb-2">PACK CLASSIQUE</h3>
              <p className="text-lg font-bold text-gray-800 mb-2">39€ / 6 Mois</p>
              <ul className="text-gray-500 mb-4 text-center">
                <li className="border-b pb-2">+24 000 Chaînes mondiales En Direct</li>
                <li className="border-b pb-2">+110 000 VOD et Films</li>
                <li className="border-b pb-2">+19 000 Séries</li>
                <li className="border-b pb-2">Time-Shift & EPG guide</li>
                <li className="border-b pb-2">Qualité SD, HD, FHD et 4K</li>
                <li className="border-b pb-2">Technologie Anti-Freeze</li>
                <li className="border-b pb-2">Mises à Jour Quotidiennes</li>
              </ul>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                COMMANDEZ
              </button>
            </div>
            {/* Column 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-dotted pb-2">PACK CLASSIQUE</h3>
              <p className="text-lg font-bold text-gray-800 mb-2">69€ / 12 Mois</p>
              <ul className="text-gray-500 mb-4 text-center">
                <li className="border-b pb-2">+24 000 Chaînes mondiales En Direct</li>
                <li className="border-b pb-2">+110 000 VOD et Films</li>
                <li className="border-b pb-2">+19 000 Séries</li>
                <li className="border-b pb-2">Time-Shift & EPG guide</li>
                <li className="border-b pb-2">Qualité SD, HD, FHD et 4K</li>
                <li className="border-b pb-2">Technologie Anti-Freeze</li>
                <li className="border-b pb-2">Mises à Jour Quotidiennes</li>
              </ul>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                COMMANDEZ
              </button>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold mb-6 text-center pb-2">Abonnement Premium</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Column 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-dotted pb-2">PACK PREMIUM</h3>
              <p className="text-lg font-bold text-gray-800 mb-2">12€ / 1 Mois</p>
              <ul className="text-gray-500 mb-4 text-center">
                <li className="border-b pb-2">+30 000 Chaînes mondiales En Direct</li>
                <li className="border-b pb-2">+140 000 VOD et Films</li>
                <li className="border-b pb-2">+28 000 Séries</li>
                <li className="border-b pb-2">Time-Shift & EPG guide</li>
                <li className="border-b pb-2">Qualité SD, HD, FHD et 4K</li>
                <li className="border-b pb-2">Technologie Anti-Freeze</li>
                <li className="border-b pb-2">Mises à Jour Quotidiennes</li>
              </ul>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                COMMANDEZ
              </button>
            </div>
       

            {/* Column 6 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-dotted pb-2">PACK PREMIUM</h3>
              <p className="text-lg font-bold text-gray-800 mb-2">30€ / 3 Mois</p>
              <ul className="text-gray-500 mb-4 text-center">
                <li className="border-b pb-2">+30 000 Chaînes mondiales En Direct</li>
                <li className="border-b pb-2">+140 000 VOD et Films</li>
                <li className="border-b pb-2">+28 000 Séries</li>
                <li className="border-b pb-2">Time-Shift & EPG guide</li>
                <li className="border-b pb-2">Qualité SD, HD, FHD et 4K</li>
                <li className="border-b pb-2">Technologie Anti-Freeze</li>
                <li className="border-b pb-2">Mises à Jour Quotidiennes</li>
              </ul>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                COMMANDEZ
              </button>
            </div>

                {/* Column 7 */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-dotted pb-2">PACK PREMIUM</h3>
              <p className="text-lg font-bold text-gray-800 mb-2">49€ / 6 Mois</p>
              <ul className="text-gray-500 mb-4 text-center">
                <li className="border-b pb-2">+30 000 Chaînes mondiales En Direct</li>
                <li className="border-b pb-2">+140 000 VOD et Films</li>
                <li className="border-b pb-2">+28 000 Séries</li>
                <li className="border-b pb-2">Time-Shift & EPG guide</li>
                <li className="border-b pb-2">Qualité SD, HD, FHD et 4K</li>
                <li className="border-b pb-2">Technologie Anti-Freeze</li>
                <li className="border-b pb-2">Mises à Jour Quotidiennes</li>
              </ul>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                COMMANDEZ
              </button>
            </div>

            {/* Column 8 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-dotted pb-2">PACK PREMIUM</h3>
              <p className="text-lg font-bold text-gray-800 mb-2">89€ / 12 Mois</p>
              <ul className="text-gray-500 mb-4 text-center">
                <li className="border-b pb-2">+30 000 Chaînes mondiales En Direct</li>
                <li className="border-b pb-2">+140 000 VOD et Films</li>
                <li className="border-b pb-2">+28 000 Séries</li>
                <li className="border-b pb-2">Time-Shift & EPG guide</li>
                <li className="border-b pb-2">Qualité SD, HD, FHD et 4K</li>
                <li className="border-b pb-2">Technologie Anti-Freeze</li>
                <li className="border-b pb-2">Mises à Jour Quotidiennes</li>
              </ul>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                COMMANDEZ
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
