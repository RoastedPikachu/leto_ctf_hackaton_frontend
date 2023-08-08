import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Tag {
    id: number,
    tag: string
}
interface Task {
    id: number,
    title: string,
    description: string,
    tags: Tag[],
    points: number,
    flag: string,
    links: '',
    type: 0,
}

interface UserState {
    isSignIn: boolean;
    isAdmin: boolean;
    fullName: string;
    filteredArray: Task[]
}

const initialState: UserState = {
    isSignIn: false,
    isAdmin: false,
    fullName: '',
    filteredArray: [] as Task[]
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeIsSignIn(state: UserState) {
            state.isSignIn = !state.isSignIn;
        },
        changeIsAdmin(state: UserState) {
            state.isAdmin = !state.isAdmin;
        },
        addUserFullName(state: UserState, action: PayloadAction<string>) {
            state.fullName = action.payload;
        },
        setFilteredArr(state: UserState, action: PayloadAction<Task[]>) {
            state.filteredArray = action.payload;
        }
    }
});

export default userSlice.reducer;
