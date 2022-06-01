import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header >
            <nav className="navbar navbar-expand-sm bg-secondary">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/">E-commerce Page</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav ">
                            <div className="">

                                <Link to="/cart" className="nav-link active text-white-50">Cart </Link>
                            </div>
                        </div >
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header;