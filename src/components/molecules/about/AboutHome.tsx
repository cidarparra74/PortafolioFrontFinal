import "../about/styles/AboutHome.css";
import foto from "../../../assets/perfil.png";
import bg from "../../../assets/BG.png";
import { Button, Container, Stack } from "@mui/material";
import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import PhpIcon from "@mui/icons-material/Php";
import { blue, blueGrey, orange, yellow } from "@mui/material/colors";
import { HtmlSharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


export default function AboutHome() {
  const navigate = useNavigate();
const handleRedirectToAbout=()=>{
  navigate('./about')
 }
  return (
    <div>
      <Container className="container">
        <Stack direction="row" spacing={2}>
          <div className="image-container">
            <img src={bg} className="bg-foto" />
            <img src={foto} alt="perfil" className="foto" />
          </div>

          <div className="about1">
            <div className="text">
              <h3 className="title">Un poco sobre mi</h3>
              <p className="about">
                First of all, I wanted to say thanks for finding time to go
                through my page! Even if we won’t work together, I appreciate
                you considering me. My name is Michael, and I’m a 19-year-old
                freelance UI/UX Designer based in Lublin, Poland. I love helping
                companies of all sizes impact the world positively and bring
                their vision to life through great UI/UX. Conoce más sobre mi.
                <button className="button" onClick={()=>handleRedirectToAbout()}>Conoce mas sobre mi</button>
                </p>
               
              

              <link rel="stylesheet" href="" />
              <h3 className="title-tech1">Tecnologias y Herramientas</h3>
              <Stack direction="row" spacing={2} gap={2}>
                <HtmlSharp
                  sx={{
                    fontSize: "50px",
                    color: orange[500],
                    background: orange[100],
                    borderRadius: "5px",
                  }}
                />
                <CssIcon
                  sx={{
                    borderRadius: "5px",
                    fontSize: "50px",
                    color: blue[500],
                    background: blue[50],
                  }}
                />
                <JavascriptIcon
                  sx={{
                    borderRadius: "5px",
                    fontSize: "50px",
                    background: yellow[500],
                  }}
                />
                <PhpIcon
                  sx={{
                    borderRadius: "5px",
                    fontSize: "50px",
                    color: blueGrey[900],
                    background: blue[500],
                  }}
                />
              </Stack>
            </div>
          </div>
          
        </Stack>
      </Container>
    </div>
  );
}
