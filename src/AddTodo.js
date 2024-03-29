import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ item: {title:"", author:"", publisher:""} };
        this.add = props.add;
    }

    onInputChange = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item: thisItem});
        console.log(thisItem);
    }

    onInputChange1 = (e) => {
        const thisItem = this.state.item;
        thisItem.author = e.target.value;
        this.setState({item: thisItem});
        console.log(thisItem);
    }

    onInputChange2 = (e) => {
        const thisItem = this.state.item;
        thisItem.publisher = e.target.value;
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

    render() {
        return (
            <Paper style={{margin:20, padding:16 }}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField 
                        placeholder="Add title here" 
                        fullWidth
                        onChange={this.onInputChange}
                        value={this.state.item.title}
                        onKeyPress={this.enterKeyEventHandler} />
                    </Grid>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField 
                        placeholder="Add author here" 
                        fullWidth
                        onChange={this.onInputChange1}
                        value={this.state.item.author}
                        onKeyPress={this.enterKeyEventHandler} />
                    </Grid>
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField 
                        placeholder="Add publisher here" 
                        fullWidth
                        onChange={this.onInputChange2}
                        value={this.state.item.publisher}
                        onKeyPress={this.enterKeyEventHandler} />
                    </Grid>

                    <Grid xs={1} md={1} item>
                        <Button 
                        fullWidth 
                        color="secondary" 
                        variant="outlined"
                        onClick={this.onButtonClick}>
                            제품 추가
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            
        );

    }
}

export default AddTodo;