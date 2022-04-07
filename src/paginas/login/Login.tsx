import React, {ChangeEvent, useState, useEffect} from "react";
import './Login.css';
import { Typography, TextField, Button, Grid, Box } from "@material-ui/core";
import { Link, useHistory } from 'react-router-dom';
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Service";
import UserLogin from "../../models/UseLogin";

function Login() {

    let history = useHistory();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: "",
            senha: "",
            token: ""
        }
        )

        function updatedModel(e: ChangeEvent<HTMLInputElement>) {
            
            setUserLogin({
                ...userLogin,
                [e.target.name]: e.target.value
            })
        }
            useEffect(()=>{
                if(token != ''){
                    history.push('/home')
                }
            }, [token])

        async function onSubmit(e: ChangeEvent<HTMLFormElement>){
            e.preventDefault();
           
            try{
                
               await login(`/usuarios/logar`, userLogin, setToken)

                alert('Usuário logado com sucesso!')

            }catch(error){
                
                alert('Dados do usuário inconsistentes. Erro ao logar!')
           
            }
        }

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="texto-cadastrar">Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="usuário" variant="outlined" name="usuario" margin="normal" fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" type="password" fullWidth />
                        <Box textAlign="center" marginTop={2}>
                            <Button type="submit" variant="contained" color='primary'>
                                Entrar
                             </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant="subtitle1" gutterBottom align="center">Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrar'>
                            <Typography variant="subtitle1" gutterBottom align="center" className="texto-cadastrar">
                                Cadastre-se
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} className='img-cuscuz'>
            </Grid>
        </Grid>
    )
}

export default Login;