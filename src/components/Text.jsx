import Typewriter from "typewriter-effect";
import "../pages/style.css";


function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur Full-Stack",
          "Frontend JavaScript",
          "Backend Python",
          "Assoiffé de savoirs !",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  )
}

export default Text