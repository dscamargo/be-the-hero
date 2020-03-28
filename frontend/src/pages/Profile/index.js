import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'

import './styles.css'

export default function Profile({history}) {
  const ongName = localStorage.getItem('ongName')
  const ongId = localStorage.getItem('ongId')

  const [incidents, setIncidents] = useState([])

  useEffect(()=>{
    api.get('/profile', {
      headers: {
        Authorization: ongId
      }
    }).then(result => setIncidents(result.data)) 
  },[ongId])

  async function handleDeleteIncident(id){
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      })
      setIncidents(incidents.filter(incident => incident.id !== id))
      alert('Caso removido com sucesso')
    } catch (error) {
      alert('Erro ao remover caso')
      
    }
  }

  function handleLogout(){
    localStorage.clear();
    history.push('/')
  }

  return (
   <div className="profile-container">
     <header>
       <img src={logoImg} alt='Be The Hero'></img>

       <span>Bem vinda, {ongName}</span>

       <Link to='/incidents/new' className='button'>Cadastrar novo caso</Link>
       <button type='button' onClick={handleLogout}>
         <FiPower size={16} color='#f02041'></FiPower>
       </button>
     </header>

     <h1>Casos cadastrados</h1>

     <ul>
        {incidents?.map(incident => (
          <li key={incident.id}>
            <strong>CASO: </strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO: </strong>
            <p>{incident.description}</p>

            <strong>VALOR: </strong>
            <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

            <button type='button' onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2></FiTrash2>
            </button>
          </li>
        ))}
     </ul>
   </div>
  );
}
