import api from "./index";

export const loginUser = async (Email_Sistem, Password) => {
    try {
      const response = await api.post('/login', {
        Email_Sistem,
        Password,
      });
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
  export const logoutUser = async () => {
    try {
      const response = await api.post('/logout');
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
  export const forgotPassword = async (formData) => {
    try {
      const response = await api.post('/forgot-password',formData);
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
  export const password = async (formData) => {
    try {
      const response = await api.post('/reset-password',formData);
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
