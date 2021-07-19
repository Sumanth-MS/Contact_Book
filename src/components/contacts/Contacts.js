import React from 'react'
import { useSelector } from 'react-redux'
import ContactsList from './ContactsList'

const Contacts = () => {

    const contacts = useSelector((state) => {
        return state.contact.contacts
        //console.log("testState", state)
    })
//console.log(contacts)

    return (
        <div>
            <table className="table shadow">
                <thead>
                    <tr>
                        <th>
                            <div>
                                <label className="custom-control-label"></label>
                                <input type="checkbox" className="custom-control-input" />
                            </div>
                        </th>
                        <th> Name </th>
                        <th> Phone Number </th>
                        <th> Email </th>
                        <th> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contact) => 
                            (
                                <ContactsList contact={contact} key={contact.id} />
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
