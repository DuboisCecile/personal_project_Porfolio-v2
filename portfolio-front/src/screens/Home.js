import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/home.css';

import WallPoster from '../assets/images/mur_affiche.jpg';
import Mug from '../assets/images/mug.png';

export default function Home() {
  const mugRef = useRef();
  const homeImageRef = useRef();
  const [homeElementsInViewport, setHomeElementsInViewport] = useState(null);

  const homeInViewport = (entries) => {
    entries.forEach((entry) => {
      if (entry.target.id === 'home-image')
        homeImageRef.current?.classList.toggle(
          'home-image-is-inViewport',
          entry.isIntersecting
        );
      if (entry.target.id === 'mug')
        mugRef.current?.classList.toggle(
          'mug-is-inViewport',
          entry.isIntersecting
        );
    });
  };

  const obsHome = new IntersectionObserver(homeInViewport);
  const obsOptions = {
    // threshold: 1,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setHomeElementsInViewport(document.querySelectorAll('.checkVP'));
    return () => {
      setHomeElementsInViewport(null);
      obsHome.disconnect();
    };
  }, []);

  useEffect(() => {
    if (homeElementsInViewport)
      homeElementsInViewport.forEach((element) => {
        obsHome.observe(element, obsOptions);
      });
  }, [homeElementsInViewport]);

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="text-block page-title">Développeuse web</h1>
        <div>
          <img
            id="home-image"
            ref={homeImageRef}
            className="img-resp checkVP"
            src={WallPoster}
            alt="Mur avec des affiches"
          />
        </div>
        <div className="text-block">
          <p>
            Vous cherchez un développeur web pour{' '}
            <span className="strong-text">concevoir votre site internet</span> ?
          </p>
          <p>
            L'informatique vous semble un monde obscur et HTML, CSS, Javascript,
            PHP ou encore Python ne sont pour vous que des gros mots ?
          </p>
          <p>
            Ou bien vous avez besoin d'aide pour{' '}
            <span className="strong-text">concevoir une application</span> ?
          </p>
          <p>Je suis votre homme ! Ou plutôt... je suis votre femme !</p>
          <h2 className="home-h2">
            Développeuse web fullstack, j'aurai à coeur de remplir les missions
            que vous voudrez me confier, tout en vous gardant en permanence
            informé(e) de l'évolution du projet.
          </h2>
          <p>
            Idéalement placée au centre d'un triangle composé de Lyon, Saint
            Etienne et Valence, je peux facilement venir à votre rencontre dans
            ces villes, afin que nous puissions faire connaissance.
            <br />
            Nous pouvons aussi bien-sûr organiser un rendez-vous en visio, quel
            que soit l'endroit où vous êtes situé. N'hésitez pas à me contacter
            <NavLink className="contact-link" path="/contact" to="/contact">
              ici.
            </NavLink>
          </p>
          <h3>
            Vous pouvez d'ores et déjà découvrir mes
            <NavLink className="inline-navlink" to="/portfolio">
              réalisations
            </NavLink>
            , mes
            <NavLink className="inline-navlink" to="/skills">
              services
            </NavLink>
            , et aussi
            <NavLink className="inline-navlink" to="/who">
              qui je suis
            </NavLink>
            . Alors...
          </h3>
        </div>

        <div id="mug" className="checkVP">
          <img ref={mugRef} className="img-resp" src={Mug} alt="Mug" />
        </div>
      </div>
    </div>
  );
}

// développeur web 27%

// 755 mots analysés, 18 mots par phrases, 4 min de lecture

// Pour optimiser le  texte, utilisez en priorité les mots suivants :

// web, développeur, mobile, métier, devenir, emploi, salaire, informatique, développement, internet, professionnel, missions, offres, developpeur, compétences, fonctionnalités, titre, devenez, développeuse, découvrez, informatiques, techniques, réalise, alternance, réalisation, technique, programmation, développer, apprendre, savoir, paris, consiste, full, stack, javascript, expert, concevoir, langages, semaines, développeurs, études, concepteur, agence, programmeur, indeed, nouvelles, conception, html, css, évoluer, orientées, appelé, créer, plateformes, apprenez, niveau, métiers, aujourd,

// Groupes de mots régulièrement utilisés :

// web groupe, aujourd hui, web performant, devenez développeur, formation qualifiante, full stack, fiche métier, apprendre coder, front end, orientation education devenir, education devenir développeur, développeuse web cidj, web quelles différences, développeur web junior, adapte environnement mobile, consultant développeur web, évoluer des applications, applications orientées web, chef de projet, recherche un emploi, site emploi mondial,
