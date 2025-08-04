import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nexTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nexTheme;
    });
  }

  const nexThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <nav className={styles.menu}>
        <a
          className={styles.menuLink}
          href='#'
          aria-label='Ir para home'
          title='Ir para home'
        >
          <HouseIcon />
        </a>

        <a
          className={styles.menuLink}
          href='#'
          aria-label='Ver histórico'
          title='Ver histórico'
        >
          <HistoryIcon />
        </a>

        <a
          className={styles.menuLink}
          href='#'
          aria-label='Configuração'
          title='Configuração'
        >
          <SettingsIcon />
        </a>

        <a
          className={styles.menuLink}
          href='#'
          aria-label='Mudar Tema'
          title='Mudar Tema'
          onClick={handleThemeChange}
        >
          {nexThemeIcon[theme]}
        </a>
      </nav>
    </>
  );
}
