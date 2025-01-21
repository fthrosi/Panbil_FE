import api from "../index";

export const getRole = async () => {
    try {
      const response = await api.get('/role/show');
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