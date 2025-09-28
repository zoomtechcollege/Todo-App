import {createSlice} from "@reduxjs/toolkit"


const userSlice = createSlice({
    name: "user",
    initialState: {
        users: localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []
    },
    reducers: {
        addUser: (state, action) => {
            // state.value = state.value + 1
            state.users.push(action.payload)
            localStorage.setItem("users", JSON.stringify(state.users))
        },
        updateUser: (state, action) => {
            const {id, name, email, phone} = action.payload
            const newUsers = state.users.map((user) => {
                if(user.id === id){
                    user.name = name 
                    user.email = email
                    user.phone = phone
                }
                return user 
            })
            state.users = newUsers
        },
        deleteUser: (state, action) => {
            const newUsers = state.users.filter((user) => user.id !== action.payload.id)
            state.users = newUsers
        }
    }
})

export const {addUser, deleteUser, updateUser} = userSlice.actions
export default userSlice.reducer