//React
import { decorate, observable } from "mobx";
import axios from "axios";

class MangaStore {
  mangas = [];
  loading = true;

  fetchMangas = async () => {
    try {
      const res = await axios.get("http://localhost:8000/mangas");
      this.mangas = res.data;
      this.loading = false;
    } catch (error) {
      console.error("error 404");
    }
  };

  getItemById = (mangaId) => {
    return this.mangas.find((manga) => manga.id === mangaId);
  };

  createManga = async (newManga, vendor) => {
    try {
      const formData = new FormData();
      for (const key in newManga) formData.append(key, newManga[key]);
      const res = await axios.post(
        `http://localhost:8000/vendors/${vendor.id}/mangas`,
        formData
      );
      this.mangas.push(res.data);
      vendor.mangas.push({ id: res.data.id });
    } catch (error) {
      console.log(error);
    }
  };

  updateManga = async (updatedManga) => {
    try {
      const formData = new FormData();
      for (const key in updatedManga) formData.append(key, updatedManga[key]);
      await axios.put(
        `http://localhost:8000/mangas/${updatedManga.id}`,
        formData
      );
      const manga = this.mangas.find((manga) => manga.id === updatedManga.id);
      for (const key in updatedManga) manga[key] = updatedManga[key];
      manga.image = URL.createObjectURL(updatedManga.image);
    } catch (error) {
      console.log(error);
    }
  };

  deleteManga = async (mangaId) => {
    try {
      await axios.delete(`http://localhost:8000/mangas/${mangaId}`);
      this.mangas = this.mangas.filter((_manga) => _manga.id !== mangaId);
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(MangaStore, {
  mangas: observable,
  loading: observable,
});

const mangaStore = new MangaStore();
mangaStore.fetchMangas();
export default mangaStore;
