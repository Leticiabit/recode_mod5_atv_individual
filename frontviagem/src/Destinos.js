import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Helmet from 'react-helmet';

function Servico() {

    const [servico, setServico] = useState({
      cidade:'',
      pais:'',
      valor:''
    });

    const [servicos, setServicos] = useState([]); 
    const [atualizar, setAtualizar] = useState();

    useEffect(()=>{
      axios.get("http://localhost:8080/api/destino/ ").then(result=>{
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
      axios.post("http://localhost:8080/api/destino/", servico).then(result=>{
      setAtualizar(result);
    })  
    }

    function excluir(id){
      axios.delete("http://localhost:8080/api/destino/"+id).then(result=>{
        setAtualizar(result);
      });
    }

  return (
    <>
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"></link>
    </head>

    <Helmet>      
      <title>destinos</title>
    </Helmet>

    <div className="container">
      
      <h1>Cadastro de Destinos</h1>
      <form onSubmit={handleSubmit}>

        <div className="col-6">
          <div>
            <label className="form-label">Nome da cidade</label>
            <input onChange={handleChange} value={servico.cidade} name="cidade" type="text" className="form-control"/>
          </div>

          <div>
            <label className="form-label">Nome do pais</label>
            <input onChange={handleChange} value={servico.pais} name="pais" type="text" className="form-control"/>
          </div>

          <div>
            <label className="form-label">Preço da viagem</label>
            <input onChange={handleChange} value={servico.valor} name="valor" type="number" className="form-control"/>
          </div>

          <input type="submit" className="btn btn-success" value="Cadastrar"></input>

        </div>

      </form>
    
      <h1>Destinos cadastrados</h1>
      <table className="table">
        <thead>
          <tr key={servico.id}>
            <th scope="col">Cidade</th>
            <th scope="col">Pais</th>
            <th scope="col">Preço</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        <tbody>
          {servicos.map(serv =>(
            <tr>
              <td>{serv.cidade}</td>
              <td>{serv.pais}</td>
              <td>{serv.valor}</td>
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
