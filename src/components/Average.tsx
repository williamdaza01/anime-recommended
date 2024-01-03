import React from "react";
import { Box, MenuItem, Typography, Button } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { getAverageSeason } from "@/service";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { platformLabels, seasonLabels } from "@/types";
export const Average = () => {
  const [plt, setPlt] = React.useState("");
  const [season, setSeason] = React.useState("");
  const [selectedYear, setSelectedYear] = React.useState<any | null>(null);
  const [avg, setAvg] = React.useState(0);

  const handleChangePlt = (event: SelectChangeEvent) => {
    setPlt(event.target.value as string);
  };

  const handleChangeSeason = (event: SelectChangeEvent) => {
    setPlt(event.target.value as string);
    setSeason(event.target.value as string);
  };

  const handleDateChange = (date: any | null) => {
    setSelectedYear(date);
  };

  const handleCalculateAverage = async () => {
    if (selectedYear && season && plt) {
      try {
        const result = await getAverageSeason(selectedYear.$y, season, plt);

        setAvg(result);
      } catch (error) {
        console.error("Error al calcular el promedio:", error);
      }
    } else {
      console.warn("Por favor, selecciona año, temporada y plataforma");
    }
  };
  return (
    <>
      <Box className="flex flex-row justify-evenly mt-10">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="bg-slate-400 rounded p-2 mt-2"
            views={["year"]}
            value={selectedYear}
            onChange={handleDateChange}
          />
        </LocalizationProvider>

        <Select
          className="bg-slate-400 text-slate-700 rounded p-2 mt-2"
          labelId="season-select-label"
          id="season-select"
          value={season}
          label="Temporada"
          onChange={handleChangeSeason}
          inputProps={{ "aria-label": "Without label" }}
          displayEmpty
        >
          <MenuItem value="">
            <em>Temporada</em>
          </MenuItem>
          {Object.entries(seasonLabels).map(([value, label]) => (
            <MenuItem key={value} value={value} className="text-slate-700">
              {label}
            </MenuItem>
          ))}
        </Select>

        <Select
          className="bg-slate-400 text-slate-700 rounded p-2 mt-2"
          labelId="plt-select-label"
          id="plt-select"
          value={plt}
          label="Plataforma"
          inputProps={{ "aria-label": "Without label" }}
          displayEmpty
          onChange={handleChangePlt}
        >
          <MenuItem value="">
            <em>Plataforma</em>
          </MenuItem>
          {Object.entries(platformLabels).map(([value, label]) => (
            <MenuItem key={value} value={value} className="text-slate-700">
              {label}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Button
        variant="contained"
        onClick={handleCalculateAverage}
        className="bg-blue-800 text-white p-2 mt-10"
      >
        Obtener Promedio
      </Button>
      <Typography className="text-2xl font-semibold mt-7">
        Promedio de la temporada: {avg}
      </Typography>
    </>
  );
};
