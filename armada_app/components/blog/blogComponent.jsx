import Styles from "../../styles/Blog.module.scss";
import TitlePage from "../TitlePage";
import Cards from "../regular/Cards";
import { Container } from 'react-bootstrap';
import { BlogAPI } from "../../pages/api/BlogAPI";

const BlogComponent = () => {
    return(
        <>
            <div className={Styles.BlogComponent}>
                <Container>
                    <TitlePage>Блог</TitlePage>
                    <div style={{'marginTop':'51px'}}>
                        <Cards DATA = {BlogAPI}/>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default BlogComponent;