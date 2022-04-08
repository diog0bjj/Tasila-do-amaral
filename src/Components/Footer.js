import styled from "styled-components";

const ListItem = styled.li`
  color: #000;

  &:hover {
    font-weight:bold;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items:center;
  background-color: #A9A9A9;
  height:5rem;
`;

function Footer() {
  return (
    <List>
      <ListItem>Sobre</ListItem>
      <ListItem>Galeria</ListItem>
      <ListItem>Home</ListItem>
    </List>
  );
}
export default Footer;