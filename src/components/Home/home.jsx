import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Wrapper } from "./homeCss";

export const Home = () => {
  const navigate = useNavigate();
  const login = useSelector((store) => store.login);
  const [flats, setFlats] = useState([]);
  const [type, setType] = useState("all");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [count, setCount] = useState({});

  useEffect(() => {
    getData();
  }, [type, page]);

  const getCount = async () => {
    await axios
      .get(`https://enigmatic-meadow-51097.herokuapp.com/flats/?type=${type}`)
      .then((res) => {
        setCount(res.data.count);
      })
      .catch((er) => {});
  };

  const getData = async () => {
    await axios
      .get(
        `https://enigmatic-meadow-51097.herokuapp.com/flats/all/?type=${type}&page=${page}&limit=${limit}`
      )
      .then((res) => {
        setFlats(res.data);
        getCount();
      })
      .catch((er) => {});
  };

  if (!login) {
    navigate("/login");
  }

  const handletype = (e) => {
    setType(e.target.value);
    setPage(1);
  };

  const handlepage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const decPage = () => {
    let noOf = Math.ceil(count / limit);
    if (noOf > page) {
      setPage(page + 1);
    }
  };

  const handleSort = (e) => {
    let v = Number(e.target.value);
    let temp = [...flats];
    if (v === 1) {
      temp.sort((a, b) => {
        return a.number - b.number;
      });
    }
    if (v === 2) {
      temp.sort((a, b) => {
        return b.number - a.number;
      });
    }
    setFlats(temp);
  };

  return (
    <Wrapper>
      <h2>Flats</h2>
      <div>
        Sort by owner type:{" "}
        <select
          name=""
          id=""
          value={type}
          onChange={(e) => {
            handletype(e);
          }}
        >
          <option value="all">All</option>
          <option value="Tenant">Owner</option>
          <option value="Owner">Tenant</option>
        </select>
        <br />
        Sort by flat no:
        <select
          name=""
          id=""
          onChange={(e) => {
            handleSort(e);
          }}
        >
          <option value="0">--------</option>
          <option value="1">increment</option>
          <option value="2">Decrement</option>
        </select>
      </div>
      <div>
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
      </div>
      <div>
        <button
          onClick={() => {
            handlepage();
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            decPage();
          }}
        >
          Next
        </button>
      </div>
    </Wrapper>
  );
};
