import Home from "../components/Home";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SingupForm";

const UseForm = {
    false: <LoginForm/>,
    null: <LoginForm/>,
    undefined:  <LoginForm/>,
    true: <Home />,
    singup: <SignupForm />

};

export default UseForm;