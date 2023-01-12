import styles from '../styles/Home.module.scss';
import HorsesComponent from '../components/horses/horsesComponent';
const Horses = () => {
    return(
        <>
            <main className={styles.main}>
                <HorsesComponent/>
            </main>
        </>
    );
}

export default Horses;