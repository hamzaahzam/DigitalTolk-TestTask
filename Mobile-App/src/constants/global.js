class Global {
  currentScreen;
  isCallInprogress;
  isLiveEnvironment;
  constructor() {
    this.currentScreen = '';
    this.isCallInprogress = false;
    this.isLiveEnvironment = 0; //For Live Env make it 1 and for debug 0
  }
}
export default new Global();
