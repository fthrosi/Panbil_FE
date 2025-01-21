import api from "../index";

export const getCuti = async () => {
    try {
      const response = await api.get('/pengajuan/cuti');
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
  export const getIzin = async () => {
    try {
      const response = await api.get('/pengajuan/izin');
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
  export const AddPengajuan = async (formData) => {
    try {
      const response = await api.post('/pengajuan/add',formData);
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
  export const getCutiId = async (id) => {
    try {
      const response = await api.get(`/pengajuan/showcuti/${id}`);
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
  export const getIzinId = async (id) => {
    try {
      const response = await api.get(`/pengajuan/showizin/${id}`);
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
  
  export const getCutiDivisi = async (input) => {
    try {
      const response = await api.get(`/pengajuan/cutidivisi/${input}`);
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
  export const getIzinDivisi = async (input) => {
    try {
      const response = await api.get(`/pengajuan/izindivisi/${input}`);
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
  
  export const updateStatus = async (id,data) => {
    try {
      const response = await api.put(`/pengajuan/status/${id}`,data);
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