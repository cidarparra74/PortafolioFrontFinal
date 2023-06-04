import { Button, Container, Paper, Stack, styled } from "@mui/material";
import image1 from "../../assets/project1.png";
import image2 from "../../assets/project2.png";
import image3 from "../../assets/project3.png";
import image4 from "../../assets/project4.png";
import image5 from "../../assets/project5.png";

import "./styles/styles.css";
import Footer from "../../components/molecules/Footer/Footer";
import Slide from "../../components/molecules/slider/slider";
import { APISERVICE } from "../../services/api.services";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

export default function Project() {
  const [project, setProject] = useState([]);
  const getProject = async (): Promise<void> => {
    let url = "api/project/";
    let params = ``;
    const response = await APISERVICE.get(url, params);

    setProject(response);
    console.log(response.data);
  };
  useEffect(() => {
    getProject();
  }, []);

  return (
    <>
      <Container
        maxWidth="md"
        style={{
          paddingBottom: 120,
        }}>
        <Stack
          maxWidth="md"
          paddingTop="11rem"
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}>
          <Stack spacing={3} className="titles-project" alignItems="start">
            <p className="p-project">Ultimo proyecto</p>
            <h2>CIPSA Electrificaciones</h2>
            <p className="text-project">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              quis non ea, sequi praesentium adipisci eveniet omnis perferendis
              illo consectetur, hic dolorum quam rerum officia ex quos sit
              cupiditate? Ullam?
            </p>
            <Button className="btn-project" variant="contained">
              Ir a CIPSA Electrificaciones
            </Button>
          </Stack>
          <Stack>
            <img className="img-project" src={image1} alt="project 1 " />
          </Stack>
        </Stack>

        <Stack
          maxWidth="md"
          paddingTop="11rem"
          flexWrap="nowrap"
          justifyContent="center"
          alignItems="center"
          spacing={3}>
          <Stack
            spacing={{ xs: 1, sm: 10 }}
            direction="row"
            useFlexGap
            flexWrap="nowrap">
            <Item className="dongato">
              <img src={image2} alt="" />
              <span>12 de Nobiembre 2023</span>
              <h3>DonaGato</h3>
              <p className="text">
                Tenemos más 20 años de experiencia en el ejercicio profesional
                contable, brindando asesoría y consultoría a Personas Físicas y
                Morales.
              </p>
              <button>Visitar DonaGato</button>
            </Item>
            <Item className="adoplas">
              <img src={image3} alt="" />
              <span>12 de Nobiembre 2023</span>
              <h3>Adoplastic</h3>
              <p className="text">
                Tenemos más 20 años de experiencia en el ejercicio profesional
                contable, brindando asesoría y consultoría a Personas Físicas y
                Morales.
              </p>
              <button>Visitar Adoplastic</button>
            </Item>
          </Stack>
          <Stack
            paddingTop={10}
            alignContent="start"
            spacing={{ xs: 1, sm: 10 }}
            direction="row"
            useFlexGap
            flexWrap="nowrap">
            <Item className="imbo">
              <img src={image4} alt=""></img>
              <span>12 de Nobiembre 2023</span>
              <h3>IMBO</h3>
              <p className="text">
                Tenemos más 20 años de experiencia en el ejercicio profesional
                contable, brindando asesoría y consultoría a Personas Físicas y
                Morales.
              </p>
              <button>Visitar IMBO</button>
            </Item>
            <Item className="amservice">
              <img src={image5} alt=""></img>
              <span>12 de Nobiembre 2023</span>
              <h3>AM Servicios contables</h3>
              <p className="text">
                Tenemos más 20 años de experiencia en el ejercicio profesional
                contable, brindando asesoría y consultoría a Personas Físicas y
                Morales.
              </p>
              <button>Visitar AM Servicios contables</button>
            </Item>
          </Stack>
        </Stack>
      </Container>
      <section>
        <Slide />
        <Footer />
      </section>
    </>
  );
}
