import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class DeleteTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ item: {title:"", author:"", publisher:""} };
        this.delete = props.delete;
    }

    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item: thisItem});
        console.log(thisItem);
    }

    enterKeyEventHandler = (e) => {
        if (e.key === "Enter"){
            this.deleteEventHandler();
        }
    }

    deleteEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        if (thisItem.title === e.target.value) {
            this.delete(thisItem);
        }
        this.setState({ item: thisItem });
        console.log(thisItem);
    };

    render() {
        return (
            <Paper style={{margin:16, padding:16 }}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField 
                        placeholder="Delete title here" 
                        fullWidth
                        onChange={this.onInputChange}
                        value={this.state.item.title}
                        onKeyPress={this.enterKeyEventHandler} />
                    </Grid>
                    <Grid xs={2} md={1} item>
                        <Button
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        onClick={this.deleteEventHandler}>
                            제품 삭제
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            
        );

    }
}

export default DeleteTodo;