import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import DialogItems from "../Dialogs/DialogItems/DialogItems";
import {ReactComponent as Logo}  from '../../icon/Avatar.svg';

const Navbar = (props) => {
    let friendElements = props.state.dialogs.map (d => <DialogItems name={d.name} id={d.id} />);

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div> 
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.friends}>Friends</div>
            <div className={s.item}>{friendElements}</div>
            <Logo/>
        </nav>
    );
}

export default Navbar;
