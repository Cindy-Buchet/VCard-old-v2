import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Langages extends Component{
    render(){
        return (
            <section className="section-langages container">
                <ScrollAnimation animateIn='fadeIn'>
                <h3>Langages</h3>
                <div className="row">
                    <div className="col-6 col-md-4">
                        <p>HTML5</p>
                        <div className="progress">
                            <div className="progress-bar w-90" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <p>CSS3</p>
                        <div className="progress">
                            <div className="progress-bar w-90" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <p>SASS</p>
                        <div className="progress">
                            <div className="progress-bar w-80" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <p>Bootstrap</p>
                        <div className="progress">
                            <div className="progress-bar w-80" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <p>REACT</p>
                        <div className="progress">
                            <div className="progress-bar w-70" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <p>JavaScript</p>
                        <div className="progress">
                            <div className="progress-bar w-70" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <p>PHP</p>
                        <div className="progress">
                            <div className="progress-bar w-70" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <p>MySQL</p>
                        <div className="progress">
                            <div className="progress-bar w-70" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <p>JSON</p>
                        <div className="progress">
                            <div className="progress-bar w-80" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeIn'>

            <h3>Autres</h3>
                <div className="row">
                    <div className="col-6 col-md-4">
                        <p>Photoshop</p>
                        <div className="progress">
                            <div className="progress-bar w-70" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <p>Wordpress</p>
                        <div className="progress">
                            <div className="progress-bar w-80" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <p>Responsive</p>
                        <div className="progress">
                            <div className="progress-bar w-80" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="col-6 col-md-4">
                        <p>Web Design</p>
                        <div className="progress">
                            <div className="progress-bar w-70" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                </ScrollAnimation>
            </section>
        
        );
    }
}

