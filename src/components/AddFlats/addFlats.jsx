import axios from "axios";
import { useState } from "react";
import { Wrapper } from "./addFlatscss";

export const AddFlats = () => {
  const [form, setfrom] = useState({
    type: "Owner",
    block: "",
    number: "",
    residents: "",
    img: "",
  });

  const handelFrom = (e) => {
    e.preventDefault();
    let { name, value } = e.target;
    setfrom({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:8000/flats/add", form)
      .then((res) => {
        alert("flat added");
      })
      .catch((er) => {
        alert("fail " + er);
      });
  };

  return (
    <Wrapper>
      <h2>Add Flats</h2>
      <form
        onSubmit={handleSubmit}
        value={form.type}
        onChange={handelFrom}
        className="add"
      >
        <select name="type">
          <option value="Owner">Owner</option>
          <option value="Tenant">Tenant</option>
        </select>
        <input
          type="text"
          placeholder="block"
          name="block"
          value={form.block}
          onChange={handelFrom}
        />
        <input
          type="text"
          placeholder="Flat number"
          name="number"
          value={form.number}
          onChange={handelFrom}
        />
        <input
          type="text"
          placeholder="Image Url"
          name="img"
          value={form.img}
          onChange={handelFrom}
        />
        <input type="submit" value={"Add Flat"} />
      </form>
    </Wrapper>
  );
};
