import Image from 'next/image';
import { Container } from 'react-bootstrap';
import { LargeButtonSolid } from '../components/buttons/buttons_solid';
import Styles from '../styles/Error.module.scss';
import ErrorImg from '../public/Error/ErrorImg.svg';

const Error = () => {
    return(
        <>
            <Container>
                <div className = {Styles.Error}>
                    <div className={Styles.ErrorMassege}>
                        <h1>
                            <b>404</b>
                        </h1>
                        <h3>
                            <b>Упс... страница не найдена</b>
                        </h3>
                        <LargeButtonSolid title="Вернуться на главную"/>
                    </div>
                    <div className={Styles.ErrorImg}>
                        <Image 
                            src={ErrorImg}
                            alt="Иллюстрация: конь со всадником встаёт на дыбы."
                        />
                    </div>
                </div>
            </Container>
        </>
    );
}
export default Error;