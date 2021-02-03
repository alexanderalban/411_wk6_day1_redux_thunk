import React from 'react';
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core';
import { MoreVert } from '@material-ui/icons'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useState } from 'react';


const Import = (props) => {
    // fill out this component

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
      };
    
    const [deletedMake, setDeletedMake] = useState(null);

    const handleDeletes = (index) => {
        props.deleteMake(deletedMake, index)
        setAnchorEl(null);
    }


    return (
        <Container style={{marginTop:'20px'}}>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>Import</Button>
            <h2>
                Count: {props.makes.length}
            </h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((makes) => (
                        <TableRow>
                            <TableCell>{makes.MakeId}</TableCell>
                            <TableCell>{makes.MakeName}</TableCell>
                            <TableCell>
                                <MoreVert onClick={handleClick}></MoreVert>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleDeletes}>DELETE</MenuItem>
                                    <MenuItem onClick={handleClose}>Close</MenuItem>
                                </Menu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import