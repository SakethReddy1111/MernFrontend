import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Wrapper } from "./homeCss";

export const Home = () => {
  const navigate = useNavigate();
  const login = useSelector((store) => store.login);
  const [flats, setFlats] = useState([]);
  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get("http://localhost:8000/flats")
      .then((res) => {
        setFlats(res.data);
      })
      .catch((er) => {});
  };

  return (
    <Wrapper>
      <h2>Flats</h2>
      <div>
        Sort by owner type:{" "}
        <select name="" id="">
          <option value="0">All</option>
          <option value="Owner">Owner</option>
          <option value="Tenant">Tenant</option>
        </select>
      </div>
      {flats.map((el, i) => {
        return (
          <div
            className="flat"
            key={i}
            onClick={() => {
              navigate(`/flat/${el._id}`);
            }}
          >
            <div className="img">
              <img src={el.img} alt={""} width="100%" height={"100%"} />
            </div>
            <div className="content">
              <div>
                Owner type: <span>{el.type} </span>
              </div>
              <div>
                Block : <span>{el.block}</span>
              </div>
              <div>
                Apartment Number:<span>{el.number}</span>{" "}
              </div>
              <div>
                residents: <span>{el.residents}</span>
              </div>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};
