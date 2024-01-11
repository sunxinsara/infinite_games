import YouTube from "react-youtube";

const VideoDemo = () => {

    const opts = {
        height: '390',
        width: '640',    
        playerVars: {
          autoplay: 1,   
        },
      };
    
      return (
        <div>
          <YouTube videoId="dQw4w9WgXcQ" opts={opts} />
        </div>
      );
  };
  
  export default VideoDemo;