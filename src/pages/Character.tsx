import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Typography, Box, Paper } from "@mui/material";
import { useCharacterSearch } from "../hooks/useCharacterSearch";
import { LoadingSpinner } from "../components/common/LoaderSpinner";
import { CharacterGrid } from "../components/CharacterGrid";
import SearchBar from "../components/SearchBar";

const Character: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  const { characters, loading, error, hasSearched, search } =
    useCharacterSearch();

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery) {
      setQuery(searchQuery);
      search(searchQuery);
    }
  }, [searchParams, search]);

  const handleSearch = () => {
    if (query.trim()) {
      setSearchParams({ search: query.trim() });
      search(query.trim());
    }
  };

  const handleClear = () => {
    setQuery("");
    setSearchParams({});
  };

  const renderContent = () => {
    if (loading) {
      return <LoadingSpinner message="Searching characters..." />;
    }

    if (error) {
      return (
        <Box sx={{ textAlign: "center", py: 4 }}>
          <Typography variant="h6" color="error" gutterBottom>
            Something went wrong!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {error}
          </Typography>
        </Box>
      );
    }

    if (hasSearched && characters.length === 0) {
      return (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            No characters found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Try searching for "Rick", "Morty", or "Summer Smith"
          </Typography>
        </Box>
      );
    }

    if (!hasSearched) {
      return (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Search for characters
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Enter a character name above to get started
          </Typography>
        </Box>
      );
    }

    return <CharacterGrid characters={characters} query={query} />;
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper
        elevation={0}
        sx={{ py: 3, mb: 4, backgroundColor: "transparent" }}
      >
        <Typography variant="h4" gutterBottom>
          Characters
        </Typography>

        <SearchBar
          query={query}
          loading={loading}
          onQueryChange={setQuery}
          onSearch={handleSearch}
          onClear={handleClear}
        />
      </Paper>

      {renderContent()}
    </Container>
  );
};

export default Character;
