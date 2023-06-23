import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class UpdateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ item: {title:""} };
        this.update = props.update;
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e) {
        this.setState({ [e.target.title]: e.target.value });
    }

    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item: thisItem});
        console.log(thisItem);
    }

    onButtonClick = () => {
        this.add(this.state.item);
        this.setState({item: {title: "", author:"", publisher:"", userId:""}});
    }

    enterKeyEventHandler = (e) => {
        if (e.key === 'Enter'){
            this.onButtonClick();
        }
    }

    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({ item: thisItem })
        
    };

    render() {
        return (
            <Paper style={{margin:16, padding:16 }}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField 
                        placeholder="Add title here" 
                        fullWidth
                        onChange={e => this.inputFormHandler(e)}
                        value={this.state.item.title}
                        onKeyPress={this.enterKeyEventHandler}
                        />
                    </Grid>
                    <Grid xs={2} md={1} item>
                        <Button
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        onClick={this.editEventHandler}>
                            제품 수정
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );

    }
}

export default UpdateTodo;