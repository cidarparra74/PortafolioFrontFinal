import "./styles/home.css";
import stroke from "../../components/icons/stroke.svg";
import image from "../../assets/Image.png";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Grid, Stack } from "@mui/material";
import Slide from "../../components/molecules/slider/slider"
import AboutHome from "../../components/molecules/about/AboutHome";
import Footer from "../../components/molecules/Footer/Footer";
import ProjectSlider from "../../components/molecules/projectsSlider/ProjectSlider";




export default function Home() {
  return (
    <div className="container-home">
      <section className="container-project">
        <Stack direction="row" spacing={2}>
          <div className="name-container">
            <h2 className="name">
              Soy diseñador asassasasasUX/UI y soy Desarrollador fullstack
              Developerasasass{" "}
            </h2>
            <button className="btn-mirar">Mira mis proyectos web</button>
          </div>
          <div>
            <img className="image-project" src={image} alt="project img" />
          </div>
        </Stack>
      </section>
      <Container className="container-diferencia">
        <h2 className="title-diferent">¿Que me hace diferente?</h2>
        <Grid
          container
          columnSpacing={{ xs: 3, sm: 3, md: 3 }}
          alignContent="center"
          justifyContent="center"
          textAlign="center">
          <Grid xs={4} spacing={1} className="diseño">
            <img src={stroke} alt="" />
            <h3>Disenio Atractivo</h3>
            <p className="p1">
              El diseño es nuestro principal fuerte ya que nos encargamos que tu
              página web siga los estándares y tendencias internacionales.
            </p>
          </Grid>
          <Grid xs={4} spacing={1} className="web">
            <SearchIcon
              sx={{
                color: "#0591F5",
                fontSize: 55,
                background: "#E1F1FD",
                borderRadius: "12px",
              }}
            />
            <h3>Pocicionamiento web</h3>
            <p className="p1">
              El diseño es nuestro principal fuerte ya que nos encargamos que tu
              página web siga los estándares y tendencias internacionales.
            </p>
          </Grid>
          <Grid xs={4} spacing={1} className="desa">
            <LocalFireDepartmentSharpIcon
              sx={{
                color: "red",
                fontSize: 55,
                background: "#FBD7DD",
                borderRadius: "12px",
              }}
            />
            <h3>Desarrollo eficaz</h3>
            <p className="p1">
              El diseño es nuestro principal fuerte ya que nos encargamos que tu
              página web siga los estándares y tendencias internacionales.
            </p>
          </Grid>
        </Grid>
      </Container>
      
     <ProjectSlider/>
     
      <section>
        <AboutHome />
      </section>
      <section>
         <Slide/>
      </section>
      <Footer />
    </div>
  );
}
