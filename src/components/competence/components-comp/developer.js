import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Developer extends Component{
    render(){
        return (
            <section className="section-competence container">
                <ScrollAnimation animateIn='fadeIn'><h2>Mes compétences</h2></ScrollAnimation>
                <div className='row'>
                    <article className="col-12 col-sm-6 col-md-4">
                        <ScrollAnimation animateIn='fadeIn'>
                           <div className="card">
                            <img src="./webdesign.png" className="card-img-top" alt="Web Design" />
                                <div className="card-body">
                                    <h4 className="card-title">Web design</h4>
                                    <p className="card-text">J'aime réaliser la maquette d'un siteweb, faire de l'UX/UI design (persona, user testing, wireframing, prototypes, layout, typographie, ...)</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </article>

                    <article className="col-12 col-sm-6 col-md-4">
                    <ScrollAnimation animateIn='fadeIn'>
                           <div className="card">
                            <img src="./frontend.png" className="card-img-top" alt="Frontend" />
                            <div className="card-body">
                                <h4 className="card-title">Front-end</h4>
                                <p className="card-text">En général, je réalise mon site web avec REACT (ou HTML5), SASS et Bootstrap. Ces 3 langages combinés ensemble rendent le siteweb responsive, rapide et propre.</p>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </article>

                    <article className="col-12 col-sm-6 col-md-4">
                    <ScrollAnimation animateIn='fadeIn'>
                           <div className="card">
                            <img src="./backend.png" className="card-img-top" alt="Backend" />
                            <div className="card-body">
                                <h4 className="card-title">Back-end</h4>
                                <p className="card-text">Ce que je préfère dans le backend c'est gérer des bases de données avec MySQL et PHP. Et gérer des API et JSON.</p>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </article>

                </div>
            </section>
        
        );
    }
}

