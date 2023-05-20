import React from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state ={ item: {title:"", author:"", publisher:"", userId:""} };
        this.add = props.add;
        this.retrieve = props.retrieve;
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

    onInputChange3 = (e) => {
        const thisItem = this.state.item;
        thisItem.userId = e.target.value;
        this.setState({item: thisItem});
        console.log(thisItem);
    }

    onButtonClick = () => {
        this.add(this.state.item);
        this.setState({item: {title: "", author:"", publisher:"", userId:""}});
    }

    onButtonSearch = (e) => {
        this.retrieve(this.state.item);
        this.setState({item: {title:""}});
    }
    

    enterKeyEventHandler = (e) => {
        if (e.key === 'Enter'){
            this.onButtonClick();
        }
    }

    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item: thisItem});
    };

    render() {
        return (
            <Paper style={{margin:16, padding:16 }}>
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
                    <Grid xs={11} md={11} item style={{paddingRight:16}}>
                        <TextField 
                        placeholder="Add userId here" 
                        fullWidth
                        onChange={this.onInputChange3}
                        value={this.state.item.userId}
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

                    <Grid xs={2} md={1} item>
                        <Button
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        onClick={this.onButtonSearch}>
                            제품 검색
                        </Button>
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

export default AddTodo;