import { API_URL } from "../constants";

async function getData(endpoint: string, query?: string, param?: string) {
  //"https://potterapi-fedeperin.vercel.app/es/characters?search=Weasley"
  if (!query) {
    const response = await fetch(`${API_URL}${endpoint}`);
    const data = await response.json();
    return data;
  }
  const response = await fetch(`${API_URL}${endpoint}?${query}=${param}`);
  const data = await response.json();
  return data;
}

export { getData };
