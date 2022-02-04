const initialState = {
    name: "Akbarjon"
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case "SIGN_IN": {
            return {
                ...state,
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}