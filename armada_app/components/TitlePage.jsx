import { AnimBottom } from "./animation/WueScroll";
const TitlePage = ({children}) => {
    return(
        <>
        <AnimBottom>
            <div className={"TitlePage"}>
                <h1>{children}</h1>
            </div>
        </AnimBottom>
        </>
    );
}
export default TitlePage;