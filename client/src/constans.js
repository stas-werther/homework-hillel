export const apiUrl = 'http://localhost:3000';

export const fetchOptions = (method) => ({
  method,
  headers: {
    'Content-Type': 'application/json',
  },
});