import axios from "axios";

export const searchAnime = async (anime: string) => {
  try {
    const response = await axios.get("http://localhost:3020/anime/search", {
      params: {
        q: anime,
      },
    });

    const data = response.data;

    if (data || data.length > 0) return data;
    else return "No hay animes disponibles";
  } catch (error) {
    return error;
  }
};

export const getAverageSeason = async (
  year: number,
  season: string,
  plt: string
) => {
  try {
    const response = await axios.get(
      "http://localhost:3020/anime/calculate-average-score",
      {
        params: {
          year,
          season,
          plt,
        },
      }
    );

    const data = response.data;

    if (data || data.length > 0) return data.averageScore;
    else return "No hay animes disponibles";
  } catch (error) {
    return error;
  }
};
