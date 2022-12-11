import { BG_NONE } from '../styleProps';
import { Container, CardGroup, Card } from 'react-bootstrap';
import Styles from '../../styles/HomeGroup2.module.scss';
import Cards from '../regular/Cards';
import { EventGroupAPI } from '../../pages/api/EventGroupAPI';
import { AnimLeft } from '../animation/WueScroll';

const Group2 = () => {

    const TxtGroupAPI = [
        {id: 1, h: "Всадникам без опыта", p: "Мы даём базовое обучение основам безопасности верховой езды."},
        {id: 2, h: "Конникам любителям", p: "Предлагаем усовершенствовать взаимодействие с лошадью, развить навыки грамотной езды и изучить основы конкуры и выездки."},
        {id: 3, h: "Спортсменам", p: "Поможем подготовиться к успешным стартам и планомерно двигаться к более высокому уровню соревнований."},
    ];

    const TxtGroupItem = (props) => {
        const TITLE     = props.TITLE;
        const PARAGRAPH = props.PARAGRAPH;
        return(
            <>
                <div className = {Styles.Txt}>
                    <h1>{TITLE.h}</h1>
                    <p>{PARAGRAPH.p}</p>
                </div>
            </>
        );
    };
    const TxtGroupList = (props) => {
        const DATA = props.DATA;
        const ITEMS = DATA.map((item) => {
            return <TxtGroupItem
                key       = {item.id}
                TITLE     = {item}
                PARAGRAPH = {item}
            />
        });
        return(
            <>
            <AnimLeft>
                {ITEMS}
            </AnimLeft>
            </>
        );
    };


    return(
        <>
            <div className = {Styles.Group2}>
                <Container>
                    <div className = {Styles.TextGroup}>
                        <CardGroup>
                            <Card style = {BG_NONE}>
                                <TxtGroupList DATA = {TxtGroupAPI}/>
                            </Card>
                        </CardGroup>
                    </div>
                    <div className = {Styles.EventGroup}>
                        <CardGroup>
                            <Cards DATA = {EventGroupAPI}/>
                        </CardGroup>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default Group2;