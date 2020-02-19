import {Button} from "../components/Button";
import Router from "next/router";

function HiThere() {
  return (
    <p style={{color: 'red'}}>hi there</p>
  )
}

function ReadMore() {
  return (
    <div>
      Click <span onClick={() => Router.push('/blog')}>here</span> to read more!
    </div>
  )
}

const About = () => (
  <div>
    <Button/>
    <HiThere />
    <ReadMore />
  </div>
);

export default About
