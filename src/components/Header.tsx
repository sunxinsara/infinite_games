import './Header.css'; 
import logo from '../Media/favicon_io/LOGO192X192.png'

const Header = () => {
  return (
    <header className="header">
      <div  className="header-logo">
        <a href="/" title="Home">
          <img src = {logo} alt="Infinite Game"  />
          <span>Infinite Game</span>
        </a>
      </div>

      <nav className="header-nav">
      <div className='social'>
            <ul>
              <li><a href="https://www.facebook.com/Amanita.Design" className="facebook">Facebook</a></li>
              <li><a href="https://www.instagram.com/amanita_design_" className="instagram">Instagram</a></li>
              <li><a href="https://twitter.com/Amanita_Design" className="twitter">Twitter</a></li>
              <li><a href="https://discordapp.com/invite/Gr4Ec6K" className="discord">Discord</a></li>
            <li><a href="https://www.youtube.com/c/amanitadesign/featured" className="youtube">Youtube</a></li>
            </ul>
          </div>
        <div className='mainmenu'>
          <ul>
            <a href="/">Home<span /></a>
            <a href="/books">Books<span /></a>
            <a href="/games">Games<span /></a>
          </ul>

        </div>
      </nav>
      <div className="header-icons">
        {/* Insert social media icons here */}
        <a href="https://facebook.com">
          {/* SVG or icon for Facebook */}
        </a>
        {/* Repeat for other social networks */}
      </div>
    </header>
  );
};

export default Header;