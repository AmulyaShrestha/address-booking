import React, {Component} from "react";
import CreateList from "./AddedList";
import Lists from "./List";
import {observer} from "mobx-react";
import {Address} from "./store/AddressStore";

@observer
class App extends Component {

    endPoint = `http://localhost:3001/address`;

    componentDidMount() {
        this.getAddressList()
    }

    getAddressList() {
        fetch(`${this.endPoint}/`)
            .then(res => res.json())
            .then(result => {
                this.props.store.clearAddress();
                let newAddressList = [];
                result.forEach( value => {
                    newAddressList.push(new Address(value))
                });
                this.props.store.setAddresses(newAddressList);
            }
        ).catch(console.log);
    }

    handleChangeAddress(event) {
        let user = this.props.store.singleAddressData.user;
        let address = this.props.store.singleAddressData.address;
        if (event.target.name === "address") address = event.target.value;

        this.props.store.singleAddressData = {
            id: '',
            user: user,
            address: address
        };
    }

    handleChangeUser(event) {
        let user = this.props.store.singleAddressData.user;
        let address = this.props.store.singleAddressData.address;
        if (event.target.name === "user") user = event.target.value;

        this.props.store.singleAddressData = {
            id: '',
            user: user,
            address: address
        };
    }

    createList() {
        fetch(this.endPoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.props.store.singleAddressData)
        }).then( res => {
            console.log("RESSS", res);
                this.props.store.singleAddressData = {
                    id: '',
                    user: '',
                    address: ''
                };
                this.getAddressList();
        }
        );
    }

    getList(event, id) {
        fetch(`${this.endPoint}/${id}`)
            .then(res => res.json())
            .then(result => {
                this.props.store.singleAddressData = {
                    id: result.id,
                    user: result.user,
                    address: result.address ? result.address : ''
                };
            });
    }

    updateList(event, id) {
        fetch(`${this.endPoint}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.props.store.singleAddressData)
        })
            .then(res => res.json())
            .then(result => {
                this.props.store.singleAddressData = {
                    id: '',
                    user: '',
                    address: ''
                };
                this.getAddressList();
            });
    }

    deleteList(event, id) {
        fetch(`${this.endPoint}/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => {
                this.props.store.singleAddressData = {
                    id: '',
                    user: '',
                    address: ''
                };
                this.getAddressList();
            });
    }

    /*filter(e) {
        this.props.store.filter = e.target.value;
    }*/

    render() {
        const listTable = (
            <Lists
                alldata={this.props.store.addressList}
                singledata={this.props.store.singleAddressData}
                getList={this.getList.bind(this)}
                updateList={this.updateList.bind(this)}
                deleteList={this.deleteList.bind(this)}
                handleChangeUser={this.handleChangeUser.bind(this)}
                handleChangeAddress={this.handleChangeAddress.bind(this)}
            />
        );
        return (
            <div className="container">
                <span className="title-bar">
                    <h4>{this.props.store.filter}</h4>
                    {/*<input type="text" onChange={this.filter.bind(this)}/>*/}
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.getAddressList.bind(this)}>
                      Get Lists
                    </button>
                    <CreateList
                        singledata={this.props.store.singleAddressData}
                        createList={this.createList.bind(this)}
                        handleChangeUser={this.handleChangeUser.bind(this)}
                        handleChangeAddress={this.handleChangeAddress.bind(this)}/>
                </span>
                <br/>
                {listTable}
            </div>
        );
    }
}

export default App;
