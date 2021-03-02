import React from 'react';
import './Header.scss';
import Button from "../Button/Button";

function Header(){
    return(
        <header className={'header'} >
            <a className={'left'} href={'http://localhost:3000/'} title={'Rapid Poll'}></a>
            <div className={'mid'}>
                create Poll
            </div>
            <div className={'right'}>
                <Button onClick={()=>{}}>login</Button>
                <Button filled onClick={()=>{}}>signUp</Button>
            </div>
        </header>
    )
}

export default Header;