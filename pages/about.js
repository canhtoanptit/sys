import {Button} from "../components/Button";

function HiThere() {
  return (
    <p style={{color: 'red'}}>hi there</p>
  )
}

const About = () => (
  <div>
    <Button/>
    <HiThere />
  </div>
);

export default About
