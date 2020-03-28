import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import api from '../../services/api'

import './styles.css'

export default function Register({history}) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  async function handleSubmit(e){
    e.preventDefault();
    
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }
    
    try {

    const response = await api.post('/ongs', data)

    alert(`ID de acesso: ${response?.data?.id}`)
    history.push('/')
    } catch (error) {
      alert(`Erro ao cadastrar ONG, tente novamente.`)      
    }

      


  }

  return (
    <div className='register-container'>
      <div className="content">
        <section>
          <img src={logoImg} alt='Be The Hero'></img>
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link className='back-link' to='/'>
            <FiArrowLeft size={16} color='#E02041'></FiArrowLeft>
            Já tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Nome da ONG'/>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}  placeholder='E-mail'/>
          <input type="text" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder='Whatsapp'/>

          <div className="input-group">
            <input type="text" name={city} onChange={e => setCity(e.target.value)} placeholder='Cidade'/>
            <input type="text" name={uf} onChange={e => setUf(e.target.value)} placeholder='UF' style={{width: 80}}/>
          </div>

          <button className="button">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
