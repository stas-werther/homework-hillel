export const apiUrl = 'https://rickandmortyapi.com/api/character';

export const fetchOptions = (method:string) => ({
  method,
  headers: {
    'Content-Type': 'application/json',
  },
});