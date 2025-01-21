import api from "../index";

export const addKaryawan = async (formData) => {
    try {
      const response = await api.post('/karyawan/add',formData);
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          // Error validasi
          const errorMessages = Object.values(error.response.data.message)
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
  export const getKaryawan = async () => {
    try {
      const response = await api.get('/karyawan/show');
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
  export const editKaryawan = async (id,formData) => {
    try {
      const response = await api.put(`/karyawan/update/${id}`,formData);
      return response.data;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          // Error validasi
          const errorMessages = Object.values(error.response.data.message)
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
  export const deleteKaryawan = async (id) => {
    try {
      const response = await api.delete(`/karyawan/delete/${id}`);
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
  
  export const getKaryawanDivisi = async (divisi) => {
    try {
      const response = await api.get(`/karyawan/karyawandivisi/${divisi}`)
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
  export const resetCuti = async () => {
    try {
      const response = await api.put(`/karyawan/resetcuti`)
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
  export const resetIzin = async () => {
    try {
      const response = await api.put(`/karyawan/resetizin`)
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