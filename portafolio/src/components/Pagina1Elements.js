import styled from "styled-components";
import imagenes from "../assets/imagenes";

export const Section = styled.section`
  background: url(${imagenes.img1});
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background: url(${imagenes.img4});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Ul = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(90deg, #ff4d5a 0.86%, #08213f 101.87%);
  width: 100%;
  list-style: none;
  padding: 20px;
  margin: 0;
  z-index: 999;
  margin-left: ${({ open }) => (open ? "0" : "-100%")};
  transition: all 0.5s;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
