//React
import React from "react";
import style from "./style";
import MangaList from "./components/MangaList";

function App() {
  return (
    <div>
      <div style={style.title}>
        <h1 style={style.h1}>Welcome To Manga Store</h1>
        <h4 style={style.text}>Here You Can Find EveryThing About Manga</h4>
      </div>

      <div style={style.list}>
        <MangaList />
      </div>
    </div>
  );
}

export default App;
