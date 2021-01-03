import React from "react";

class CreateList extends React.Component{
    render() {
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-info"
                    data-toggle="modal"
                    data-target="#myModal"
                >
                    Create New List
                </button>
                <div
                    className="modal fade"
                    id="myModal"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">
                New List
              </span>
                                <button type="button" className="close" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <input
                                    type="text"
                                    placeholder="user"
                                    name="user"
                                    value={this.props.singledata.user}
                                    onChange={this.props.handleChangeUser}
                                />
                                <br />
                                <input
                                    type="text"
                                    placeholder="address"
                                    name="address"
                                    value={this.props.singledata.address}
                                    onChange={this.props.handleChangeAddress}
                                />
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    data-dismiss="modal"
                                    onClick={this.props.createList}
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateList;
