import Styles from '../styles/ServicePage.module.scss';
import TitlePage from '../components/TitlePage';

import { ServiceCard } from '../components/service/serviceCard';
import { ServiceAPI } from '../pages/api/ServiceAPI';
const Services = () => {
    return(
        <>
            <main className={Styles.main}>
                <TitlePage>Услуги</TitlePage>
                <ServiceCard  DATA={ServiceAPI} />
            </main>
        </>
    );
}

export default Services;