const INITIAL_STATE = [
    { id: 1, text: "Fazer café" },
    { id: 2, text: "Estudar react" }
];

export default function todos(state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}
