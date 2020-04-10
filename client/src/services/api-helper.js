const axios = require('axios');

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://bobby-food-app.herokuapp.com/' : 'http://localhost:3000'
});

// ====================================
// ============= Auth =================
// ====================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

// ====================================
// ============= Recipes ================
// ====================================

export const showRecipe = async () => {
  const resp = await api.get(`/recipes`)
  return resp.data;
}

export const showRecipeID = async (id) => {
  const resp = await api(`/recipes/${id}`)
  return resp.data;
}

export const postRecipe = async (item) => {
  const resp = await api.post(`/recipes`, { recipe: item })
  return resp.data
}

export const putRecipe = async (item, id) => {
  const resp = await api.put(`/recipes/${id}`, { recipe: item })
  return resp.data
}
export const destroyRecipe = async (id) => {
  const resp = await api.delete(`/recipes/${id}`);
  return resp.data;
}

//----------------------------Comments

export const showcomments = async (id) => {
  const resp = await api.get(`recipes/${id}/comments`)
  return resp.data;
}

export const showcommentID = async (id) => {
  const resp = await api(`/comments/${id}`)
  return resp.data;
}

export const postcomment = async (id, item) => {
  const resp = await api.post(`recipes/${id}/comments`, { comment: item })
  return resp.data
}

export const putcomment = async (item, id) => {
  const resp = await api.put(`/comments/${id}`, { comment: item })
  return resp.data
}
export const destroycomment = async (recipesid, id) => {
  const resp = await api.delete(`recipes/${recipesid}/comments/${id}`);
  return resp.data;
}
