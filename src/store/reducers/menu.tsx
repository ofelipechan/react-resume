const INITIAL_STATE = { menuOpen: false };

export default function menuReducer(state: any = INITIAL_STATE, action?: any) {
    console.log('reducer', action);
    if(action.type === 'TOGGLE_MENU') {
        return { ...state, menuOpen: !state.menuOpen }
    }
    return state;
}