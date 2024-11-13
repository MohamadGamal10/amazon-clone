import { createContext, useContext, useReducer } from "react";
import AppReducer, { initalState } from "./AppReducer";

export const GolobalContext = createContext();


export default function GlobalProvider(props) {
    const [state , dispatch] = useReducer(AppReducer , initalState);

    // const[data , setData] = useState('hello');
  return (
    <GolobalContext.Provider value={{ basket: state.basket , user: state.user , dispatch: dispatch }}>
      {props.children}
    </GolobalContext.Provider>
  )
}

export const useAuth = () => {
    return useContext(GolobalContext);
}

