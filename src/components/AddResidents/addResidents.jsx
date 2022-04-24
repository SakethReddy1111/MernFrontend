import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const AddResidents = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const login = useSelector((store) => store.login);

  const [res, setres] = useState({
    name: "",
    age: "",
    gender: "male",
    img: "",
    flat: id,
  });

  if (!login) {
    navigate("/login");
  }

  const handleChange = (e) => {
    let { name, value } = e.target;
    setres({ ...res, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://enigmatic-meadow-51097.herokuapp.com/residents/add", res)
      .then((res) => {
        HandleResidents();
        alert("user added");
        navigate(`/flat/${id}`);
        setres({ name: "", age: "", gender: "male", img: "", flat: id });
      })
      .catch((er) => {
        alert("unkown flat" + er);
        navigate("*");
      });
  };

  const HandleResidents = async () => {
    await axios
      .patch(`http://localhost:8000/flats/edit/add/${id}`)
      .then((res) => {})
      .catch((er) => {});
  };

  return (
    <div>
      <h2>Add Resident</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          value={res.name}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={res.age}
          onChange={handleChange}
        />
        <select name="gender" value={res.gender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input
          type="text"
          placeholder="image url"
          name="img"
          value={res.img}
          onChange={handleChange}
        />
        <input type="submit" value={"add resident"} />
      </form>
    </div>
  );
};
