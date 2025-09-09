import { Box, Grid, Typography } from "@mui/material";
import { Character } from "../types/character";
import CharacterCard from "./CharacterCard";

interface CharacterGridProps {
  characters: Character[];
  query?: string;
}

export const CharacterGrid: React.FC<CharacterGridProps> = ({
  characters,
  query,
}) => (
  <Box>
    <Typography variant="h6" sx={{ mb: 3 }}>
      Found {characters.length} character
      {characters.length !== 1 ? "s" : ""}
      {query && ` for "${query}"`}
    </Typography>

    <Grid container spacing={3}>
      {characters.map((character) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={character.id}>
          <CharacterCard character={character} />
        </Grid>
      ))}
    </Grid>
  </Box>
);
