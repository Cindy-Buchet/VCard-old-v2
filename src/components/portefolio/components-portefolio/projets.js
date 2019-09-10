import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Projets extends Component{
    render(){
        return (
            <section className="section-competence container">
                <div className="row">
                    <div className="col-12">
                    <ScrollAnimation animateIn='fadeIn'><h2>Portefolio</h2></ScrollAnimation>
                    </div>
                
                    <div className="col-lg-3 col-md-4  col-sm-6">
                        <ScrollAnimation animateIn='fadeIn'>
                            <div className="projets">
                                <a href="https://cindy-buchet.github.io/adopte-un-maitre/" rel="noopener noreferrer"> <img src="./adopte.jpg" alt="Adopte ton maître" />
                                    <div className="text">
                                        <h3>Adopte un maître</h3>
                                        <p>Site où les chats et chiens peuvent adopter leur maître.</p>
                                    </div>
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                
                    <div className="col-lg-3 col-md-4  col-sm-6">
                        <ScrollAnimation animateIn='fadeIn'>
                            <div className="projets">
                                <a href="http://2018.cindy-buchet.dwm.re/iolce/" rel="noopener noreferrer"> <img src="./dave.jpg" alt="Iolce" />
                                    <div className="text">
                                        <h3>Iolce</h3>
                                        <p>Site où j'explique l'histoire d'Internet.</p>
                                    </div>
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                    
                    <div className="col-lg-3 col-md-4  col-sm-6">
                        <ScrollAnimation animateIn='fadeIn'>
                            <div className="projets">
                                <a href="https://totsuka.tk/" rel="noopener noreferrer"> <img src="./totsuka.png" alt="Montrer" />
                                    <div className="text">
                                        <h3>Totsuka</h3>
                                        <p>Site a été réalisé pour mon Discord.</p>
                                    </div>
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <ScrollAnimation animateIn='fadeIn'>
                        <div className="projets">
                            <a href="http://cindybuchet.be/projets/webtypo/montrer/" rel="noopener noreferrer"> <img src="./restaurant.png" alt="Montrer" />
                                <div className="text">
                                    <h3>Japan House</h3>
                                    <p>Site pour un restaurant fictif, réalisé en Bootstrap.</p>
                                </div>
                            </a>
                        </div>
                        </ScrollAnimation>
                    </div>

                </div>
            </section>
        
        );
    }
}

