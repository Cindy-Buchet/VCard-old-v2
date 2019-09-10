import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class ParallaxPortefolio extends Component{
    render(){
        return (
            <section id="competence" className="section-competence parallax parallax-portefolio">
                <div className="container">
                <ScrollAnimation animateIn='fadeIn'>
                    <p className="texte-parallax">Tout les projets réalisés par mes soins</p>
                </ScrollAnimation>
                </div>
            </section>
        
        );
    }
}

