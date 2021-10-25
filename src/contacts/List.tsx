import { Contact } from "./Contact";
import {
  List,
  ListItem,
  Grid,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import DeleteIcon from "@material-ui/icons/Delete";

interface ContactsListProps {
  list: Contact[];
  onDelete: (contact: Contact) => void;
}

export default function ContactsList({ list, onDelete }: ContactsListProps) {
  return (
    <Grid>
      <Grid item xs={12}>
        <List>
          {list.map((contact: Contact) => {
            return (
              <ListItem key={contact.id}>
                <ListItemAvatar>
                  <Avatar>
                    <AccountCircleIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={contact.nome} secondary={`Idade: ${contact.idade}`} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" onClick={() => onDelete(contact)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
}
