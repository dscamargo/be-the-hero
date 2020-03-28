import React, {useState} from 'react';
import {FiLogIn} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import api from '../../services/api'

import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

// import { Container } from './styles';

export default function Login({history}) {
  const [id, setId] = useState('')

  async function handleSubmit(e){
    e.preventDefault();

    try{
      const response = await api.post('/sessions', {id})
      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)
      history.push('/profile')
    } catch {
      alert('Falha ao realizar Login')
      setId('')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt='bethehero'></img>

        <form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <input value={id} onChange={e => setId(e.target.value)} placeholder='Sua ID'></input>
          <button className='button' type="submit">Entrar</button>

          <Link className='back-link' to='/register'>
            <FiLogIn size={16} color='#E02041'></FiLogIn>
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt='heroes'></img>
    </div>
  );
}
