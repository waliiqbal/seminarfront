import GlassCard from "../components/GlassCard";
import axios from "axios";

export default function Register() {
  const submit = async (e) => {
    e.preventDefault();
    const f = e.target;

try {
  await axios.post("http://localhost:5000/api/users", {
    name,
    email,
    phone,
  });

  window.location.href = "/thanks";
} catch (err) {
  if (err.response?.status === 409) {
    alert("You have already submitted the form");
  } else {
    alert("Something went wrong. Please try again.");
  }

}
  }

  return (
    <GlassCard>
      <form onSubmit={submit}>
        <input name="name" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email Address" required />
        <input name="phone" placeholder="Phone #" required />

        <div className="button-row">
          <button className="btn btn-submit" type="submit">
            SUBMIT
          </button>

          <button
            className="btn btn-donate"
            type="button"
            onClick={() => (window.location.href = "/donate")}
          >
            DONATE
          </button>
        </div>
      </form>
    </GlassCard>
  );
}

