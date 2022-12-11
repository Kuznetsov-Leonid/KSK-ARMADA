import { Container } from 'react-bootstrap';
import Styles from '../../styles/HomeGroup1.module.scss';
import { AnimBottom } from '../animation/WueScroll';

const Group1 = () => {
    return(
        <>
            <div className={Styles.Group1}>
                <Container>
                    <div className={Styles.Group1_title}>
                        <AnimBottom>
                            <h1>Верховая езда для всех</h1>
                            <h2>ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ ДЛЯ ВСАДНИКОВ ЛЮБОГО УРОВНЯ</h2>
                        </AnimBottom>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Group1