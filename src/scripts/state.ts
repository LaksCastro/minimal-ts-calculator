// =============================================================================
// Type, format of state object
// =============================================================================
type state = {
  display: string;
  value: number;
};

// =============================================================================
// Format of listener: any function
// =============================================================================
type listener = (state: state) => any;

// =============================================================================
// Format of function sended to setState method to get new state
// =============================================================================
type getNewState = (currentState: state) => state | state;

// =============================================================================
// Define all State Methods that allow manage the state
// =============================================================================
type StateMethods = {
  getState: () => state;
  setState: (getNewState: getNewState) => void;
  onStateChange: (listener: listener) => void;
};

// =============================================================================
// Define StateFactory type: A function factory that return a readonly object
// =============================================================================
type StateFactory = (initialState: state) => Readonly<StateMethods>;

const StateManager: StateFactory = (initialState: state) => {
  let state: state = initialState;
  let listeners: Array<listener> = [];

  const getState = () => state;

  const setState = (getNewState: getNewState) => {
    const newState =
      typeof getNewState === "function" ? getNewState(getState()) : getNewState;

    state = newState;

    listeners.forEach((listener) => listener(getState()));
  };

  const onStateChange = (listener: listener) => {
    listeners.push(listener);
  };

  const self = {
    getState,
    setState,
    onStateChange,
  };

  return Object.freeze(self);
};

// =============================================================================
// Initialize application State, why the app need only state manager
// =============================================================================
const initialState: state = {
  display: "0",
  value: 0,
};
const ApplicationState = StateManager(initialState);

export default ApplicationState;
