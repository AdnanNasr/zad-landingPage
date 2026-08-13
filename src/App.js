import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/Intro';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import WhyZad from './components/WhyZad';
import MissionMessage from './components/MissionMessage';
import Privacy from './components/Privacy';
import Stats from './components/Stats';
import GithubSection from './components/Github';
import FAQ from './components/FAQ';
import DownloadCTA from './components/Download';
import Footer from './components/Footer';
import SEO from './components/SEO';
import { useTheme } from './context/ThemeContext';

function App() {
  const { colors } = useTheme();
  return(
  <div style={{ backgroundColor: colors.pageBg, transition: 'background-color 0.3s ease' }}>
    <SEO />
    <Navbar/>
    <main>
      <Hero/>
      <Stats/>
      <IntroSection/>
      <Features/>
      <Screenshots/>
      <WhyZad/>
      <div className="px-0 py-20 islamic-pattern" style={{ backgroundColor: colors.pageBg }}>
        <MissionMessage/>
        <Privacy/>
      </div>
      <GithubSection/>
      <FAQ/>
      <DownloadCTA/>
    </main>
    <Footer/>
  </div>
  );
}

export default App;
