import React from "react";
import "./Games.css";
import imgBuddy from "../../../Media/games/Little-buddy-move-banner_380.jpg";
import { Link } from 'react-router-dom';

const Games:React.FC = () => {
    return (
        <div id="wrap-content" className="wrap-content">
            <div id="content" className="content">
                <ul className="news-gallery">
                    <li> 
                        <Link to="/buddy" title="Little Buddy Move">
                            <img className="lazyload" data-sizes="auto" src={imgBuddy} alt="Little Buddy Move" />
                        </Link>
                        <h2>
                            <Link to="/buddy" title="Little Buddy Move">
                                Little Buddy Move<span>Interactive Music&nbsp;Video<br />by&nbsp;Hidden&nbsp;Orchestra</span>
                            </Link>
                        </h2>
                    </li>

                    <li> 
                        <Link to="/buddy" title="Little Buddy Move">
                            <img className="lazyload" data-sizes="auto" src={imgBuddy} alt="Little Buddy Move" />
                        </Link>
                        <h2>
                            <Link to="/buddy" title="Little Buddy Move">
                                Little Buddy Move<span>Interactive Music&nbsp;Video<br />by&nbsp;Hidden&nbsp;Orchestra</span>
                            </Link>
                        </h2>
                    </li>

                    <li> 
                        <Link to="/buddy" title="Little Buddy Move">
                            <img className="lazyload" data-sizes="auto" src={imgBuddy} alt="Little Buddy Move" />
                        </Link>
                        <h2>
                            <Link to="/buddy" title="Little Buddy Move">
                                Little Buddy Move<span>Interactive Music&nbsp;Video<br />by&nbsp;Hidden&nbsp;Orchestra</span>
                            </Link>
                        </h2>
                    </li>

                    <li> 
                        <Link to="/buddy" title="Little Buddy Move">
                            <img className="lazyload" data-sizes="auto" src={imgBuddy} alt="Little Buddy Move" />
                        </Link>
                        <h2>
                            <Link to="/buddy" title="Little Buddy Move">
                                Little Buddy Move<span>Interactive Music&nbsp;Video<br />by&nbsp;Hidden&nbsp;Orchestra</span>
                            </Link>
                        </h2>
                    </li>

                    <li> 
                        <Link to="/buddy" title="Little Buddy Move">
                            <img className="lazyload" data-sizes="auto" src={imgBuddy} alt="Little Buddy Move" />
                        </Link>
                        <h2>
                            <Link to="/buddy" title="Little Buddy Move">
                                Little Buddy Move<span>Interactive Music&nbsp;Video<br />by&nbsp;Hidden&nbsp;Orchestra</span>
                            </Link>
                        </h2>
                    </li>
                    
                    <li> 
                        <Link to="/buddy" title="Little Buddy Move">
                            <img className="lazyload" data-sizes="auto" src={imgBuddy} alt="Little Buddy Move" />
                        </Link>
                        <h2>
                            <Link to="/buddy" title="Little Buddy Move">
                                Little Buddy Move<span>Interactive Music&nbsp;Video<br />by&nbsp;Hidden&nbsp;Orchestra</span>
                            </Link>
                        </h2>
                    </li>

                </ul>   
            </div>
        </div>

    );
  };
  
export default Games;