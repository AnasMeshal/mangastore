//React
import { decorate, observable } from "mobx";
import instance from "./instance";
import authStore from "./authStore";

class VendorStore {
  vendors = [];
  loading = true;

  fetchVendor = async () => {
    try {
      const res = await instance.get("/vendors");
      this.vendors = res.data;
      this.loading = false;
    } catch (error) {
      console.error("error 404");
    }
  };

  createVendor = async (newVendor) => {
    try {
      const formData = new FormData();
      for (const key in newVendor) formData.append(key, newVendor[key]);
      const res = await instance.post("/vendors", formData);
      console.log(res);
      this.vendors.push({ ...res.data, mangas: [] });
      authStore.user.vendorSlug = res.data.slug;
    } catch (error) {
      console.log(error);
    }
  };

  updateVendor = async (updatedVendor) => {
    try {
      const formData = new FormData();
      for (const key in updatedVendor) formData.append(key, updatedVendor[key]);
      await instance.put(`/vendors/${updatedVendor.id}`, formData);
      const vendor = this.vendors.find(
        (vendor) => vendor.id === updatedVendor.id
      );
      for (const key in vendor) vendor[key] = updatedVendor[key];
      vendor.image = URL.createObjectURL(updatedVendor.image);
    } catch (error) {
      console.log(error);
    }
  };

  deleteVendor = async (vendorId) => {
    try {
      await instance.delete(`/vendors/${vendorId}`);
      this.vendors = this.vendors.filter((_vendor) => _vendor.id !== vendorId);
      authStore.user.vendorSlug = null;
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(VendorStore, {
  vendors: observable,
  loading: observable,
});

const vendorStore = new VendorStore();
vendorStore.fetchVendor();
export default vendorStore;
