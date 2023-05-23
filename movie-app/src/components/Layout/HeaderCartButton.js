import { useContext, useEffect, useState } from "react"
import CartConText from "../../store/cart-context"
import CartIcon from "../Cart/CartIcon"
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
    const [bumpLight, setBumpLight] = useState(false)
    const cartCtx = useContext(CartConText)
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);

   

    const classesbtn = `${classes.button} ${bumpLight ? classes.bump :''}`

    useEffect(()=> {
        if (items.length === 0) {
            return;
          }
        setBumpLight(true)
       const timerLight =  setTimeout(()=>{
            setBumpLight(false)
        },300)
        return ()=>{
            clearTimeout(timerLight);
        }
    }, [items])

    return (
        <button className={classesbtn} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Giỏ hàng</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}
export default HeaderCartButton