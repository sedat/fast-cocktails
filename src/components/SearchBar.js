import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import { FormControl } from "@material-ui/core";

import { searchIngredient, searchName } from "../actions/index";
import { connect } from "react-redux";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            searchType: ""
        };
    }

    handleChange = e => {
        if (e.target.id === "search-value")
            this.setState({ searchValue: e.target.value });
        else this.setState({ searchType: e.target.value });
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.searchType);
        if (this.state.searchType === 1) {
            this.props.searchIngredient(this.state.searchValue);
        } else this.props.searchName(this.state.searchValue);
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <FormControl>
                        <InputLabel>Search by</InputLabel>
                        <Select
                            value={this.state.searchType}
                            onChange={this.handleChange}
                            id="select"
                        >
                            <MenuItem value={0}>Name</MenuItem>
                            <MenuItem value={1}>Ingredient</MenuItem>
                        </Select>
                        <FormHelperText>
                            Search by name or ingredient
                        </FormHelperText>

                        <TextField
                            id="search-value"
                            label="Name"
                            value={this.state.searchValue}
                            onChange={this.handleChange}
                            margin="normal"
                            variant="filled"
                            autoComplete="off"
                        />
                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                        >
                            Search
                        </Button>
                    </FormControl>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    { searchIngredient, searchName }
)(SearchBar);
