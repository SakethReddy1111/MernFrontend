import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Wrapper } from "./flatDetailsCss";

export const FlatsDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const login = useSelector((store) => store.login);

  const [details, setDetails] = useState({});
  const [resients, setResidents] = useState([]);

  useEffect(() => {
    getdetails();
    getResidents();
  }, []);

  if (!login) {
    navigate("/login");
  }

  const getResidents = async () => {
    await axios
      .get(`https://enigmatic-meadow-51097.herokuapp.com/residents/all/${id}`)
      .then((res) => {
        setResidents(res.data);
      });
  };

  const getdetails = async () => {
    await axios
      .get(`https://enigmatic-meadow-51097.herokuapp.com/flats/1/${id}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((er) => {
        alert("Flat not found" + er);
        navigate("*");
      });
  };

  const deleteResident = async (resid) => {
    await axios
      .delete(
        `https://enigmatic-meadow-51097.herokuapp.com/residents/delete/${resid}`
      )
      .then(async (res) => {
        await axios
          .patch(
            `https://enigmatic-meadow-51097.herokuapp.com/flats/edit/delete/${id}`
          )
          .then((res) => {
            getdetails();
            getResidents();
          });
      });
  };

  return (
    <Wrapper>
      <h2>Flats Details</h2>
      <div className="flat">
        <div className="img">
          <img src={details.img} alt={""} />
        </div>
        <div className="content">
          <div>
            Owner type: <span>{details.type} </span>
          </div>
          <div>
            Block : <span>{details.block}</span>
          </div>
          <div>
            Apartment Number: <span>{details.number}</span>
          </div>
          <div>
            residents: <span>{details.residents}</span>
          </div>
        </div>
      </div>
      <div className="but">
        <button
          onClick={() => {
            navigate(`/addResidents/${id}`);
          }}
        >
          Add Residents
        </button>
      </div>
      <div>
        <h2>Residents</h2>
        <div className="resi">
          {resients.map((el, i) => {
            return (
              <div key={i} className="solo">
                <div className="image">
                  <img src={el.img} alt={""} width="100%" height={"100%"} />
                </div>
                <div>
                  <p>Full Name: {el.name} </p>
                  <p>Age : {el.age}</p>
                  <p>Gender: {el.gender}</p>
                  <button
                    onClick={() => {
                      deleteResident(el._id);
                    }}
                  >
                    Delete Resident
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};
