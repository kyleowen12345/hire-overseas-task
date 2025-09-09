import { useState, useCallback } from "react";
import { SearchState } from "../types/character";
import { searchCharacters } from "../services/api";

export const useCharacterSearch = () => {
  const [state, setState] = useState<SearchState>({
    characters: [],
    loading: false,
    error: null,
    hasSearched: false,
  });

  const search = useCallback(async (query: string) => {
    setState((prev) => ({
      ...prev,
      loading: true,
      error: null,
      hasSearched: true,
    }));

    try {
      const data = await searchCharacters(query);
      setState((prev) => ({
        ...prev,
        characters: data.results || [],
        loading: false,
      }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
        characters: [],
        loading: false,
      }));
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      characters: [],
      loading: false,
      error: null,
      hasSearched: false,
    });
  }, []);

  return {
    ...state,
    search,
    reset,
  };
};
