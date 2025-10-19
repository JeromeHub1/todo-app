import './Navbar.css'

export default function Navbar({ onToggle, isModalOn }) {

  return (
    <nav>
      <h1>My Tasksghdh</h1>
      <button onClick={onToggle}>
        <span>{isModalOn ? <i class="ri-close-fill"></i> : <i class="ri-add-fill"></i>}</span>
      </button>
    </nav>
  );
}