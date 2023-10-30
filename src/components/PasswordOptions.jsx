import Option from './Option'
import Slider from './Slider';

function PasswordOptions({setConstraints, constraints, passwordLength, setPasswordLength}) {

    const optionsArray = ["Numbers", "LowerCase", "UpperCase", "Symbols (e.g. $ $ ^ & ) > < / ` \" @"];

    return (
        <ul className=" bg-slate-600 w-[90%] md:w-1/2 h-[20rem] shadow-xl rounded-md">
            <Slider passwordLength={passwordLength} setPasswordLength={setPasswordLength} />
            {optionsArray.map((option, i) => <Option option={option} key={i} constraints={constraints} setConstraints={setConstraints} />)}
        </ul>
    )
}

export default PasswordOptions;