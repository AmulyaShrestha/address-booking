import React from 'react'
import UpdateList from './UpdatedList';
import DeleteList from './DeletedList';

function Lists(props) {
    let rows = [];
    props.alldata.forEach(element => {
        rows.push(
            <tr key={element.id}>
                <td>{element.id}</td>
                <td>{element.user}</td>
                <td>{element.address}</td>
                <td><UpdateList
                    elementId={element.id}
                    singledata={props.singledata}
                    getList={props.getList}
                    updateList={props.updateList}
                    handleChangeUser={props.handleChangeUser}
                    handleChangeAddress={props.handleChangeAddress}></UpdateList></td>
                <td>
                    <DeleteList
                        elementId={element.id}
                        singledata={props.singledata}
                        getList={props.getList}
                        deleteList={props.deleteList}></DeleteList>
                </td>
            </tr>)
    });
    return (
        <table className="table table-striped">
            <thead>
            <tr>
                <th>ID</th>
                <th>User</th>
                <th>Address</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

export default Lists;
