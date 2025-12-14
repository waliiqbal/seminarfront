import GlassCard from "../components/GlassCard";
import axios from "axios";

export default function Donate() {
  const donate = async (e) => {
    e.preventDefault();
    const f = e.target;

const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/donation/create-checkout-session`,
  {
    amount: Number(f.amount.value),
    donorName: f.name.value,
    donorEmail: f.email.value,
  }
);

    window.location.href = res.data.url;
  };

  return (
    <GlassCard>
      <form onSubmit={donate}>
        <input name="name" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email Address" required />
        <input
          name="amount"
          type="number"
          placeholder="Donation Amount"
          min="1"
          required
        />

        <button className="btn btn-donate" type="submit">
          DONATE
        </button>
      </form>
    </GlassCard>
  );
}
