import VideoBackground from "../../VideoBackground.tsx";
import About from "../../About.tsx";
import YouTubeVideo from "../../YoutubeVideo.tsx";
import Contact from "../../contact.tsx"

const Home:React.FC = () => {
    return (
        <div>
            <VideoBackground />
            <About></About>
            <YouTubeVideo videoId="sWZ17Yc379I" /> 
            <Contact />
        </div>

    );
  };
  
export default Home;