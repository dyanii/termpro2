import React from "react";
import { ListItem, ListItemText, InputBase, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import {DeleteOutlined} from "@material-ui/icons";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state= {item: props.item, readOnly: true};
        this.delete = props.delete;
        this.update = props.update;
        this.search = props.search;
    };

    deleteEventHandler = (e) => {
        if (e.title === this.state.item.title) {
            this.delete(this.state.item);
        }
        
    };

    offReadOnlyMode = () => {
        //console.log("Event!", this.state.readOnly)
        this.setState({readOnly: false}, () => {
            console.log("ReadOnly? ", this.state.readOnly)
        });
    };

    editEventHandler = (e) => {
        const thisItem = this.state.item;
        thisItem.title = e.target.value;
        this.setState({item: thisItem});
    };

    editEventHandler1 = (e) => {
        const thisItem = this.state.item;
        thisItem.author = e.target.value;
        this.setState({item: thisItem});
    };

    editEventHandler2 = (e) => {
        const thisItem = this.state.item;
        thisItem.publisher = e.target.value;
        this.setState({item: thisItem});
    };

    enterKeyEventHandler= (e) => {
        if (e.key === "Enter") {
            this.setState({readOnly: true});
            this.update(this.state.item);
        }
    };

    render() {
        const item= this.state.item;
        return (
            <ListItem>
                <ListItemText>
                    <InputBase
                    inputProps ={{"aria-label": "naked",
                                readOnly: this.state.readOnly}}
                    onClick={this.offReadOnlyMode}
                    type="title"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                    onChange={this.editEventHandler}
                    onKeyPress= {this.enterKeyEventHandler}
                    />
                    <InputBase
                    inputProps ={{"aria-label": "naked",
                                readOnly: this.state.readOnly}}
                    onClick={this.offReadOnlyMode}
                    type="author"
                    id={item.id}
                    name={item.id}
                    value={item.author}
                    multiline={true}
                    fullWidth={true}
                    onChange={this.editEventHandler1}
                    onKeyPress= {this.enterKeyEventHandler}
                    />
                    <InputBase
                    inputProps ={{"aria-label": "naked",
                                readOnly: this.state.readOnly}}
                    onClick={this.offReadOnlyMode}
                    type="publisher"
                    id={item.id}
                    name={item.id}
                    value={item.publisher}
                    multiline={true}
                    fullWidth={true}
                    onChange={this.editEventHandler2}
                    onKeyPress= {this.enterKeyEventHandler}
                    />
                    
                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton 
                        aria-label= "Delete Todo"
                        onClick={this.deleteEventHandler}>
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>

            </ListItem>
            
            
        );
    }
}

export default Todo;