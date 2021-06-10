import React, { Component } from 'react';

import '@elastic/eui/dist/eui_theme_light.css';
import {
    EuiPage,
    EuiTextAlign,
    EuiText,
    EuiButton,
    EuiFlexGroup,
    EuiFlexItem,
    EuiPanel,
    EuiFacetButton,
    EuiButtonEmpty,
    EuiSpacer,
    EuiPageBody,
    EuiPageContent,
    EuiPageContentBody,
    EuiHeader,
    EuiTextColor,
    EuiPageContentHeader,
    EuiPageContentHeaderSection,
    EuiTitle,
} from '@elastic/eui';
import axios from 'axios';




class Todo extends Component {
    constructor(props) {
        super(props);
        let user;
        if (localStorage.user) {
            user = JSON.parse(localStorage.user);
        }
        this.state = {
            user: user ? user : " ",
            id: user._id ? user._id : " ",
            Todo: user.todos ? user.todos : []
        }
    }


    addActivity = () => {
        const newItem = document.getElementById("activity").value;
        this.setState({ Todo: [...this.state.Todo, newItem] });
        document.getElementById("activity").value = " ";
    }
    resetList = () => {

        this.setState({ Todo: [] });

    }

    deleteItem = (i) => {
        var ary = this.state.Todo.filter((a, index) => {
            if (index !== i) {
                return true;
            } else {
                return false;
            }
        });
        this.setState({ Todo: ary });
    }

    renderTodoItem() {
        let toDOItems = [];

        for (let i = 0; i < this.state.Todo.length; i++) {
            toDOItems.push(<li className="list-group-item" key={i}>{this.state.Todo[i]}
                <EuiFacetButton quantity={0} onClick={() => this.deleteItem(i)} isSelected />
            </li>);
        }

        return toDOItems;
    }

    save = () => {
        const tasks = this.state.Todo;
        axios.post(' https://todo-electron-backend.herokuapp.com/user/savetasks/' + this.state.id, tasks)
            .then(response => {
                console.log(response.data);
                if (response.data.success === true) {
                    alert("todos saved successfully");
                } else {
                    alert("todos not saved");
                }
            }).catch(error => {
                alert(error);
            });
    }

    render() {
        return (
            <>
                <EuiHeader className="header">
                    <EuiTitle size="l">
                        <EuiTextColor color="accent">To-Do App</EuiTextColor>
                    </EuiTitle>
                    <EuiButtonEmpty onClick={() => this.save()}>
                        Save
                    </EuiButtonEmpty>
                    <EuiTextAlign textAlign="right">
                        <EuiText color="danger" size="l">
                            total tasks
                        </EuiText>
                        <EuiFacetButton quantity={this.state.Todo.length} isSelected />
                    </EuiTextAlign>
                </EuiHeader>
                <ul>{this.renderTodoItem()}</ul>
                <div className="add-activity-container">
                    <div className="add-activity">
                        <label >Add Activity:</label>
                        <input type="text" placeholder="Activity" id="activity" name="type here" ref="doTask" />
                        <button onClick={this.addActivity} type="button" className="btn btn-secondary m-2">Submit</button>
                    </div>
                    <button onClick={this.resetList} type="button" className="reset btn btn-primary " >Reset</button>

                </div>
            </>
        );
    }
}

export default Todo;