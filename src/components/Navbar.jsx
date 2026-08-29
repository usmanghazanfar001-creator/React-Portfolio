import logo from '../assets/logo.png';
const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="#" className="nav-mark">
        <img src={logo} alt="Logo" className="nav-logo" />
        <span className="nav-mark-name">USMAN GHAZANFAR</span>
      </a>
      <ul className="nav-links">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
