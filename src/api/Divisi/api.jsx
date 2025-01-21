import api from "../index";

export const getDivisi = async () => {
    try {
      const response = await api.get('/divisi/show');
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          // Error validasi
          const errorMessages = Object.values(error.response.data.errors)
            .flat()
            .join(', ');
          throw new Error(errorMessages);
        } else {
          // Error lainnya (401, etc)
          throw new Error(error.response.data.message);
        }
      }
      throw new Error('Terjadi kesalahan pada server');
    }
  };
  export const addDivisi = async (formData) => {
    try {
      const response = await api.post('/divisi/add',formData);
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          // Error validasi
          const errorMessages = Object.values(error.response.data.errors)
            .flat()
            .join(', ');
          throw new Error(errorMessages);
        } else {
          // Error lainnya (401, etc)
          throw new Error(error.response.data.message);
        }
      }
      throw new Error('Terjadi kesalahan pada server');
    }
  };
  export const editDivisi = async (id,formData) => {
    try {
      const response = await api.put(`/divisi/update/${id}`,formData);
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          // Error validasi
          const errorMessages = Object.values(error.response.data.errors)
            .flat()
            .join(', ');
          throw new Error(errorMessages);
        } else {
          // Error lainnya (401, etc)
          throw new Error(error.response.data.message);
        }
      }
      throw new Error('Terjadi kesalahan pada server');
    }
  };
  export const deleteDivisi = async (id) => {
    try {
      const response = await api.delete(`/divisi/delete/${id}`);
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          // Error validasi
          const errorMessages = Object.values(error.response.data.errors)
            .flat()
            .join(', ');
          throw new Error(errorMessages);
        } else {
          // Error lainnya (401, etc)
          throw new Error(error.response.data.message);
        }
      }
      throw new Error('Terjadi kesalahan pada server');
    }
  };