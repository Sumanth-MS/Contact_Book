import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'

const ContactsList = ({contact}) => {
    const { name, phone, email, id } = contact
    
    return (
        <tr>
        <td>
            <div>
                <label className="custom-control-label"></label>
                <input type="checkbox" className="custom-control-input" /> 
            </div>
        </td>
        <td> 
            <Avatar className="mr-2" name={name} size="45" round={true} /> {name} 
        </td>
        <td> {phone} </td>
        <td> {email} </td>
        <td className="actions" >
            <Link to={`/contacts/edit/${id}`}>
                <span className="material-icons mr-3"> edit </span>
            </Link>
            <Link to="#">
                <span className="material-icons text-danger"> remove_circle </span>
            </Link>
        </td>
    </tr>
    )
}

export default ContactsList
