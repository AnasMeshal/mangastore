import React from "react";

const style = {
  text: {
    textAlign: "center",
    fontFamily: "Fjalla One,sans-serif",
    fontSize: "20px",
  },

  h1: {
    marginBottom: "15px",
  },

  title: {
    background: "#FFF",
    width: "80%",
    border: "black solid 2px",
    borderRadius: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "30px",
    marginTop: "20px",
    fontFamily: "Galada, cursive",
    fontSize: "25px",
    textAlign: "center",
  },

  mangaCover: {
    height: "400px",
    borderRadius: "10px",
  },

  list: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "Wrap",
  },

  box: {
    border: "white solid 3px",
    margin: "4px",
    borderRadius: "10px",
    background: "#fff",
  },

  mangaPrice: {
    color: "Blue",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "20px",
  },

  mangaTitle: {
    color: "black",
    fontWeight: "Bolder",
    textAlign: "center",
    fontSize: "20px",
  },
};
function App() {
  return (
    <div>
      <div style={style.title}>
        <h1 style={style.h1}>Welcome To Manga Store</h1>
        <h4 style={style.text}>Here You Can Find EveryThing About Manga</h4>
      </div>

      <div style={style.list}>
        <div style={style.box}>
          <img
            style={style.mangaCover}
            src="https://upload.wikimedia.org/wikipedia/en/d/d6/Shingeki_no_Kyojin_manga_volume_1.jpg"
            alt="Attack on Titan Manga"
          />
          <p style={style.mangaTitle}>Attack on Titan Manga</p>
          <p style={style.mangaPrice}>10KD</p>
        </div>
        <div style={style.box}>
          <img
            style={style.mangaCover}
            src="https://upload.wikimedia.org/wikipedia/en/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg"
            alt="Kimetsu No Yaiba Manga"
          />
          <p style={style.mangaTitle}>Kimetsu No Yaiba Manga</p>
          <p style={style.mangaPrice}>8KD</p>
        </div>
        <div style={style.box}>
          <img
            style={style.mangaCover}
            src="https://upload.wikimedia.org/wikipedia/en/a/a3/One_Piece%2C_Volume_1.jpg"
            alt="One Piece Manga"
          />
          <p style={style.mangaTitle}>One Piece Manga</p>
          <p style={style.mangaPrice}>8KD</p>
        </div>
      </div>
    </div>
  );
}

export default App;
