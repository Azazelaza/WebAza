import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <Link to="/">Inicio</Link>
      <Link to="/portafolio">Portafolio</Link>
      <Link to="/sobre-mi">Sobre mi</Link>
      <Link to="/github">Github</Link>
      <Link to="/contacto"></Link>
    </div>
  )
}
