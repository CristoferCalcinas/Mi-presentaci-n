import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

export default function ListItemMio({ item, index }) {
    return (
        <ListItem key={index}>
            <ListItemAvatar>
                <Avatar>
                    <img src={item.image} alt={item.name} style={{ width: '100%' }} />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
                primary={item.name}
                secondary={item.description}
            />
        </ListItem>
    )
}
