import {Fragment} from 'react';
import "./Header.css";
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
        <header className='header'>
            <h2>React Meals</h2>
            <HeaderCartButton onclicking={props.onShowCart}/>
        </header>
        
        <div className='main-image'>
            <img src={mealsImage} alt='A table full of delicius food!'/>
        </div>
    </Fragment>
  )
}

export default Header;
