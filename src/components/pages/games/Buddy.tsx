import "./Buddy.css"

const Buddy:React.FC = () => {
    return (
    <div id="content" className="content content--game">
        <div className="game-content-container">
            <div className="video" >
                <iframe width="620" height="349" src="https://www.youtube.com/embed/sWZ17Yc379I?rel=0&hide=1&showinfo=0" ></iframe>
            </div>   
            <div className="game-section game-desc taC borderB">
                <h2 className="no-margin">Phonopolis</h2>      
                <h2><span>A hand-crafted adventure game<br />(in development)</span></h2>      
                <p className="">Stand up against The Leader’s oppressive rule.</p>
            </div>
            <div className="game-section direct-bundles creaks-sans">
                <div className="direct-bundles--container">
                    <div className="direct-bundles--item taC">
                        <div className="direct-bundles--item---head">
                            <h2>Collector's<br />Edition</h2>
                            <h5 className="highlight">incl. Soundtrack</h5>
                        </div>
                        <div className="direct-bundles--item---desc">
                            <h4>Win / Mac / Linux</h4>
                            <h5>+ Steam Key</h5>
                        </div>
                        <div className="widget-container shadow-btn">
                            <a className="widget" data-fancybox="" data-type="iframe" href="https://www.humblebundle.com/widget/v2/product/pilgrims_widget/CNOpbPVgiS?theme=light">
                                <span className="buy-btn caps shadow-btn highlight">download</span>
                                <span className="price highlight">$7</span>
                            </a>
                        </div>
                    </div>
                    <div className="direct-bundles--item taC">
                        <div className="direct-bundles--item---head">
                            <h2>Standard<br />Edition</h2>
                        </div>
                        <div className="direct-bundles--item---desc">
                            <h4>Win / Mac</h4>
                            <h5>+ Steam Key</h5>
                        </div>
                        <div className="widget-container shadow-btn">
                            <a className="widget" data-fancybox="" data-type="iframe" href="https://www.humblebundle.com/widget/v2/product/happy-game-standard/mN4oxbcZ9W?theme=light" >
                            <span className="buy-btn caps shadow-btn highlight">download</span>
                            <span className="price highlight">$13</span>
                            </a>
                        </div>
                    </div>
                    <div className="direct-bundles--item taC">
                            <div className="direct-bundles--item---head">
                                <h2>Soundtrack<br />+&nbsp;Art&nbsp;Book</h2>
                            </div>
                            <div className="direct-bundles--item---desc">
                                <h4>mp3 / FLAC + pdf</h4>
                            </div>
                            <div className="widget-container shadow-btn">
                                <a className="widget" data-fancybox="" data-type="iframe" href="https://www.humblebundle.com/widget/v2/product/happy-game-ost/Gpp5oOdLk6?theme=light">
                                    <span className="buy-btn caps shadow-btn highlight">download</span>
                                    <span className="price highlight">$7</span>
                                </a>
                            </div>
                    </div>
                </div>
                
            </div>
            <div className="game-section borderT">
                <div className="storefronts">
                    <div className="storefronts-item" >
                        <a className="storefronts-item-link storefronts-item-link--steam" href="https://store.steampowered.com/" title="HomePage">steam</a>
                    </div>
                    <div className="storefronts-item" >
                        <a className="storefronts-item-link storefronts-item-link--steam" href="https://store.steampowered.com/" title="HomePage">steam</a>
                    </div>
                    <div className="storefronts-item" >
                        <a className="storefronts-item-link storefronts-item-link--steam" href="https://store.steampowered.com/" title="HomePage">steam</a>
                    </div>
                </div>
            </div>
        </div> 
    </div>

    );
  };
  
export default Buddy;