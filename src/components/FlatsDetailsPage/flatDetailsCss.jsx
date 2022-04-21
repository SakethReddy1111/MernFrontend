import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  .flat {
    display: flex;
    width: 100%;
    margin-top: 25px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .img {
    width: 40%;
    heigth: 150px;
  }
  .content {
    text-align: left;
    padding: 15px 0px 10px 15px;
  }
  .content > div {
    font-weight: bold;
    padding-bottom: 7px;
    font-size: 1.25rem;
  }
  .content > div > span {
    font-weight: normal;
  }

  .but {
    margin-top: 15px;
    text-align: right;
  }
  .resi {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 25px;
  }
  .solo {
    text-align: left;
    width: 250px;
  }
  .image {
    width: 100%;
    height: 200px;
  }
`;
