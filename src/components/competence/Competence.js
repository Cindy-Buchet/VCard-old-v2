import React, {Component} from 'react';
import "./competence.scss";
import 'bootstrap/dist/css/bootstrap.css';
import ParallaxCompetence from './components-comp/parallax';
import Langages from './components-comp/langages'
import Developer from './components-comp/developer';

export default class Competence extends Component{
    render(){
        return (
            <div id="competence">
                <ParallaxCompetence />
                <Developer />
                <Langages />
            </div>
        );
    }
}

