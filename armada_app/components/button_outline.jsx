import Styles from "../styles/Button.module.scss";
/**
 *  Конструкция для ссылок
 *   <form action="https://getuikit.com/docs/icon" target="_blank">
 *      <LargeButtonOutline type="submit" title="LargeButtonOutline"/>
 *   </form>
 * 
 *  вызов компонентов
 *  1)<LargeButtonOutline/>
 *  2)<RegularButtonOutline/>
 *  3)<SmallButtonOutline/>
 */
/**
 * ButtonOutline
 * @param {href, onClick, disabled, type, value, id, title} props 
 * @returns кнопку со встроенными параметрами
 */
export const LargeButtonOutline = (props) => {
    return(
        <>
            <button 
                {...props}
                href      = {props.href}
                onClick   = {props.onClick}
                disabled  = {props.disabled}
                type      = {props.type}
                value     = {props.value}
                id        = {props.id}
                className = {`${Styles.LargeButtonOutline} ${Styles.Bg_none}`}
            >
                {props.title}
            </button>
        </>
    )
};

export const RegularButtonOutline = (props) => {
    return(
        <>
            <button 
                {...props}
                href      = {props.href}
                onClick   = {props.onClick}
                disabled  = {props.disabled}
                type      = {props.type}
                value     = {props.value}
                id        = {props.id}
                className = {`${Styles.RegularButtonOutline} ${Styles.Bg_none}`}
            >
                {props.title}
            </button>
        </>
    )
};

export const SmallButtonOutline = (props) => {
    return(
        <>
            <button 
                {...props}
                href      = {props.href}
                onClick   = {props.onClick}
                disabled  = {props.disabled}
                type      = {props.type}
                value     = {props.value}
                id        = {props.id}
                className = {`${Styles.SmallButtonOutline} ${Styles.Bg_none}`}
            >
                {props.title}
            </button>
        </>
    )
};