export function setTab(state, payload) {
  state.selectedtab = payload;
}

export function setTask(state, payload) {
  state.tasks = payload;
  console.log("🚀 ~ file: mutations.js:7 ~ setTask ~ payload:", payload);
  localStorage.setItem("task", JSON.stringify(state.tasks));
}

export function appendTask(state, payload) {
  state.tasks.push(payload);
  // localStorage.setItem("task", JSON.stringify(state.tasks));
}

export function setAccessToken(state, payload) {
  state.acess_token = payload;
}

export function setCheckIns(state, payload) {
  state.checke_ins = payload;
}

export function setTasks(state, payload) {
  state.tasks = payload;
}
