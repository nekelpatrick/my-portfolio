import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

const ThemeContext = createContext<any | unknown>(undefined);

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props): JSX.Element {
  const [darkMode, setDarkMode] = useState<Boolean>(false);

  useEffect(() => {
    const saveMode = JSON.parse(
      window.localStorage.getItem("dark-mode") || "true"
    );
    saveMode && setDarkMode(saveMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeProvider() {
  const context = useContext(ThemeContext);
  return context;
}
