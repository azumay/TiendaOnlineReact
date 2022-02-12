import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { useNavigate } from "react-router-dom";
import { ListItemButton } from '@mui/material';

function LlistaItem(props) {
  const { element } = props;

  let navigate = useNavigate();

  return (
    <ListItemButton selected={element.redireccio === window.location.pathname} onClick={() => { navigate(element.redireccio) }}>
      <ListItemIcon> {element.icona} </ListItemIcon>
      <ListItemText primary={element.nom} />
    </ListItemButton>
  );
}

export default function Llista(props) {
  const { elements } = props;

  const divisor = "divider";

  return (
    <List>
      {elements.map((element, index) =>
        <span key={index}>
          {(element.nom === divisor) ? <Divider /> : <LlistaItem element={element} />}
        </span>
      )}
      <Divider />
    </List>
  );
}