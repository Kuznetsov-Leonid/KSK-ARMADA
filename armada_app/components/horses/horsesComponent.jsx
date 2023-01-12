import Styles from "../../styles/Horses.module.scss";
import TitlePage from "../TitlePage";
import Cards from "../regular/Cards";
import { HorsesAPI } from "../../pages/api/HorsesAPI";
import { Container } from 'react-bootstrap';

const HorsesComponent = () => {
    return(
        <>
            <div className={Styles.Horses}>
                <Container>
                    <TitlePage>Лошади</TitlePage>
                    <div style={{'marginTop':'51px'}}>
                        <Cards DATA = {HorsesAPI}/>
                    </div>
                </Container>
            </div>
        </>
    );
}
export default HorsesComponent;