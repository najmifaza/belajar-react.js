import { Link } from "react-router";

function HomePages() {
  return (
    <div
      className="flex flex-col gap-2 font-bold
    "
    >
      <h1>Ini Home</h1>
      <Link to="/terms">Menuju Halaman Terms</Link>
    </div>
  );
}

export default HomePages;
