export interface AnimeData {
  id: number;
  title: string;
  images: {
    jpg: {
      large_image_url: string;
    };
  };
  score: number;
  recomendation: string;
}

export type SeasonValue = "spring" | "summer" | "fall" | "winter";

export const seasonLabels: Record<SeasonValue, string> = {
  spring: "Primavera",
  summer: "Verano",
  fall: "Otoño",
  winter: "Invierno",
};

export type PlatformValue = "tv" | "movie" | "ova" | "ona" | "special" | "music";

export const platformLabels: Record<PlatformValue, string> = {
  tv: "TV",
  movie: "Pelicula",
  ova: "OVA",
  ona: "ONA",
  special: "Especial",
  music: "Musica",
};