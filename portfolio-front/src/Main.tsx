import { Route, Routes } from 'react-router-dom';
import MentionsLegales from './components/MentionsLegales';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Portfolio from './screens/Portfolio';
import Skills from './screens/Skills';
import WhoAmI from './screens/WhoAmI';

export default function Main() {
    return (
        <Routes>
            <Route path='/who' element={<WhoAmI />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/mentions-legales' element={<MentionsLegales />} />
            <Route path='/' element={<Home />} />
        </Routes>
    );
}
