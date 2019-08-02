import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function DisplayResult({ drinks }) {
    const returnIngredients = drink => {
        let ind = 0;
        let str = "";
        while (drink["strIngredient" + ++ind] !== "") {
            if (drink["strMeasure" + ind] !== "") {
                str = str + " " + drink["strMeasure" + ind];
                str = str + drink["strIngredient" + ind] + ",";
            } else str = str + drink["strIngredient" + ind];
        }
        return str.substring(0, str.length - 1);
    };
    return (
        <div>
            <Paper>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Coctail</TableCell>
                            <TableCell align="center">Glass</TableCell>
                            <TableCell align="center">Ingredients</TableCell>
                            <TableCell align="center">Instructions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {drinks.map((drink, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {drink.strDrink}
                                </TableCell>
                                <TableCell align="center">
                                    {drink.strGlass}
                                </TableCell>
                                <TableCell
                                    align="center"
                                    dangerouslySetInnerHTML={{
                                        __html: returnIngredients(drink)
                                    }}
                                />
                                <TableCell align="center">
                                    {drink.strInstructions}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
    );
}
