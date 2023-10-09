import styles from "../styles/BtnBack.module.css"
import { useRouter } from 'next/router';
import { MdArrowBackIosNew } from 'react-icons/md'

 export default function BtnBack() {

  const router = useRouter();

  return (
    <button className={styles.btnBack} onClick={() => router.back()}>
        <MdArrowBackIosNew/> Voltar
    </button>
  );
}
