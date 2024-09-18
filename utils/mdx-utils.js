import { api } from '../services/api';

export const getPosts = async () => {
  const { data } = await api.get('/posts');

  if (data) {
    return data;
  }

  return [];
};

export const getPostBySlug = async (id) => {
  //TODO: BUSCAR UM POST EM ESPECIFICO.
  //   const { data } = await api.get(`/post?id=eq.${id}`);
  try {
    const { data } = await api.get(`/post?id=eq.${id}`);

    // Verifica se há dados retornados
    if (data && data.length > 0) {
      console.log(data);
      return data[0];
    } else {
      return {};
    }
  } catch (error) {
    console.error('Erro ao buscar o post:', error);
    return {};
  }
};
