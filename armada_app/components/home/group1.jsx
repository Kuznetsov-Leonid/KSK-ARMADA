import { Container } from 'react-bootstrap';
import Styles from '../../styles/HomeGroup1.module.scss';

const Group1 = () => {
    return(
        <>
            <div className={Styles.Group1}>
                <Container>
                    <div className={Styles.Group1_title}>
                        <h1>Верховая езда для всех</h1>
                        <h2>ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ ДЛЯ ВСАДНИКОВ ЛЮБОГО УРОВНЯ</h2>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Group1