import React from "react";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./SearchBar";
import Display from "./Display";

export default function App() {
    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <SearchBar />
            <Display />
        </Grid>
    );
}
