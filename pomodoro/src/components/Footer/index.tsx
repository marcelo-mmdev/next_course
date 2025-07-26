import styles from './styles.module.css';

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a href='#'>Pagina que vai ser criada</a>
        <a href='#'>Projeto &copy; {new Date().getFullYear()}</a>
      </footer>
    </>
  );
}
