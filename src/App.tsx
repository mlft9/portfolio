import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero 
          name={portfolioData.personal.name}
          title={portfolioData.personal.title}
          description={portfolioData.personal.description}
        />
        <About 
          text={portfolioData.about.text}
          image={portfolioData.personal.image}
        />
        <Projects projects={portfolioData.projects} />
        <Skills skillCategories={portfolioData.skills} />
        <Contact contactInfo={portfolioData.contact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
