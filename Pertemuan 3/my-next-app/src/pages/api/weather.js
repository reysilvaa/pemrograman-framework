export default async function handler(req, res) {
    const city = req.query.city || "Malang"; // Default ke Jakarta jika tidak ada input
    const API_KEY = "0517a0e93046464a98042703251003"; // Ganti dengan API Key dari WeatherAPI
    const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=id`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (response.status !== 200 || data.error) {
        return res.status(400).json({ error: "Kota tidak ditemukan" });
      }
  
      res.status(200).json({
        city: data.location.name,
        country: data.location.country,
        temperature: `${data.current.temp_c}°C`,
        condition: data.current.condition.text,
        windspeed: `${data.current.wind_kph} km/h`,
      });
    } catch (error) {
      res.status(500).json({ error: "Terjadi kesalahan server" });
    }
  }
  