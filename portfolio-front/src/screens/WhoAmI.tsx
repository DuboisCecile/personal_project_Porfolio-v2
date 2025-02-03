import React, { createRef, useEffect, useMemo, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { NavLink } from 'react-router-dom';

import '../assets/styles/whoAmI.css';

import Brainstorming from '../assets/images/brainstorming.jpg';
import Landscape from '../assets/images/campagne.jpg';
import Cherry from '../assets/images/cerisier-abeille.jpg';
import Family from '../assets/images/famille.jpg';
import Computer from '../assets/images/ordinateur.png';
import PlanB from '../assets/images/plan-B.jpg';
import Yoga from '../assets/images/yoga-01.jpg';
import YogaSkeleton from '../assets/images/yoga_skeleton_basket.png';
import ZooMap from '../assets/images/zoo-map.jpg';

const letterAnim = (
    <div id='letter-container'>
        <div id='animated-mail'>
            <div id='back-fold' />
            <div id='letter'>
                <div id='letter-title'>
                    Bonjour,
                    <br />
                    <br />
                    Je me permets de vous contacter car j'ai un projet de site
                    web pour mon entreprise de construction de
                </div>
            </div>
            <div id='top-fold' />
            <div id='enveloppe-body' />
            <div id='left-fold' />
        </div>
        <div id='shadow' />
    </div>
);

const animalsImagesList = [
    { id: 0, src: '../assets/images/rhino.jpg', alt: 'Rhinocéros blanc' },
    { id: 1, src: '../assets/images/makis.jpg', alt: 'Makis cattas' },
    { id: 2, src: '../assets/images/panthere.jpg', alt: 'Panthère des neiges' },
];

const hobbiesImagesList = [
    { id: 0, src: '../assets/images/jardinage.jpg', alt: 'Jardinage' },
    {
        id: 1,
        src: '../assets/images/travail-papier.jpg',
        alt: 'Travail du papier',
    },
    {
        id: 2,
        src: '../assets/images/foret.jpg',
        alt: 'Promenades dans la nature',
    },
    {
        id: 3,
        src: '../assets/images/broderie.jpg',
        alt: 'Broderie à la machine',
    },
    { id: 4, src: '../assets/images/travail-cuir.jpg', alt: 'Travail du cuir' },
    { id: 5, src: '../assets/images/trousse-outils.jpg', alt: 'Bricolage' },
];

export default function WhoAmI(): React.ReactElement {
    const containerRef = useRef();
    const imagesRefs = useRef([]);
    const [svgElement, setSvgElement] = useState();
    const [animalsSliderIndex, setAnimalsSliderIndex] = useState(0);
    const [hobbiesSliderIndex, setHobbiesSliderIndex] = useState(0);
    const [whoElementsInViewport, setWhoElementsInViewport] = useState(null);
    const [animalsTimerIntervalId, setAnimalsTimerIntervalId] = useState(null);
    const [animalsInViewport, setAnimalsInViewport] = useState(false);
    const [hobbiesTimerIntervalId, setHobbiesTimerIntervalId] = useState(0);
    const [hobbiesInViewport, setHobbiesInViewport] = useState(false);

    const maskedElement = document.querySelector('#mask-circle');
    const circleFeedback = document.querySelector('#circle-shadow');
    const svgPoint = new DOMPoint();

    const cursorPoint = (e, svg): DOMPoint => {
        svgPoint.x = e.clientX;
        svgPoint.y = e.clientY;
        return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
    };

    const update = (svgCoords): void => {
        maskedElement.setAttribute('cx', svgCoords.x);
        maskedElement.setAttribute('cy', svgCoords.y);
        circleFeedback.setAttribute('cx', svgCoords.x);
        circleFeedback.setAttribute('cy', svgCoords.y);
    };

    useEffect(() => {
        if (animalsInViewport && !animalsTimerIntervalId) {
            const animalsTimer = setInterval(() => {
                setAnimalsSliderIndex(
                    (index) => (index + 1) % animalsImagesList.length
                );
            }, 2000);
            setAnimalsTimerIntervalId(animalsTimer);
        } else {
            clearInterval(animalsTimerIntervalId);
            setAnimalsTimerIntervalId(null);
        }
    }, [animalsInViewport, animalsTimerIntervalId]);

    useEffect(() => {
        if (hobbiesInViewport && !hobbiesTimerIntervalId) {
            const hobbiesTimer = setInterval(() => {
                setHobbiesSliderIndex(
                    (index) => (index + 1) % hobbiesImagesList.length
                );
            }, 2000);
            setHobbiesTimerIntervalId(hobbiesTimer);
        } else {
            clearInterval(hobbiesTimerIntervalId);
            setHobbiesTimerIntervalId(null);
        }
    }, [hobbiesInViewport, hobbiesTimerIntervalId]);

    const whoInViewport = (entries) => {
        entries.forEach((entry) => {
            const entryRef = imagesRefs?.current.find(
                (ref) => ref.current?.id === entry.target.id
            );
            if (entryRef) {
                entryRef.current.classList.toggle(
                    'is-visible',
                    entry.intersectionRatio > 0
                );

                if (entry.target.id === 'animals') {
                    if (entry.intersectionRatio > 0) setAnimalsInViewport(true);
                    else setAnimalsInViewport(false);
                }

                if (entry.target.id === 'hobbies') {
                    if (entry.intersectionRatio > 0) setHobbiesInViewport(true);
                    else setHobbiesInViewport(false);
                }
            }
        });
    };

    const obsWho = useMemo(() => new IntersectionObserver(whoInViewport), []);

    const obsOptions = {
        root: containerRef.current,
        threshold: 0.5,
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        imagesRefs.current = [...Array(9)].map(
            (ref, index) => (imagesRefs.current[index] = createRef())
        );
        setSvgElement(document.querySelector('svg'));
        setWhoElementsInViewport(document.querySelectorAll('.show-on-scroll'));

        return () => {
            clearInterval(animalsTimerIntervalId);
            clearInterval(hobbiesTimerIntervalId);
            obsWho.disconnect();
            setWhoElementsInViewport(null);
        };
    }, [animalsTimerIntervalId, hobbiesTimerIntervalId, obsWho]);

    useEffect(() => {
        if (whoElementsInViewport)
            whoElementsInViewport.forEach((element) => {
                obsWho.observe(element, obsOptions);
            });
    }, [whoElementsInViewport]);

    useEffect(() => {
        if (svgElement) {
            window.addEventListener(
                'mousemove',
                (e) => {
                    update(cursorPoint(e, svgElement));
                },
                false
            );

            document.addEventListener(
                'touchmove',
                (e) => {
                    const touch = e.targetTouches[0];
                    if (touch) {
                        update(cursorPoint(touch, svgElement));
                    }
                },
                false
            );
        }
    }, [svgElement]);

    return (
        <div className='page-container' ref={containerRef}>
            <div className='page-content'>
                {isMobile && (
                    <div className='text-block page-title'>Qui suis-je ?</div>
                )}

                {/* Skeleton animation */}
                <div id='who-am-i-container' role='presentation'>
                    <svg
                        className='who-am-i-svg'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <image
                            id='yoga'
                            className='yoga-image'
                            href={Yoga}
                            alt='Rayons X'
                        />
                    </svg>
                    <svg
                        className='who-am-i-svg'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <defs>
                            <clipPath id='mask'>
                                <circle
                                    id='mask-circle'
                                    cx='18%'
                                    cy='18%'
                                    r='10%'
                                    style={{ fill: '#ffffff' }}
                                />
                            </clipPath>
                        </defs>
                        <g clipPath='url(#mask)'>
                            <rect width='100%' height='100%' fill='#272730' />
                            <image className='yoga-image' href={YogaSkeleton} />
                        </g>
                        <circle
                            id='circle-shadow'
                            cx='18%'
                            cy='18%'
                            r='10%'
                            style={{
                                stroke: '#fff',
                                fill: 'transparent',
                                strokeWidth: 5,
                            }}
                        />
                    </svg>
                </div>

                <div className='text-block'>
                    Si, professionnellement, je suis désormais développeuse web
                    et conceptrice d'applications, je ne l'ai pas toujours
                    été,... et je ne suis pas que cela&nbsp;!
                    <br />
                    <br />A l'heure où j'écris ces lignes, je suis en Ardèche,
                    entourée de cerisiers qui commencent à fleurir.
                </div>
                <img
                    id='cherry'
                    ref={imagesRefs.current[0]}
                    className='inline-photo show-on-scroll'
                    src={Cherry}
                    alt='Fleurs de cerisier'
                />
                <div className='text-block'>
                    J'ai toujours vécu à la campagne, je m'y sens très bien, au
                    calme, entourée par la nature.
                </div>
                <img
                    id='countryLandscape'
                    ref={imagesRefs.current[1]}
                    className='inline-photo show-on-scroll'
                    src={Landscape}
                    alt='Paysage de campagne'
                />
                <div className='text-block'>
                    J'ai d'ailleurs travaillé pendant plus de 20 ans dans un
                    parc zoologique, au contact d'animaux fascinants.
                </div>
                <img
                    id='animals'
                    ref={imagesRefs.current[2]}
                    className='inline-photo show-on-scroll'
                    src={animalsImagesList[animalsSliderIndex].src}
                    alt={animalsImagesList[animalsSliderIndex].alt}
                />
                <div className='text-block'>
                    Éthologue de formation, encadrant l'équipe zoologique, le
                    bien-être des animaux ainsi que celui des visiteurs étaient
                    mes priorités.
                </div>
                <img
                    id='family'
                    ref={imagesRefs.current[3]}
                    className='inline-photo show-on-scroll'
                    src={Family}
                    alt='Famille'
                />
                <div className='text-block'>
                    Extrêmement polyvalente, je pouvais passer d'un soin à un
                    animal à l'accueil de groupes de visiteurs, à une réparation
                    de clôture, puis à un dépannage de matériel de sonorisation,
                    avant d'aller remplir les plannings de mon équipe ou les
                    registres des animaux, ou encore accueillir un journaliste.
                </div>
                <img
                    id='zoo-map'
                    ref={imagesRefs.current[4]}
                    className='inline-photo show-on-scroll'
                    src={ZooMap}
                    alt='Plan de zoo'
                />
                <div className='text-block'>
                    Ma sensibilité et ma curiosité naturelles me poussent aussi
                    à pratiquer de nombreux loisirs créatifs, à bricoler, me
                    promener dans la nature, ou encore à jardiner.
                </div>
                <img
                    id='hobbies'
                    ref={imagesRefs.current[5]}
                    className='inline-photo show-on-scroll'
                    src={hobbiesImagesList[hobbiesSliderIndex].src}
                    alt={hobbiesImagesList[hobbiesSliderIndex].alt}
                />
                <div className='text-block'>
                    Mon désir de reconversion a coïncidé avec le début de la
                    pandémie, ce qui ne m'a pas réellement perturbée. Je suis
                    très adaptable et résiliente, et lorsque le plan A ne
                    fonctionne pas... je passe rapidement au plan B !
                </div>
                <img
                    id='planB'
                    ref={imagesRefs.current[6]}
                    className='inline-photo show-on-scroll'
                    src={PlanB}
                    alt='Plan B'
                />
                <div className='text-block'>
                    Toujours à l'écoute des personnes qui m'entourent, que ce
                    soit mes collègues, mes clients ou toute autre personne
                    participant à un projet, j'ai à coeur de fournir un travail
                    de grande qualité, en adéquation avec les besoins, même si
                    ceux-ci doivent évoluer au fil du temps.
                </div>
                <img
                    id='brainstorming'
                    ref={imagesRefs.current[7]}
                    className='inline-photo show-on-scroll'
                    src={Brainstorming}
                    alt='Brainstorming'
                />
                <div className='text-block'>
                    Désormais développeuse web, je mets mes compétences à votre
                    disposition pour tout projet de site internet ou
                    d'application.
                </div>
                <img
                    id='website'
                    ref={imagesRefs.current[8]}
                    className='inline-photo show-on-scroll'
                    src={Computer}
                    alt='Site web'
                />
                <div className='self-center'>
                    <div className='text-block'>
                        N'hésitez pas à me
                        <NavLink className='contact-link' to='/contact'>
                            contacter !
                        </NavLink>
                    </div>
                    {isMobile ? (
                        letterAnim
                    ) : (
                        <NavLink to='/contact'>{letterAnim}</NavLink>
                    )}
                </div>
            </div>
        </div>
    );
}
