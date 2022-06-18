import '../styles/_navbar.scss';
import icon from '../imgs/header-icon.png';

export default function Navbar() {
  return (
    <header>
      <img src={icon} alt='' />
      <p>my travel journal</p>
    </header>
  );
}
