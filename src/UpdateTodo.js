import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class UpdateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ item: {title:"", author:"", publisher:""} };
        this.update = props.update;
    }

    onUpdate = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ [e.target.title]: e.target.value });
        console.log(thisItem);
    }

    onUpdate1 = (e) => {
        const thisItem = this.state.item;
        thisItem.author = e.target.value;
        this.setState({ [e.target.author]: e.target.value });
        console.log(thisItem);
    }

    onUpdate2 = (e) => {
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

    render() {
        return (
            <Paper style={{margin:16, padding:16 }}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField 
                        placeholder="Update title here" 
                        fullWidth
                        onChange={this.onUpdate}
                        value={this.state.item.title}
                        onKeyPress={this.enterKeyEventHandler}
                        />
                    </Grid>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField 
                        placeholder="Update author here" 
                        fullWidth
                        onChange={this.onUpdate1}
                        value={this.state.item.author}
                        onKeyPress={this.enterKeyEventHandler} />
                    </Grid>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField 
                        placeholder="Update publisher here" 
                        fullWidth
                        onChange={this.onUpdate2}
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