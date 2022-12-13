import styles from '../styles/Home.module.scss';
import Invite from '../components/regular/invite';
import ShortAboutUs from '../components/regular/shortAboutUs';
import Rent1 from '../components/rent/rent1';
import Rent2 from '../components/rent/rent2';

const Rent = () => {
    return(
        <>
            <main className={styles.main}>
                <Rent1/>
                <Invite/>
                <ShortAboutUs/>
                <Rent2/>
            </main>
        </>
    );
}

export default Rent;