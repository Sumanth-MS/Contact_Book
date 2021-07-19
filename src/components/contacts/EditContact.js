import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addContact} from '../../actions/contactAction'
import shortid from 'shortid'
import { useHistory } from 'react-router'
import { useParams } from 'react-router-dom'

const EditContact = () => {

    let {id} = useParams()
    let history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const createContact = e => {
        e.preventDefault()
        const new_contact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email
        }
        dispatch(addContact(new_contact))
        history.push("/")
    }
    

    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                Add Contact
            </div>
            <div className="card-body">
                <form onSubmit={(e) => createContact(e)}>
                    <div className="form-group">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Enter the Contact Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}   
                        />
                    </div>
                    <div className="from-group">
                        <input 
                            type="tel"
                            className="form-control"
                            placeholder="Enter the Number"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}   
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="email"
                            className="form-control"
                            placeholder="Enter the Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}   
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Edit Contact
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditContact
