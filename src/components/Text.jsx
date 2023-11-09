import Typewriter from "typewriter-effect";
import "../pages/style.css";


function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur FrontEnd",
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