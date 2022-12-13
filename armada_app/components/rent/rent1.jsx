import { Container } from 'react-bootstrap';
import Styles from '../../styles/Rent.module.scss';
import { AnimBottom } from '../animation/WueScroll';

const Rent1 = () => {
    return(
        <>
            <div className={Styles.Rent1}>
                <Container>
                    <div className={Styles.Rent1_title}>
                        <AnimBottom>
                            <h1>Постой лошадей</h1>
                            <h2>здесь Ваш питомец всегда окружён заботой</h2>
                        </AnimBottom>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Rent1;