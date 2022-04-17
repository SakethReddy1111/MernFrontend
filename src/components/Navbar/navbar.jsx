import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const Navigate = useNavigate();

  return (
    <div>
      <div
        onClick={() => {
          Navigate("/");
        }}
      >
        Home
      </div>
      <div
        onClick={() => {
          Navigate("/login");
        }}
      >
        Login
      </div>
    </div>
  );
};
