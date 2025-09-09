import { ApiResponse } from "../types/character";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const searchCharacters = async (query: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/character/?name=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      if (response.status === 404) {
        return {
          results: [],
          info: { count: 0, pages: 0, next: null, prev: null },
        };
      }
      throw new Error(`API request failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(
      `Failed to fetch characters: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
};
