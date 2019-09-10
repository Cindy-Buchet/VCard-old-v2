import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class ParallaxCompetence extends Component{
    render(){
        return (
            <section id="competence" className="section-competence parallax parallax-competence">
                
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2">
                        <ScrollAnimation animateIn='fadeIn'>
                            <p className="texte-parallax">Mes compétences et mes langages acquis</p>
                        </ScrollAnimation>

                    </div>
                </div>
                </div>
            </section>
        
        );
    }
}

