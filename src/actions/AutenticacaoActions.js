import firebase from 'firebase';

export const modificaNome = (texto) =>{
  console.log(texto);
  return{
    type: 'modifica_nome',
    payload: texto
  }
}

export const modificaEmail = (texto) =>{
  return{
    type: 'modifica_email',
    payload: texto
  }
}

export const modificaSenha = (texto) =>{
  return{
    type: 'modifica_senha',
    payload: texto
  }
}

export const cadastraUsuario = ({ nome, email, senha}) => {

  firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then (user => cadastroUsuarioSucesso)
    .catch(erro => cadastroUsuarioErro);

  return{
    type: 'cadastra_usuario'
  }
}


const cadastroUsuarioSucesso = () => {
  console.log("Usuario cadastrado com Sucesso");
}

const cadastroUsuarioErro = () => {
  console.log("Usuario cadastrado com Sucesso");
}
