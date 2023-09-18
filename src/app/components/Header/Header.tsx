import { useThemeContext } from "@/context/theme";
import variables from "./Header.module.scss";
import { HomeSimpleDoor, SunLight } from "iconoir-react";

export default function Header() {
  const { theme, setTheme } = useThemeContext();

  return (
    <header className={variables.header}>
      <span>
        <HomeSimpleDoor />
      </span>
      <div>
        <nav className={variables.nav}>
          <a>Home</a>
          <a>Posts</a>
          <a>About</a>
          <SunLight
            onClick={() => {
              const newTheme = theme === "light" ? "dark" : "light";
              setTheme(newTheme);
            }}
          />
        </nav>
      </div>
    </header>
  );
}
