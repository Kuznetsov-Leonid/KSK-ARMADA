import Head from 'next/head';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import TitlePage from '../../components/TitlePage';
import Styles from '../../styles/Documents.module.scss';

const Doc = () => {
    return(
        <>
            <div className={Styles.Doc}>
                <Container>
                    <TitlePage>Документация</TitlePage>
                    <div className={Styles.Doc_link}>
                        <ul>
                            <li><Link href={'/documents/priviciInfo'}>Обработка персональных данных</Link></li>
                            <li><Link href={'/documents/qookieInfo'}>Использование данных Qookie</Link></li>
                        </ul>
                    </div>
                </Container>
            </div>
        </>
    );
}
export default Doc;