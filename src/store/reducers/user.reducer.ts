import { UserState } from "../../types/store/user.types";

const initialState: UserState = {
    firstName: '',
    lastName: '',
    email: '',
    isAuthenticated: false,
    loading: false,
};
const userReducer = (state: UserState = initialState, action: any) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                ...action.payload,
            };
        case 'LOGOUT':
            return initialState;
        case 'USER_LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'CREATE_USER':
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
export default userReducer;