import Container from '@mui/material/Container';


import { useState } from 'react';
import CrearUsuario from '../../components/molecules/Usuarios/CrearUsuario/CrearUsuario';
import ListarUsuario from '../../components/molecules/Usuarios/ListarUsuario/ListarUsuario';
import EliminarUsuario from '../../components/molecules/Usuarios/EliminarUsuario/EliminarUsuario';

import ActualizarUsuario from '../../components/molecules/Usuarios/ActualizarUsuario';


export default function Users() {

  const [load, setLoad] = useState(false);
  const [dataEliminar, setDataEliminar] = useState('')
  const [dataModificar, setDataModificar] = useState('')

  return (
    <Container maxWidth="lg" sx={{ mt: 5, marginTop : "69px" }} >
        <CrearUsuario setLoad={setLoad} load={load} />
        <ListarUsuario load={load} setDataEliminar={setDataEliminar} setDataModificar={setDataModificar} />
        <EliminarUsuario dataEliminar={dataEliminar}  load={load} setLoad={setLoad} />
        <ActualizarUsuario dataModificar={dataModificar} setLoad={setLoad} load={load} />
      </Container>

  );
}