const initialState = {
    photos: [],
    isOpen: false
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'INIT':
            return {photos: [...state.photos, ...action.payload]}
    }
    return state;
}
