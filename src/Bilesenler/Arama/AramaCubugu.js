import React, { useState } from "react";

function AramaCubugu({ setHavaDurumu }) {
  const api = {
    key: "341d70adaae52b0fe90ffc8d84887e15",
    base: "https://api.openweathermap.org/data/2.5/weather",
  };

  const [sehirParametre, setSehirParametre] = useState("");

  const ara = (e) => {
    if (e.key === "Enter") {
      fetch(
        `${api.base}?q=${sehirParametre}&units=metric&lang=tr&appid=${api.key}`
      )
        .then((veri) => veri.json())
        .then((sonuc) => {
          setSehirParametre("");
          setHavaDurumu(sonuc);
        });
    }
  };

  return (
    <div className="arama">
      <input
        className="arama-input"
        type="text"
        placeholder="Şehir"
        onChange={(e) => setSehirParametre(e.target.value)}
        value={sehirParametre}
        onKeyPress={ara}
      />
    </div>
  );
}

export default AramaCubugu;
