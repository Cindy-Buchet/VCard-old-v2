import React, {Component} from 'react';
import './header.scss';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Header extends Component{
    render(){
        return (
            <header>
                
                <nav className="navbar navbar-expand-md navbar-light">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <p className="navbar-brand">Cindy</p>
                    
                    <div className="collapse navbar-collapse justify-content-between" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#infos">Informations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#competence">Compétences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Portfolio</a>
                        </li>    
                        </ul>
                    </div>  
                </nav>

                <div className="container text-header">
                    <div className="row">
                        <div className="col-md-10 offset-md-1 offset-0 col-12">
                            <ScrollAnimation animateIn='fadeIn'>
                                <h1>Cindy Buchet</h1>
                                <h2>Je suis web developpeuse</h2>
                            </ScrollAnimation>

                        </div>
                    </div>
                </div>
            </header>
        );
    }
}