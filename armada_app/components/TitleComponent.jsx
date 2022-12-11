import { AnimBottom } from "./animation/WueScroll";
const TitleComponent = ({children}) => {
    return(
        <>
            <AnimBottom>
                <div className="TitleComponent">
                    <h1>{children}</h1>
                </div>
            </AnimBottom>
        </>
    );
}
export default TitleComponent;