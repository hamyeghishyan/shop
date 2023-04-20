import { state } from "..";

export function changeTextInputValue(e) {
    state.firstInput = e.target.value
}
export function changeDateInputValue(e) {
    state.secondInput = e.target.value
}
