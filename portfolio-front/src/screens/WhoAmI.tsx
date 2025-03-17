import React, {
    createRef,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { isMobile } from 'react-device-detect';
import { NavLink } from 'react-router-dom';

import '../assets/styles/whoAmI.css';

import Brainstorming from '../assets/images/brainstorming.jpg';
import broderie from '../assets/images/broderie.jpg';
import Landscape from '../assets/images/campagne.jpg';
import Cherry from '../assets/images/cerisier-abeille.jpg';
import Family from '../assets/images/famille.jpg';
import foret from '../assets/images/foret.jpg';
import jardinage from '../assets/images/jardinage.jpg';
import makis from '../assets/images/makis.jpg';
import Computer from '../assets/images/ordinateur.png';
import panthere from '../assets/images/panthere.jpg';
import PlanB from '../assets/images/plan-B.jpg';
import rhino from '../assets/images/rhino.jpg';
import travailCuir from '../assets/images/travail-cuir.jpg';
import travailPapier from '../assets/images/travail-papier.jpg';
import trousseOutils from '../assets/images/trousse-outils.jpg';
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
    { id: 0, src: rhino, alt: 'Rhinocéros blanc' },
    { id: 1, src: makis, alt: 'Makis cattas' },
    {
        id: 2,
        src: panthere,
        alt: 'Panthère des neiges',
    },
];

const hobbiesImagesList = [
    { id: 0, src: jardinage, alt: 'Jardinage' },
    {
        id: 1,
        src: travailPapier,
        alt: 'Travail du papier',
    },
    {
        id: 2,
        src: foret,
        alt: 'Promenades dans la nature',
    },
    {
        id: 3,
        src: broderie,
        alt: 'Broderie à la machine',
    },
    {
        id: 4,
        src: travailCuir,
        alt: 'Travail du cuir',
    },
    { id: 5, src: trousseOutils, alt: 'Bricolage' },
];

export default function WhoAmI(): React.ReactElement {
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRefs = useRef<React.RefObject<HTMLImageElement>[]>([]);
    const [svgElement, setSvgElement] = useState<SVGSVGElement | null>(null);
    const [animalsSliderIndex, setAnimalsSliderIndex] = useState(0);
    const [hobbiesSliderIndex, setHobbiesSliderIndex] = useState(0);
    const [animalsInViewport, setAnimalsInViewport] = useState(false);
    const [hobbiesInViewport, setHobbiesInViewport] = useState(false);

    const svgPoint = useMemo(() => new DOMPoint(), []);

    useEffect(() => {
        window.scrollTo(0, 0);
        imagesRefs.current = Array(9)
            .fill(null)
            .map(() => createRef());
        setSvgElement(document.querySelector('svg'));
    }, []);

    useEffect(() => {
        const whoElementsInViewport =
            document.querySelectorAll('.show-on-scroll');

        const obsOptions = {
            threshold: 0.1, // Element is considered visible when 10% is in view
            rootMargin: '0px 0px -10% 0px', // Slightly reduces the effective viewport
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const entryElement = entry.target as HTMLElement;

                // Only care about elements becoming visible, not leaving the viewport
                if (entry.isIntersecting) {
                    entryElement.classList.add('is-visible');

                    // For specific elements, set state
                    if (entryElement.id === 'animals') {
                        setAnimalsInViewport(true);
                    }

                    if (entryElement.id === 'hobbies') {
                        setHobbiesInViewport(true);
                    }

                    // Once visible, stop observing this element
                    observer.unobserve(entryElement);
                }
            });
        }, obsOptions);

        whoElementsInViewport.forEach((element) => {
            observer.observe(element);
        });

        return (): void => {
            observer.disconnect();
        };
    }, []);

    // Handle animals slider
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | null = null;

        if (animalsInViewport) {
            timer = setInterval(() => {
                setAnimalsSliderIndex(
                    (index) => (index + 1) % animalsImagesList.length
                );
            }, 2000);
        }

        return (): void => {
            if (timer) clearInterval(timer);
        };
    }, [animalsInViewport]);

    // Handle hobbies slider
    useEffect(() => {
        let timer: ReturnType<typeof setTimeout> | null = null;

        if (hobbiesInViewport) {
            timer = setInterval(() => {
                setHobbiesSliderIndex(
                    (index) => (index + 1) % hobbiesImagesList.length
                );
            }, 2000);
        }

        return (): void => {
            if (timer) clearInterval(timer);
        };
    }, [hobbiesInViewport]);

    // Cursor point function
    const cursorPoint = useCallback(
        (e: MouseEvent | TouchEvent, svg: SVGSVGElement): DOMPoint => {
            if (e instanceof MouseEvent) {
                svgPoint.x = e.clientX;
                svgPoint.y = e.clientY;
            } else if (e instanceof TouchEvent && e.touches.length > 0) {
                svgPoint.x = e.touches[0].clientX;
                svgPoint.y = e.touches[0].clientY;
            }
            const screenCTM = svg.getScreenCTM();
            if (screenCTM) {
                return svgPoint.matrixTransform(screenCTM.inverse());
            }
            return svgPoint;
        },
        [svgPoint]
    );

    // Update function
    const update = useCallback((svgCoords: DOMPoint): void => {
        const maskedElement = document.querySelector('#mask-circle');
        const circleFeedback = document.querySelector('#circle-shadow');

        if (maskedElement && circleFeedback) {
            maskedElement.setAttribute('cx', svgCoords.x.toString());
            maskedElement.setAttribute('cy', svgCoords.y.toString());
            circleFeedback.setAttribute('cx', svgCoords.x.toString());
            circleFeedback.setAttribute('cy', svgCoords.y.toString());
        }
    }, []);

    // Set up event listeners
    useEffect(() => {
        if (svgElement) {
            const handleMouseMove = (e: MouseEvent): void => {
                update(cursorPoint(e, svgElement));
            };

            const handleTouchMove = (e: TouchEvent): void => {
                update(cursorPoint(e, svgElement));
            };

            window.addEventListener('mousemove', handleMouseMove, false);
            document.addEventListener('touchmove', handleTouchMove, false);

            return (): void => {
                window.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('touchmove', handleTouchMove);
            };
        }
    }, [svgElement, cursorPoint, update]);

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
                            // alt='Rayons X'
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
                    pandémie de Covid, ce qui ne m'a pas réellement perturbée.
                    Je suis très adaptable et résiliente, et lorsque le plan A
                    ne fonctionne pas... je passe rapidement au plan B !
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
                    disposition pour tout projet d'application ou de site
                    internet.
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
