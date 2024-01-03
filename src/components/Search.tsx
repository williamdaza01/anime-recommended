import React, { useState } from "react";
import { Box, FormControl, Input, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { searchAnime } from "../service";

interface SearchProps {
  onSearch: (results: any) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      const results = await searchAnime(searchTerm);
      onSearch(results);
    }
  };

  return (
    <Box className='flex justify-center' sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <Input
          className="text-slate-300 hover:text-slate-600 bg-slate-600 rounded-xl text-2xl px-3 hover:bg-slate-400"
          id="input-with-icon-adornment"
          endAdornment={
            <InputAdornment position="end" onClick={handleSearch}>
              <SearchIcon className="fill-slate-300 hover:fill-slate-600" style={{ cursor: "pointer" }} />
            </InputAdornment>
          }
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar"
          disableUnderline={true}
        />
      </FormControl>
    </Box>
  );
};
