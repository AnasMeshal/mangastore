//React
import { decorate, observable } from "mobx";
import slugify from "react-slugify";

//Data
import mangas from "../mangas";

class MangaStore {
  mangas = mangas;

  createManga = (newManga) => {
    newManga.id = this.mangas[this.mangas.length - 1].id + 1 ;
    newManga.slug = slugify(newManga.name);
    this.mangas.push(newManga);
  };

  deleteManga = (mangaId) => {
    this.mangas = this.mangas.filter((manga) => manga.id !== mangaId);
    console.log(mangaId)
  };
}

decorate(MangaStore, {
  mangas: observable,
});

const mangaStore = new MangaStore();
export default mangaStore;
