import { useState } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  async function fetchWeather() {
    if (!city) {
      setError("Silakan masukkan nama kota!");
      return;
    }

    setError(null);
    try {
      const res = await fetch(`/api/weather?city=${city}`);
      const data = await res.json();

      if (res.ok) {
        setWeather(data);
      } else {
        setWeather(null);
        setError(data.error);
      }
    } catch (err) {
      setWeather(null);
      setError("Gagal mengambil data cuaca.");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Data Cuaca</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <input
          type="text"
          placeholder="Masukkan nama kota"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-black"
        />
        <button
          onClick={fetchWeather}
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Cari
        </button>

        {error && <p className="text-red-600 mt-4">{error}</p>}

        {weather && (
          <div className="mt-6 text-gray-800">
            <h2 className="text-2xl font-semibold text-blue-800">
              {weather.city}, {weather.country}
            </h2>
            <p className="text-lg">🌡️ <span className="font-medium text-red-500">Temperatur:</span> {weather.temperature}°C</p>
            <p className="text-lg">🌤️ <span className="font-medium text-yellow-500">Kondisi:</span> {weather.condition}</p>
            <p className="text-lg">💨 <span className="font-medium text-green-500">Kecepatan Angin:</span> {weather.windspeed} km/h</p>
          </div>
        )}
      </div>
    </div>
  );
}