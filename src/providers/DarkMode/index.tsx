import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";

const ThemeContext = createContext<any | unknown>(undefined);

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: Props): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>();

  useEffect(() => {
    if (window.localStorage.getItem("dark-mode") === "true") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("dark-mode", JSON.stringify(darkMode));
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
