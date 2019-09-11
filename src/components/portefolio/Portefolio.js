import React, {Component} from 'react';
import "./portefolio.scss";
import 'bootstrap/dist/css/bootstrap.css';
import ParallaxPortefolio from './components-portefolio/parallax';
import Projets from './components-portefolio/projets';

export default class Portefolio extends Component{
    render(){
        return (
            <section id="portfolio">
                <ParallaxPortefolio />
                <Projets />
            </section>
        );
    }
}