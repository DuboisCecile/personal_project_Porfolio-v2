import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import WhoAmI from './screens/WhoAmI';
import Contact from './screens/Contact';
import Portfolio from './screens/Portfolio';
import Skills from './screens/Skills';
import MentionsLegales from './components/MentionsLegales';

export default function Main() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/who" element={<WhoAmI />} />
      <Route path="/contact" exact element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
    </Routes>
  );
}
