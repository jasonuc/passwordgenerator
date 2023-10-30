import Password from "./Password";
import CopyPassword from "./CopyPassword";

function PasswordDisplay({ password }) {
    return (
        <div className="w-[90%] md:w-1/2 bg-white h-28 rounded-md flex flex-col items-center shadow-lg">
            <CopyPassword password={password} />
            <Password password={password} />
        </div>
    )
}

export default PasswordDisplay;