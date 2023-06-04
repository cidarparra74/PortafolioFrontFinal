import CssIcon from "@mui/icons-material/Css";
import JavascriptIcon from "@mui/icons-material/Javascript";
import PhpIcon from "@mui/icons-material/Php";
import { blue, blueGrey, orange, yellow } from "@mui/material/colors";
import { HtmlSharp } from "@mui/icons-material";
import { Container, Stack } from "@mui/material";
import { APISERVICE } from "../../../../services/api.services";
import { useEffect, useState } from "react";
export default function Tecnologias() {
  const [technology, setTechnology] = useState([]);
  const getTechnology = async (): Promise<void> => {
    let url = "api/tecnology/";
    let params = ``;
    const response = await APISERVICE.get(url, params);

    setTechnology(response);
    console.log(response.data);
  };
  useEffect(() => {
    getTechnology();
  }, []);

  return (
    <>
      <Container className="technology">
        <h3 className="title-technology">Tecnologias y Herramientas</h3>
        <div className="icons-rechnology">
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
                fontSize: "50px",
                color: blue[500],
                background: blue[50],
                borderRadius: "5px",
              }}
            />
            <JavascriptIcon
              sx={{
                fontSize: "50px",
                background: yellow[500],
                borderRadius: "5px",
              }}
            />
            <PhpIcon
              sx={{
                fontSize: "50px",
                color: blueGrey[900],
                background: blue[500],
                borderRadius: "5px",
              }}
            />
          </Stack>
        </div>
      </Container>
    </>
  );
}
