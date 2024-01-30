import './Header2.css'; 
import { Link } from 'react-router-dom';

const Header2: React.FC  = () => {
  return (
    <div id="wrap-header" className="wrap-header">
    <div id="header" className="header">
        <div id="logo" className="logo">
            <h1><a className="current" href="/">Infinite Game <span /></a></h1>
        </div>

        <div className="nav">
            <div className="social">
                <ul>
                    <li><a href="https://www.facebook.com/Amanita.Design" className="facebook">Facebook</a></li>
                    <li><a href="https://www.instagram.com/amanita_design_" className="instagram">Instagram</a></li>
                    <li><a href="https://twitter.com/Amanita_Design" className="twitter">Twitter</a></li>
                    <li><a href="https://discordapp.com/invite/Gr4Ec6K" className="discord">Discord</a></li>
					<li><a href="https://www.youtube.com/c/amanitadesign/featured" className="youtube">Youtube</a></li>
                </ul>
            </div>

            <div className="mainmenu">
                <ul>
                    <li className="current"><Link to="/" className="menu01"><span>Home</span></Link></li>
                    <li><Link to="/books" className="menu02"><span>Books</span></Link></li>
                    <li><Link to="/games" className="menu03"><span>Games</span></Link></li>
                </ul>
            </div> 
        </div> 
    </div>
</div>
  );
};

export default Header2;