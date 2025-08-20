// contexto de aplicação 
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContextInstance";

export function useTheme() {
  const context = useContext(ThemeContext);

// Se ele não estiver definido, gera uma mensagem que precisa de um themeProvider e retorna para o context
  if (context === undefined) 
    throw new Error("useTheme precisa de um ThemeProvider");
  return context;
}