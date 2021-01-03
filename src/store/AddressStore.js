import {autorun, computed, observable} from "mobx"

export class Address {
    @observable id
    @observable address
    @observable user

    constructor({id, address, user}) {
        this.address = address
        this.id = id
        this.user = user
    }
}

export class AddressStore {
    @observable addressList = []
    @observable filter = ''
    @observable singleAddressData = {
        id: '',
        address: '',
        user: ''
    }
    @observable loading = false

    setAddress(addressValue) {
        this.addressList.push(new Address(addressValue))
    }

    setAddresses(addressList) {
        this.addressList = addressList;
    }

    clearAddress() {
        this.addressList = []
    }

    clearComplete = () => {
        const incompleteTodos = this.todos.filter(todo => !todo.complete)
        this.todos.replace(incompleteTodos)
    }
}

export default new AddressStore

