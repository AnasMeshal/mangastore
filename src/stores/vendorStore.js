//React
import { decorate, observable } from "mobx";
import axios from "axios";

class VendorStore {
  vendors = [];
  loading = true;

  fetchVendor = async () => {
    try {
      const res = await axios.get("http://localhost:8000/vendors");
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
      const res = await axios.post("http://localhost:8000/vendors", formData);
      this.vendors.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateVendor = async (updatedVendor) => {
    try {
      await axios.put(
        `http://localhost:8000/vendors/${updatedVendor.id}`,
        updatedVendor
      );
      const vendor = this.vendors.find(
        (vendor) => vendor.id === updatedVendor.id
      );
      for (const key in vendor) vendor[key] = updatedVendor[key];
    } catch (error) {
      console.log(error);
    }
  };

  deleteVendor = async (vendorId) => {
    try {
      await axios.delete(`http://localhost:8000/vendors/${vendorId}`);
      this.vendors = this.vendors.filter((_vendor) => _vendor.id !== vendorId);
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
