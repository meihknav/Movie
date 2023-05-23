import { Fragment } from 'react'
import classes from './Header.module.css'
import MealImg from '../../assets/avalon-1.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <Fragment >
        <header className={classes.header}>
            <h1>Thịt ngon ông Khiêm</h1>
            <HeaderCartButton onClick={props.onShow}/>
        </header>
        <div className={classes['main-image']}>
            <img  src={MealImg} alt='Meal Img Poster!!!'></img>
        </div>
        </Fragment>
    )
}

export default Header