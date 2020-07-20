//React
import { decorate, observable } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class MangaStore {
  mangas = [];
  idCounter = this.mangas.length + 1;

  fetchMangas = async () => {
    try {
      const res = await axios.get("http://localhost:8000/mangas");
      this.mangas = res.data;
    } catch (error) {
      console.error("error 404");
    }
  };

  createManga = (newManga) => {
    newManga.id = this.idCounter;
    newManga.slug = slugify(newManga.name);
    this.mangas.push(newManga);
    this.idCounter++;
  };

  updateManga = (updatedManga) => {
    const manga = this.mangas.find((manga) => manga.id === updatedManga.id);
    for (const key in manga) manga[key] = updatedManga[key];
  };

  deleteManga = (mangaId) => {
    this.mangas = this.mangas.filter((manga) => manga.id !== mangaId);
    console.log(mangaId);
  };
}

decorate(MangaStore, {
  mangas: observable,
});

const mangaStore = new MangaStore();
mangaStore.fetchMangas();
export default mangaStore;
