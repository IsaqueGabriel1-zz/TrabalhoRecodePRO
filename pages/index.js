import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import styles from './styles.module.css'



export default function Home() {
  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.link1}>Home</div>
        <div className={styles.link1}>Produtos</div>
        <div className={styles.link1}>Lojas</div>
        <div className={styles.link1}>Contatos</div>
      </div>
      <div className={styles.corpo}>
        <div className={styles.apresentacao}>Seja bem vindo ao FullStack-Eletron.<br/>A melhor loga de varejo do Brasil!!</div>
      </div>
      <div className={styles.rodape}>
      <div className={styles.link1}> Isaque Gabriel</div>
      </div>
    </div>
  )
}
