
import React, { FC, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import IUsuarios from '../../../../interfaces/IUsuarios';
import { APISERVICE } from '../../../../services/api.services';

interface ActualizarUsuarioProps {
  setLoad: any,
  load: boolean,
  dataModificar: number | string,
}

const ActualizarUsuario: FC<ActualizarUsuarioProps> = ({
  setLoad,
  load,
  dataModificar
}) => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({} as IUsuarios);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const consultarPorId = async(idusuario: number | string) => {
    const response = await axios.get(`${import.meta.env.VITE_URL_SERVER}api/users/${idusuario}`);
    setFormData(response.data.user as IUsuarios);
  }

  useEffect(() => {
    if(dataModificar){
      consultarPorId(dataModificar);
    }
    setOpen(dataModificar ? true : false)
  }, [dataModificar])

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Formik
          enableReinitialize
          initialValues={{ 
            nombre: formData.nombre || '', 
            email: formData.email || '',
          }}
          validationSchema={ Yup.object({
            nombre: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            edad: Yup.number()
              .required('Required'),
            descripcion: Yup.string()
              .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
          })}
          onSubmit={async(values, { setSubmitting }) => {
            const response = await APISERVICE.put(`api/users/:id/`, values);
            setLoad(!load);
            setOpen(false);
          }}
        >
          {({
            values,
            errors,
        
            handleChange,
            handleBlur,
            handleSubmit,
         
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogTitle id="alert-dialog-title">
                Actualizar un nuevo usuario
              </DialogTitle>
              <DialogContent>
                  
                  <TextField 
                    sx={{
                      mt: 1
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="Nombre"
                    name="nombre"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nombre}
                    error={Boolean(errors.nombre)}
                    helperText={errors.nombre}
                  />

                  <TextField 
                    sx={{
                      mt: 3
                    }}
                    fullWidth
                    id="outlined-basic"
                    label="E-mail"
                    name="email"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                  />
              
              </DialogContent>
              <DialogActions>
                <Button type="submit" >
                  Actualizar 
                </Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}

export default ActualizarUsuario;