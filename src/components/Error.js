import { useRouterError } from "react-router-dom";

const Error = () => {

    const err = useRouterError();
    console.log("error : " + {err});
    return (
        <div>
            <h1>Error</h1>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    );
};

export default Error;