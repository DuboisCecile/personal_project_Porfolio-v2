import React, { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

import LogoAPIPlatform from '../assets/images/api_platform_logo.png';
import AppCC_01 from '../assets/images/app-cc_01.jpg';
import AppCC_02 from '../assets/images/app-cc_02.jpg';
import AppCC_03 from '../assets/images/app-cc_03.jpg';
import AppCC_04 from '../assets/images/app-cc_04.jpg';
import AppCC_05 from '../assets/images/app-cc_05.jpg';
import AppCC_06 from '../assets/images/app-cc_06.jpg';
import AppCC_07 from '../assets/images/app-cc_07.jpg';
import AppCC_08 from '../assets/images/app-cc_08.jpg';
import AppCC_09 from '../assets/images/app-cc_09.jpg';
import BoitierCoho from '../assets/images/boitier-coho.jpg';
import Motorhome from '../assets/images/camping-car_isolé.png';
import CaptureEcranGamelle from '../assets/images/capture-ecran-gamelle.png';
import MetalWorkers from '../assets/images/fabrication_metal_red.jpg';
import LogoCoho from '../assets/images/logo-coho-new-blanc.png';
import LogoNode from '../assets/images/logo-Node-blanc.png';
import LogoMariaDB from '../assets/images/mariadb_logo_blanc.png';
import PoolWorkers from '../assets/images/ouvriers_piscines_red.jpg';
import LogoPHP from '../assets/images/PHP_logo.png';
import Pool from '../assets/images/pool.jpg';
import PortableCoho from '../assets/images/portable_coho.jpg';
import LogoPython from '../assets/images/python_logo.png';
import LogoReact from '../assets/images/React_logo.png';
import HeadOfITDevelopment from '../assets/images/responsable_developpements.jpg';
import LogoSage from '../assets/images/sage_logo.png';
import LogoSymfony from '../assets/images/symfony_logo.png';
import '../assets/styles/portfolio.css';

export default function Portfolio(): React.ReactElement {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='page-container'>
            <div className='page-content-portfolio'>
                {isMobile && (
                    <div className='text-block page-title'>Porfolio</div>
                )}
                <section id='pools' className='project'>
                    <div className='section-content'>
                        <img className='framed-img' src={Pool} alt='Piscine' />
                        <div
                            id='hover-pools'
                            className='section-content-portfolio'
                        >
                            <div className='text-block section-title'>
                                Intranet d'un fabricant de liners et de
                                couvertures pour piscines
                            </div>
                            <div className='text-block'>
                                Pendant 2 ans, j'ai fait partie de l'équipe
                                informatique du groupe Platinium II, leader
                                européen de la fabrication de liners et de
                                couvertures pour piscines. J'ai travaillé sur la
                                refonte de l'intranet du groupe, nécessaire aux
                                différents services des 7 sites (6 usines et 1
                                entrepôt de matériel).
                            </div>
                            <div className='text-block with-inline-img strong-italic'>
                                Cet intranet utilisait différentes technologies
                                :
                                <img
                                    className='logo-stack'
                                    src={LogoReact}
                                    alt='Logo React'
                                />
                                {', '}
                                <img
                                    className='logo-stack'
                                    src={LogoSymfony}
                                    alt='Logo Symfony'
                                />
                                {', '}
                                <img
                                    className='logo-stack'
                                    src={LogoAPIPlatform}
                                    alt='Logo API Platform'
                                />
                                {', '}
                                <img
                                    className='logo-stack'
                                    src={LogoMariaDB}
                                    alt='Logo MariaDB'
                                />
                                . Nous communiquions aussi avec une base de
                                données
                                <img
                                    className='logo-stack'
                                    src={LogoSage}
                                    alt='Logo Sage'
                                />
                                {
                                    " afin de mettre à jour cette dernière, ou d'aller y chercher des informations."
                                }
                            </div>
                            <div className='text-block'>
                                J'ai tout d'abord travaillé sur le module "SAV"
                                (Service Après-Vente), qui permet aux clients de
                                signaler un problème sur un produit, et aux
                                techniciens de l'usine de suivre la réparation.
                                <br />
                                Ce module a été conçu en étroite collaboration
                                avec les personnes du service SAV, afin de
                                répondre de la façon la plus précise possible à
                                leurs demandes.
                            </div>
                            <img
                                className='img-resp'
                                src={PoolWorkers}
                                alt='Réparation de piscines'
                            />
                            <div className='text-block'>
                                J'ai aussi refait le "planning" des usines de
                                fabrication de volets de piscines, afin de
                                pouvoir suivre chaque commande de A à Z, c'est à
                                dire de la réception de la commande à la
                                livraison du produit fini.
                            </div>
                            <img
                                className='img-resp'
                                src={MetalWorkers}
                                alt='Travail du métal'
                            />
                            <div className='text-block strong-italic'>
                                Puis, après 14 mois, je suis aussi devenue
                                responsable du développement informatique, dans
                                l'unique équipe informatique du groupe. Je
                                gérais alors les projets de développement
                                informatiques (en interne et en externe),
                                l'équipe de développement interne et je
                                coordonnais les échanges avec les prestataires
                                externes (Sage, commande en ligne, etc.)
                            </div>
                            <img
                                className='img-resp'
                                src={HeadOfITDevelopment}
                                alt='Responsable des développements informatiques'
                            />
                        </div>
                    </div>
                </section>
                <div className='divider' />
                <section id='motorhome' className='project'>
                    <div className='section-content'>
                        <img
                            className='framed-img'
                            src={Motorhome}
                            alt='Camping-car'
                        />
                        <div
                            id='hover-motorhome'
                            className='section-content-portfolio'
                        >
                            <div className='text-block section-title'>
                                Application de commandes de camping-cars
                            </div>
                            <div className='text-block'>
                                J'ai aussi développé une application de gestion
                                de commandes de camping-cars de la part de
                                concessions, auprès de la branche française d'un
                                constructeur italien (qui était mon client).
                            </div>
                            <div className='text-block with-inline-img strong-italic'>
                                J'ai développé cette application seule, en
                                créant le frontend avec
                                <img
                                    className='logo-stack'
                                    src={LogoReact}
                                    alt='Logo React'
                                />
                                , et le backend en
                                <img
                                    className='logo-stack'
                                    src={LogoPHP}
                                    alt='Logo PHP'
                                />
                                .
                            </div>
                            <div className='text-block'>
                                Cette application sert, d'une part, à faire le
                                lien entre le constructeur et ses propres
                                clients, les concessions. Chaque concessionnaire
                                peut directement passer sa commande via
                                l'application.
                                <br />
                                Et d'autre part, elle permet de transmettre
                                toutes les données de commandes au siège, en
                                Italie, où sont localisées les usines.
                                <br />
                                L'application est donc utilisée tout le long du
                                processus de commande.
                            </div>
                            <img
                                className='img-resp'
                                src={AppCC_01}
                                alt='Application camping-cars - contexte'
                            />
                            <div className='text-block strong-italic'>
                                L'algorithme de l'application est
                                particulièrement complexe, car il y a en
                                permanence de nombreuses vérifications croisées
                                à faire &nbsp;!
                            </div>
                            <div className='text-block'>
                                Les concessionnaires doivent pouvoir passer des
                                commandes de véhicules en choisissant différents
                                paramètres tels que la marque (parmi les 4
                                proposées), le châssis et le type de véhicule.
                                L'application leur propose alors différentes
                                gammes, qui contiennent chacune plusieurs
                                modèles.
                            </div>
                            <img
                                className='img-resp'
                                src={AppCC_02}
                                alt='Application camping-cars - Commande'
                            />
                            <div className='text-block'>
                                Un camping-car est quasiment tout le temps
                                personnalisé, grâce à l'ajout d'accessoires.
                                Mais tous les accessoires ne sont pas
                                compatibles avec tous les modèles&nbsp;! Il faut
                                donc que le constructeur puisse indiquer les
                                compatibilités/incompatiblités dans
                                l'application.
                            </div>
                            <img
                                className='img-resp'
                                src={AppCC_03}
                                alt='Application camping-cars - Commande'
                            />
                            <div className='text-block'>
                                Les accessoires ne sont pas tous compatibles
                                entre eux. Ils en nécessitent aussi parfois
                                d'autres pour fonctionner : l'application doit
                                ajouter ces derniers automatiquement. <br />
                                C'est le cas d'un autoradio avec une commande au
                                volant : l'application doit supprimer un
                                éventuel autre autoradio, et elle doit aussi
                                ajouter l'accessoire "commandes au volant", si
                                celui-ci n'est pas déjà inclus dans le véhicule.
                            </div>
                            <img
                                className='img-resp'
                                src={AppCC_04}
                                alt='Application camping-cars - Commande'
                            />
                            <div className='text-block'>
                                Les accessoires sont souvent proposés en packs.
                                Il faut à chaque fois vérifier la compatibilité
                                entre les packs eux-mêmes, ou entre les packs et
                                les accessoires. En effet, on ne peut pas
                                ajouter, en accessoire isolé, un moteur plus
                                puissant que le moteur standard, et en même
                                temps ajouter un pack qui contient aussi un
                                moteur&nbsp;!
                            </div>
                            <img
                                className='img-resp'
                                src={AppCC_05}
                                alt='Application camping-cars - Commande'
                            />
                            <div className='text-block'>
                                J'ai aussi dû gérer les tarifs, qui diffèrent
                                selon plusieurs critères.
                            </div>
                            <img
                                className='img-resp'
                                src={AppCC_06}
                                alt='Application camping-cars - Commande'
                            />
                            <div className='text-block'>
                                L'application, privée, n'est accessible qu'aux
                                administrateurs (le constructeur), et aux
                                concessions clientes. Le constructeur doit
                                pouvoir gérer les différents paramètres liés aux
                                concessions : quelles marques (sur les quatre)
                                cette concession vend-elle ? Quels sont ses
                                prévisions de vente à l'année ?
                            </div>
                            <img
                                className='img-resp'
                                src={AppCC_07}
                                alt='Application camping-cars - Commande'
                            />
                            <div className='text-block'>
                                Enfin, il faut bien évidemment gérer les comptes
                                des administrateurs et des utilisateurs.
                            </div>
                            <img
                                className='img-resp'
                                src={AppCC_08}
                                alt='Application camping-cars - Commande'
                            />
                            <div className='text-block'>
                                Afin de faciliter et automatiser la saisie des
                                données (mises à jour au moins une fois par an),
                                j'ai ajouté des modules d'importation des
                                données à partir des fichiers émis par le siège.
                                J'ai aussi créé des modules d'export, en
                                fichiers Excel ou en PDF, selon les besoins.
                            </div>
                            <img
                                className='img-resp'
                                src={AppCC_09}
                                alt='Application camping-cars - Commande'
                            />
                        </div>
                    </div>
                </section>
                <div className='divider' />
                <section id='coho' className='project'>
                    <div className='section-content'>
                        <img
                            className='framed-img'
                            src={LogoCoho}
                            alt='Logo Coho'
                        />
                        <div
                            id='hover-coho'
                            className='section-content-portfolio'
                        >
                            <div className='text-block section-title'>
                                Sous-traitance d'un bloc d'application pour le
                                boîtier{' '}
                                <a
                                    href='https://www.mycoho.fr/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Coho
                                </a>
                            </div>
                            <div className='text-block'>
                                Le boîtier Coho est un appareil conçu pour
                                surveiller les chevaux au box. Prise de photos,
                                de vidéos, alertes en cas d'ouverture de porte
                                en dehors des heures autorisées ou si le cheval
                                est couché depuis trop longtemps, ce boîtier et
                                son application associée sont de précieux
                                compagnons pour les propriétaires de chevaux.
                            </div>
                            <img
                                className='img-resp'
                                src={BoitierCoho}
                                alt='Boîtier Coho'
                            />
                            <div className='text-block'>
                                Les chevaux sont en effet des animaux fragiles,
                                sensibles à des pathologies telles que les
                                coliques, qui peuvent être léthales si un
                                vétérinaire n'intervient pas au plus vite.
                                <br />
                                C'est pourquoi l'application Coho affiche, grâce
                                à une analyse effectuée par une intelligence
                                artificielle, un relevé du comportement du
                                cheval : ses postures (debout, couché sur le
                                ventre, sur le côté), s'il se couche et se
                                relève souvent (portentiel signe de souffrance),
                                s'il est resté longtemps couché (ce qui peut
                                être anormal pour un animal toujours sur le
                                qui-vive).
                                <br />
                                Les données sont enregistrées toutes les 30
                                secondes, pour chaque cheval.
                            </div>
                            <div className='text-block with-inline-img strong-italic'>
                                J'ai été chargée de coder, en Python
                                <img
                                    className='logo-stack'
                                    src={LogoPython}
                                    alt='Logo Python'
                                />
                                , la correction et le résumé des données brutes
                                renvoyées par les boîtiers.
                            </div>
                            <div className='text-block'>
                                En effet, les données arrivant toutes les 30
                                secondes sont illisibles en l'état (il y a plus
                                de 2800 données pour chaque cheval en
                                24h&nbsp;!).
                                <br />
                                En outre, il faut parfois les corriger en
                                éliminant les données aberrantes. Les box des
                                chevaux sont souvent très poussiéreux, et
                                parfois aussi habités par... des araignées qui
                                s'amusent à fausser les données en se promenant
                                sur le capteur&nbsp;!
                                <br />
                                Le programme de résumé/correction tourne en
                                tâche de fond, en permanence, sur le serveur
                                récoltant les données. Ainsi, les propriétaires
                                peuvent consulter les relevés quand ils le
                                souhaitent, en temps réel, que ce soit lors
                                d'une pause café au travail, ou bien depuis le
                                fond de leur lit à 3h du matin&nbsp;!
                            </div>
                            <img
                                className='img-resp'
                                src={PortableCoho}
                                alt="Capture d'écran de l'application Coho"
                            />
                            <div className='text-block strong-italic'>
                                Le boîtier Coho est utilisé par de nombreux
                                cavaliers, dans leurs écuries habituelles ou
                                bien en concours.
                            </div>
                        </div>
                    </div>
                </section>
                <div className='divider' />
                <section id='portfolio' className='project'>
                    <div className='section-content'>
                        <div className='logo-font framed-img'>
                            Cécile Dubois
                        </div>
                        <div
                            id='hover-portfolio'
                            className='section-content-portfolio'
                        >
                            <div className='text-block section-title'>
                                Ce site !
                            </div>
                            <div className='text-block'>
                                Le site que vous consultez actuellement est
                                probablement le projet le plus personnel que
                                j'ai fait !
                                <br />
                                <br />
                                J'ai choisi de le développer "à la main", c'est
                                à dire sans l'aide de maquette prédéfinie
                                (template) ou de CMS (système de gestion de
                                contenu, de type Wordpress).
                                <br />
                                De même, j'ai voulu faire la mise en forme avec
                                du CSS pur, sans utiliser de bibliothèques
                                telles que Bootstrap ou Tailwind.
                                <br />
                                J'ai ainsi pu totalement personnaliser mon site,
                                sans aucune contrainte ou limitation qui aurait
                                pu être apportée par ces outils.
                            </div>
                            <div className='text-block with-inline-img strong-italic'>
                                J'ai développé ce site en utilisant
                                <img
                                    className='logo-stack'
                                    src={LogoReact}
                                    alt='Logo React'
                                />{' '}
                                pour le frontend, et
                                <img
                                    className='logo-stack'
                                    src={LogoNode}
                                    alt='Logo Node.js'
                                />{' '}
                                pour le backend.
                            </div>
                        </div>
                    </div>
                </section>
                <div className='divider' />
                <section id='others' className='project'>
                    <div className='section-content'>
                        <div className='text-img framed-img'>
                            Autres projets
                        </div>
                        <div
                            id='hover-others'
                            className='section-content-portfolio'
                        >
                            <div className='text-block'>
                                Pendant ma formation à la Wild Code School de
                                Lyon, j'ai développé plusieurs projets, dont un
                                à destination d'un client final.
                                <br />
                                Il s'agissait d'une application permettant de
                                consulter les valeurs nutritionnelles des
                                aliments pour chiens et chats.
                            </div>
                            <img
                                className='img-resp'
                                src={CaptureEcranGamelle}
                                alt='Application Gamelle - Extension'
                            />
                            <div className='text-block strong-italic'>
                                Pour ces projets, nous avons travaillé en
                                groupe, en utilisant une méthodologie Agile
                                (Scrum), de façon à être les plus efficaces
                                possible.
                            </div>
                            <div className='text-block with-inline-img strong-italic'>
                                Nous avons utilisé
                                <img
                                    className='logo-stack'
                                    src={LogoReact}
                                    alt='Logo React'
                                />{' '}
                                pour le frontend, et
                                <img
                                    className='logo-stack'
                                    src={LogoNode}
                                    alt='Logo Node.js'
                                />{' '}
                                pour le backend.
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
