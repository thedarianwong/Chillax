import React, { useState } from "react";
import {
  Box,
  TextField,
  Grid,
  InputAdornment,
  Autocomplete,
  AutocompleteRenderInputParams,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Category {
  value: string;
  label: string;
}

const categories: Category[] = [
  { value: "sports", label: "Sports" },
  { value: "music", label: "Music" },
  { value: "education", label: "Education" },
  { value: "entertainment", label: "Entertainment" },
  // Add more categories as needed
];

const SearchBar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const handleCategoryChange = (
    event: React.SyntheticEvent,
    newValue: Category | null
  ) => {
    setSelectedCategory(newValue);
  };

  return (
    <Box sx={{ backgroundColor: "black" }}>
      <Grid
        container
        sx={{
          backgroundColor: "black",
          width: "80%",
          margin: "auto",
          marginTop: "24px",
          justifyContent: "space-between",
        }}
      >
        <Grid
          item
          xs={12}
          sm={7.5}
          sx={{ backgroundColor: "white", borderRadius: "10px" }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for Events or Activities"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ backgroundColor: "white", borderRadius: "10px" }}
        >
          <Autocomplete
            fullWidth
            options={categories}
            getOptionLabel={(option) => option.label}
            value={selectedCategory}
            onChange={handleCategoryChange}
            renderInput={(params: AutocompleteRenderInputParams) => (
              <TextField {...params} variant="outlined" label="Category" />
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBar;
