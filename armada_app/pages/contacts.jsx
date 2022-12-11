import styles from '../styles/Home.module.scss';
import ContactGroup1 from '../components/contacts/ContactGroup1';
import ContactMap from '../components/contacts/ContactMap';
const Contacts = () => {
    return(
        <>
            <main className={styles.main}>
                <ContactGroup1/>
                <ContactMap/>
            </main>
        </>
    );
}

export default Contacts;