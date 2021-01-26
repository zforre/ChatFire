import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';

function Header() {
    return (
        <header>
            <nav className="">
                <Link className="" to="/">ChatFire</Link>
                <button className="" type="button" data-toggle="collapse" data-target="" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=""></span>
                </button>
                <div className="" id="">
                    {auth().currentUser
                        ? <div className="">
                            <Link className="" to="/chat">Chat Room</Link>
                            <button className="" onClick={() => auth().signOut()}>Logout</button>
                        </div>
                        : <div className="navbar-nav">
                            <Link className="" to="/login">Sign In</Link>
                            <Link className="" to="/signup">Sign Up</Link>
                        </div>}
                </div>
            </nav>
        </header>
    );
}

export default Header;