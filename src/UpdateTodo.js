import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class UpdateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ item: {title:"", author:"", publisher:""} };
        this.update = props.update;
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e) {
        this.setState({ [e.target.title]: e.target.value });
    }

    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ [e.target.title]: e.target.value });
        console.log(thisItem);
    }

    onInputChange1 = (e) => {
        const thisItem = this.state.item;
        thisItem.author = e.target.value;
        this.setState({ [e.target.author]: e.target.value });
        console.log(thisItem);
    }

    onInputChange2 = (e) => {
        const thisItem = this.state.item;
        thisItem.publisher = e.target.value;
        this.setState({ [e.target.publisher]: e.target.value });
        console.log(thisItem);
    }

    onButtonClick = () => {
        this.update(this.state.item);
        this.setState({ item: {title: "", author:"", publisher:""} });
    }

    enterKeyEventHandler = (e) => {
        if (e.key === 'Enter'){
            this.onButtonClick();
        }
    }

    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem.title })
        
    };

    render() {
        return (
            <Paper style={{margin:16, padding:16 }}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField 
                        placeholder="Update title here" 
                        fullWidth
                        onChange={this.editEventHandler}
                        value={this.state.item.title}
                        onKeyPress={this.enterKeyEventHandler}
                        />
                    </Grid>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField 
                        placeholder="Update author here" 
                        fullWidth
                        onChange={this.onInputChange1}
                        value={this.state.item.author}
                        onKeyPress={this.enterKeyEventHandler} />
                    </Grid>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField 
                        placeholder="Update publisher here" 
                        fullWidth
                        onChange={this.onInputChange2}
                        value={this.state.item.publisher}
                        onKeyPress={this.enterKeyEventHandler} />
                    </Grid>
                    <Grid xs={2} md={1} item>
                        <Button
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        onClick={this.onButtonClick}>
                            제품 수정
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );

    }
}

export default UpdateTodo;