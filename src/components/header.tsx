import NLW from '../assets/nlw.svg'
import { NavLink } from './nav-lik'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={NLW} alt="" />

      <nav className="flex items-center gap-5">
        <NavLink href='/eventos' >Eventos</NavLink>
        <NavLink href='/participantes' >Participantes</NavLink>
      </nav>
    </div>
  )
}