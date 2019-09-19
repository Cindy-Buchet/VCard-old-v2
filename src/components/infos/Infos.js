import React, {Component} from 'react';
import "./infos.scss";
import ScrollAnimation from 'react-animate-on-scroll';

export default class Infos extends Component{
    render(){
        return (
            <section id="infos" className="section-infos">
                <ScrollAnimation animateIn='fadeIn'><h2>A mon propos</h2></ScrollAnimation>
                
                <div className="row">
                    <div className="col-md-6">
                    <ScrollAnimation animateIn='bounce'
  initiallyVisible={true}
  animateOnce={true}>
                        <img src="./cindy2.jpg" className="img-infos" alt="Cindy Buchet informations" />
                        <div className="rectangle-fond"></div>
                    </ScrollAnimation>
                    </div>
                    <div className="col-md-6">
                    <ScrollAnimation animateIn='fadeIn'>
                        <p>Je suis passionnée par le développement de projets web. M’intéressant aux nouvelles technologies, je me suis donc tournée vers une formation de web développeuse à Becode.  Je suis à BeCode à Charleroi.</p>
                        <p>J'aime créer un site de A à Z, penser à l'ergonomie et à la mise en place du site en code. Je réalise mes maquettes sur Photoshop avant de coder un site car au moins je sais dans quel direction me diriger une fois que je code. Je suis minutieuse avec le moindre détail, j'aime quand le site respecte les normes graphiques et que mon code soit propre.</p>
                        <p>Grâce à ma formation à BeCode, j'ai pu apprendre à apprendre. J'aime travailler en groupe. Je trouve qu'à plusieurs têtes, on peut créer un magnifique site web surtout si chacun y met sa compétence principale! </p>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeIn'>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><span className="li-gauche">Nom: </span><span className="li-droite">Buchet Cindy</span></li>
                                    <li><span className="li-gauche">Résidence: </span><span className="li-droite">Charleroi</span></li>
                                    <li><span className="li-gauche">Etude: </span><span className="li-droite">BeCode</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><span className="li-gauche">Âge: </span><span className="li-droite">23 ans</span></li>
                                    <li><span className="li-gauche">Hobbies: </span><span className="li-droite">Lecture, écriture</span></li>
                                    <li><span className="li-gauche">Email: </span><span className="li-droite">cindybuchet23@gmail.com</span></li>
                                </ul>
                                
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='fadeIn'>
                        <div className="img__icons">
                            <a href="https://www.linkedin.com/in/cindy-buchet/" > <img className="img-liens" alt="Linkedin" src="./linkedin.png"  /></a>

                            <a href="https://github.com/Cindy-Buchet?tab=repositories" > <img className="img-liens" alt="GitHub" src="./github.png"  /></a>

                            <a href="https://www.facebook.com/Mlle.Anonyme" > <img className="img-liens" alt="Facebook" src="./facebook.png" /></a>
                        </div>
                </ScrollAnimation>
                    </div>
                    
                </div>
            </section>
        );
    }
}
