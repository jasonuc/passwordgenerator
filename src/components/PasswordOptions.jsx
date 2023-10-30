import Option from './Option'

function PasswordOptions({setConstraints, constraints}) {

    const optionsArray = ["Numbers", "LowerCase", "UpperCase", "Symbols (e.g. $ $ ^ & ) > < / ` \" @"];

    return (
        <ul className=" bg-slate-600 w-[90%] md:w-1/2 h-[20rem] shadow-xl rounded-md">
            {optionsArray.map((option, i) => <Option option={option} key={i} constraints={constraints} setConstraints={setConstraints} />)}
        </ul>
    )
}

export default PasswordOptions;