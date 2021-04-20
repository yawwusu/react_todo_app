import React from 'react'
import {List, ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core'

function Todo({todo}) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar />
                </ListItemAvatar>
                <ListItemText primary={todo} secondary="Due:..." />
            </ListItem>
        </List>
    )
}

export default Todo
