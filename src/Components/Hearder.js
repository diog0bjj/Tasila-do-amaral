import styled from "styled-components";

const ListItem = styled.li`
  color: #000;

  &:hover {
    font-weight:bold;
  }
`;

const List = styled.ul`
  position:fixed;
  display: flex;
  justify-content: space-evenly;
  align-items:center;
  background-color:#fff; opacity 0.8;
  height:5rem;
  width:100vw;
`;

function Header() {
  return (
    <List>
      <ListItem>Sobre</ListItem>
      <ListItem>Galeria</ListItem>
      <ListItem>Home</ListItem>
    </List>
  );
}
export default Header;