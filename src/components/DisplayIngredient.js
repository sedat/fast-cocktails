import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function DisplayResult({ ingredient }) {
    const ingr = ingredient["0"];
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ingredients</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key={ingr.idIngredient}>
                        <TableCell component="th" scope="row">
                            {ingr.strIngredient}
                        </TableCell>
                        <TableCell align="center">
                            {ingr.strDescription}
                        </TableCell>
                        <TableCell align="center">{ingr.strType}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
}
