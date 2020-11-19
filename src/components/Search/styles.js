import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-left: 40px;
  position: relative;
`;

export const Input = styled.input`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 39px;
  padding: 7px 60px 9px 15px;
  border-radius: 2px;
  background-color: #fff;
  font-size: 16px;
  border: 0 rgba(0, 0, 0, 0.2);

  ::placeholder {
    color: #d4d4d4;
  }
`;

export const Products = styled.ul`
  background-color: ${(props) => props.background};
  border-top: solid 1px #e6e6e6;
  position: absolute;
  width: 100%;
  display: block;
  box-shadow: ${(props) => props.shadow};
  padding: 5px;
`;

export const Items = styled.li`
  list-style: none;
  padding: 10px 5px;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    color: #333;
  }

  img {
    max-width: 70px;
    margin-right: 10px;
    border-right: 1px solid #ccc;
    padding-right: 5px;
  }

  :hover {
    background-color: #105cf4;
    a {
      color: #fff;
    }
  }
`;

export const ItemName = styled.p``;

export const Price = styled.p`
  font-weight: bolder;
  color: #ffbf00;
`;
