import React from "react";
import "./Games.css";
import imgBuddy from "../../../Media/games/Little-buddy-move-banner_380.jpg"

const Games:React.FC = () => {
    return (
        <div id="wrap-content" className="wrap-content">
            <div id="content" className="content">
                <ul className="news-gallery">
                    <li> 
                        <a href="/Buddy" title="Little Buddy Move"><img className="lazyload" data-sizes="auto" src={imgBuddy} alt="Little Buddy Move" /></a>
                        <h2><a href="/Buddy" title="Little Buddy Move">Little Buddy Move<span>Interactive Music&nbsp;Video<br />by&nbsp;Hidden&nbsp;Orchestra</span></a></h2>
                    </li>

                    <li> 
                        <a href="/Buddy" title="Little Buddy Move"><img className="lazyload" data-sizes="auto" src={imgBuddy} alt="Little Buddy Move" /></a>
                        <h2><a href="/Buddy" title="Little Buddy Move">Little Buddy Move<span>Interactive Music&nbsp;Video<br />by&nbsp;Hidden&nbsp;Orchestra</span></a></h2>
                    </li>

                    <li> 
                        <a href="/Buddy" title="Little Buddy Move"><img className="lazyload" data-sizes="auto" src={imgBuddy} alt="Little Buddy Move" /></a>
                        <h2><a href="/Buddy" title="Little Buddy Move">Little Buddy Move<span>Interactive Music&nbsp;Video<br />by&nbsp;Hidden&nbsp;Orchestra</span></a></h2>
                    </li>

                    <li> 
                        <a href="/Buddy" title="Little Buddy Move"><img className="lazyload" data-sizes="auto" src={imgBuddy} alt="Little Buddy Move" /></a>
                        <h2><a href="/Buddy" title="Little Buddy Move">Little Buddy Move<span>Interactive Music&nbsp;Video<br />by&nbsp;Hidden&nbsp;Orchestra</span></a></h2>
                    </li>

                    <li> 
                        <a href="/Buddy" title="Little Buddy Move"><img className="lazyload" data-sizes="auto" src={imgBuddy} alt="Little Buddy Move" /></a>
                        <h2><a href="/Buddy" title="Little Buddy Move">Little Buddy Move<span>Interactive Music&nbsp;Video<br />by&nbsp;Hidden&nbsp;Orchestra</span></a></h2>
                    </li>
                    
                    <li> 
                        <a href="/Buddy" title="Little Buddy Move"><img className="lazyload" data-sizes="auto" src={imgBuddy} alt="Little Buddy Move" /></a>
                        <h2><a href="/Buddy" title="Little Buddy Move">Little Buddy Move<span>Interactive Music&nbsp;Video<br />by&nbsp;Hidden&nbsp;Orchestra</span></a></h2>
                    </li>

                </ul>   
            </div>
        </div>

    );
  };
  
export default Games;