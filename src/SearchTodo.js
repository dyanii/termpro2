import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class SearchTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ item: {title:"", author:"", publisher:""} };
        this.search = props.search;
    }

    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item: thisItem});
        console.log(thisItem);
    }

    onSearchHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        if (thisItem.title === e.target.value) {
            this.search(thisItem);
        }
        this.setState({ [e.target.title]: e.target.value });
        console.log(thisItem);
    };
    

    enterKeyEventHandler = (e) => {
        if (e.key === 'Enter'){
            this.onSearchHandler();
        }
    }

    render() {
        return (
            <Paper style={{margin:16, padding:16 }}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField 
                        placeholder="Search title here" 
                        fullWidth
                        onChange={this.onInputChange}
                        value={this.state.item.title}
                        />
                    </Grid>
                    <Grid xs={1} md={1} item>
                        <Button 
                        fullWidth 
                        color="secondary" 
                        variant="outlined"
                        onClick={this.onSearchHandler}>
                            제품 검색
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            
        );

    }
}

export default SearchTodo;