import { Action } from "@ngrx/store";

export function reducers(state: boolean = false, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case "ConnectUser":
      return (state = true);

    case "DisconnectUser":
      return (state = false);

    default:
      return state;
  }
}
