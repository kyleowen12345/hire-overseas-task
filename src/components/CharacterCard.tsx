import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import {
  LocationOn as LocationIcon,
  Public as OriginIcon,
} from "@mui/icons-material";
import { Character } from "../types/character";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const getStatusIcon = (status: Character["status"]) => ({
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor:
      status === "Alive"
        ? "#4CAF50"
        : status === "Dead"
        ? "#F44336"
        : "#FF9800",
    display: "inline-block",
    marginRight: "8px",
  });

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        height="240"
        image={character.image}
        alt={character.name}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography variant="h6" component="h3" gutterBottom noWrap>
          {character.name}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <span style={getStatusIcon(character.status)} />
          <Typography variant="body2" color="text.secondary">
            {character.status} - {character.species}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          <strong>Gender:</strong> {character.gender}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <OriginIcon sx={{ fontSize: 16, mr: 0.5, color: "text.secondary" }} />
          <Typography variant="body2" color="text.secondary" noWrap>
            {character.origin.name}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LocationIcon
            sx={{ fontSize: 16, mr: 0.5, color: "text.secondary" }}
          />
          <Typography variant="body2" color="text.secondary" noWrap>
            {character.location.name}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;
