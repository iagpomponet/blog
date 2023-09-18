import { useThemeContext } from "@/context/theme";
import variables from "./Header.module.scss";
import { HomeSimpleDoor, SunLight } from "iconoir-react";
import Link from "next/link";

export default function Header() {
  const { theme, setTheme } = useThemeContext();

  return (
    <header className={variables.header}>
      <div className={variables.homeLink}>
        <HomeSimpleDoor />
      </div>
      <div>
        <nav className={variables.nav}>
          <Link href="/">Home</Link>
          <Link href="/posts">Posts</Link>
          <Link href="about">About</Link>
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
