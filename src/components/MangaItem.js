//React
import React from "react";

//style
import style from "../style"

const MangaItem = (props) => { 
    return (
    <div style={style.box}>
      <img style={style.mangaCover} src={props.Manga.img} alt={props.Manga.name} />
      <p style={style.mangaTitle}>{props.Manga.name}</p>
      <p style={style.mangaPrice}>{props.Manga.price}KD</p>
    </div>
    
  );
}

  export default MangaItem;
