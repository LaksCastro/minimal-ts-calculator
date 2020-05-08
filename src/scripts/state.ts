// =============================================================================
// Type, format of State object
// =============================================================================
export type State = {
  display: string;
  value: number;
};

// =============================================================================
// Format of listener: any function
// =============================================================================
export type Listener = (State: State) => any;

// =============================================================================
// Format of function sended to setState method to get new State
// =============================================================================
export type GetNewState = (currentState: State) => State | State;

// =============================================================================
// Define all State Methods that allow manage the State
// =============================================================================
export type StateMethods = {
  getState: () => State;
  setState: (getNewState: GetNewState) => void;
  onStateChange: (listener: Listener) => void;
};

// =============================================================================
// Define StateFactory type: A function factory that return a readonly object
// =============================================================================
type StateFactory = (initialState: State) => Readonly<StateMethods>;

const StateManager: StateFactory = (initialState: State) => {
  let state: State = initialState;
  let listeners: Array<Listener> = [];

  const getState = () => state;

  const setState = (getNewState: GetNewState) => {
    const newState =
      typeof getNewState === "function" ? getNewState(getState()) : getNewState;

    state = newState;

    listeners.forEach((listener) => listener(getState()));
  };

  const onStateChange = (listener: Listener) => {
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
