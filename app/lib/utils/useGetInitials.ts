export const useGetInitials = (name: string | null | undefined): string => {
  if (!name) return "";
  const matches = name
    .normalize("NFD") // Normalise les caractères accentués en séparant les caractères de l'accent
    .replace(/[\u0300-\u036f]/g, "") // Supprime les accents
    .match(/\b\w/g);
  return matches ? matches.join("").toUpperCase() : "";
};
