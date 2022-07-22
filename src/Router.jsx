import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainbody from 'components/MainBody';
import About from 'components/About';
import Projects from 'components/Projects';
import Contact from 'components/Contact';
import Education from 'components/Education';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainbody />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
