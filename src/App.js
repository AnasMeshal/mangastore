import React from "react";
import style from "./style";
import mangas from "./mangas";

const mangasList = mangas.map((manga) => (
  <div style={style.box} key={manga.id}>
    <img style={style.mangaCover} src={manga.img} alt={manga.name} />
    <p style={style.mangaTitle}>{manga.name}</p>
    <p style={style.mangaPrice}>{manga.price}KD</p>
  </div>
));

function App() {
  return (
    <div>
      <div style={style.title}>
        <h1 style={style.h1}>Welcome To Manga Store</h1>
        <h4 style={style.text}>Here You Can Find EveryThing About Manga</h4>
      </div>

      <div style={style.list}>{mangasList}</div>
    </div>
  );
}

export default App;
