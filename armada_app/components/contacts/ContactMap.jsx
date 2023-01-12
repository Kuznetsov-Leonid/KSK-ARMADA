import Styles from "../../styles/Contacts.module.scss";
import { Container, Card, CardGroup } from 'react-bootstrap';
import { BG_NONE } from "../styleProps";
import { AnimBottom } from "../animation/WueScroll";

const ContactMap = () => {
    return(
        <>
            <div className={Styles.ContactMap}>
                <Container>
                    <CardGroup>
                        <Card style = {BG_NONE}>
                            <AnimBottom>
                                <div style={{'position':'relative','overflow':'hidden','borderRadius':'30px'}}>
                                    <a 
                                        href="https://yandex.ru/maps/org/armada/73761087469/?utm_medium=mapframe&utm_source=maps" 
                                        style={{'color':'#eee','font-size':'12px','position':'absolute','top':'0px'}}
                                    >
                                        Армада
                                    </a>
                                    <a 
                                        href="https://yandex.ru/maps/1/moscow-and-moscow-oblast/category/horse_riding/184107287/?utm_medium=mapframe&utm_source=maps" 
                                        style={{'color':'#eee','font-size':'12px','position':'absolute','top':'14px'}}
                                    >
                                        Конный клуб в Москве и Московской области
                                    </a>
                                    <iframe 
                                        src="https://yandex.ru/map-widget/v1/-/CCUnUIxxOB" 
                                        width="100%" 
                                        height="600px" 
                                        frameborder="1" 
                                        allowfullscreen="true" 
                                        style={{'position':'relative'}}
                                    >
                                    </iframe>
                                </div>
                            </AnimBottom>
                        </Card>
                    </CardGroup>
                </Container>
            </div>
        </>
    );
}

export default ContactMap;