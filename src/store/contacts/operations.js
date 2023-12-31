// import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from 'configAxios/api';

// axios.defaults.baseURL = 'https://6585c767022766bcb8c95914.mockapi.io';

export const fetchContasctsThunk = createAsyncThunk(
  'fetchContascts',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContasctThunk = createAsyncThunk(
  'deleteContasct',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContasctThunk = createAsyncThunk(
  'addContasct',
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await api.post('contacts', { name, number });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
