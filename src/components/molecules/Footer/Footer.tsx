import logo from "../../../assets/Logo.png";
import "./styles/Footer.css";
import { Stack } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const handleRedirectToAbout = () => {
    navigate("/about");
  };
  const handleRedirectToProject = () => {
    navigate("/projects");
  };
  const handleRedirectToHome = () => {
    navigate("/");
  };
  const handleFacebookClick = () => {
    window.open('https://www.facebook.com', '_blank');

  };
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com', '_blank');
    
  };
  const handleLinkedinClick = ( ) => {
    window.open('https://www.linkedin.com', '_blank');
  }

  return (
    <Stack direction="row" spacing={2}>
      <div className="footer">
        <footer className="section-footer">
          <section className="icons-social">
            <section className="icon">
              <img className="img" src={logo} alt="logo" />
            </section>
            <h3 className="redes">Redes Sociales </h3>

            <Stack direction="row" spacing={2} className="icons" gap={2.5}>
              <button onAuxClick={handleLinkedinClick }>
                <LinkedInIcon
                  sx={{
                    fontSize: "50px",
                    color: blue[800],
                  }}
                />
              </button>
              <button>
                <WhatsAppIcon sx={{ fontSize: "50px", color: green[500] }} />
              </button>
              <button onClick={handleInstagramClick}>
                <InstagramIcon
                  sx={{
                    fontSize: "50px",
                    color: "#E4405F",
                  }}
                />
              </button>
              <button onClick={handleFacebookClick}>
                <FacebookIcon
                  sx={{
                    fontSize: "50px",
                    color: blue[600],
                  }}
                />
              </button>
            </Stack>
          </section>
          <section className="button-footer">
            <div className="link-footer">
              <h3 className="enlace1">Enlaces</h3>
              <button
                className="button-all , btn-about"
                onClick={() => handleRedirectToAbout()}>
                Acerca de mi
              </button>
              <button
                className="button-all , btn-project1"
                onClick={() => handleRedirectToProject()}>
                Proyectos
              </button>
              <button
                className="button-all , btn-home"
                onClick={() => handleRedirectToHome()}>
                Inicio
              </button>
            
            </div>
            <div className="contact">
              <h3 className="contact1">Contactame en:</h3>
              <button className="button-all ">
                <CallIcon />
                <span className="number">+315454545</span>
              </button>
              <button className="button-all">
                <EmailIcon 
                
                  />
                <span className="btn-email"> contacto@gmail.com</span>
              </button>
            </div>
          </section>
        </footer>
      </div>
    </Stack>
  );
}
