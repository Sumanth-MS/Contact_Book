import { CREATE_CONTACT } from "../constant/types"

//actions
export const addContact = (contact) => {
    return {
      type: CREATE_CONTACT,
      payload: contact
    }
  }


  