import "../styles/ui.css";
import logo from "../assets/Logo.png";

export default function GlassCard({ children }) {
  return (
    <div className="app-bg">
      <div className="card">
        <img src={logo} alt="Logo" className="logo" />
        {children}
      </div>
    </div>
  );
}

