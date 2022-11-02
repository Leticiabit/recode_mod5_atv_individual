import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';

function Servico() {

    const [servico, setServico] = useState({
      nome:'',
      celular:'',
      email:''
    });

    const [servicos, setServicos] = useState([]); 
    const [atualizar, setAtualizar] = useState();

    useEffect(()=>{
      axios.get("http://localhost:8080/api/cliente/ ").then(result=>{
        setServicos(result.data);
        console.log(result);
      })
    },[atualizar]);

    function handleChange(event){
      setServico({...servico,[event.target.name]:event.target.value});
    }

    function handleSubmit(event){
      event.preventDefault();
      console.log(servico);
      axios.post("http://localhost:8080/api/cliente/", servico).then(result=>{
      setAtualizar(result);
    })  
    }

    function excluir(id){
      axios.delete("http://localhost:8080/api/cliente/"+id).then(result=>{
        setAtualizar(result);
      });
    }

  return (
    <>
    <head>
      <title>clientes</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
    </head>

    <Helmet>      
      <title>clientes</title>
    </Helmet>
    <div className="container">
      
      <h1>Cadastro de clientes</h1>
      <form onSubmit={handleSubmit}>

        <div className="col-6">
          <div>
            <label className="form-label">Nome do cliente</label>
            <input onChange={handleChange} value={servico.nome} name="nome" type="text" className="form-control"/>
          </div>

          <div>
            <label className="form-label">Celular do cliente</label>
            <input onChange={handleChange} value={servico.celular} name="celular" type="text" className="form-control"/>
          </div>

          <div>
            <label className="form-label">Email do cliente</label>
            <input onChange={handleChange} value={servico.email} name="email" type="email" className="form-control"/>
          </div>

          <input type="submit" className="btn btn-success" value="Cadastrar"></input>

        </div>

      </form>
    
      <h1>Clientes cadastrados</h1>
      <table className="table">
        <thead>
          <tr key={servico.id}>
            <th scope="col">Nome</th>
            <th scope="col">Celular</th>
            <th scope="col">E-mail</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map(serv =>(
            <tr>
              <td>{serv.nome}</td>
              <td>{serv.celular}</td>
              <td>{serv.email}</td>
              <td>
                <button onClick={()=>setServico(serv)} className="btn btn-warning">Alterar</button>
                <button onClick={()=>excluir(serv.id)} className="btn btn-danger">Excluir</button>
              </td>
            </tr>              
          ))}
        </tbody>
      </table>

    </div>
    </>
  );
}

export default Servico;
