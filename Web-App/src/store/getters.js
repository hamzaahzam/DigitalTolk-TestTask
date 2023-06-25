export function getTabs(state) {
  return state.tabs;
}

export function getSelectedTab(state) {
  return state.selectedtab;
}

export function getTask(state) {
  console.log("🚀 ~ file: getters.js:10 ~ getTask ~ state:", state);
  return state.tasks;
}

export function getAccessToken(state) {
  return state.acess_token;
}

export function getCheckins(state) {
  return state.checke_ins;
}
