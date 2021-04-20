import React from 'react'
import {List, ListItem, ListItemText, ListItemAvatar, Avatar} from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from './firebase'

function Todo({todo}) {
    const handleDelete = function() {
        db.collection('todos').doc(todo.id).delete();
    }
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar />
                </ListItemAvatar>
                <ListItemText key={todo.id} primary={todo.todo} secondary="Due:..." />
            </ListItem>
            <DeleteForeverIcon onClick={handleDelete}/>
        </List>
    )
}

export default Todo
