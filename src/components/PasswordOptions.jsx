import Option from './Option'

function PasswordOptions() {

    const optionsArray = ["Numbers", "LowerCase", "UpperCase", "Symbols (e.g. $ $ ^ & ) > < / ` \" @", "Spaces"];

    return (
        <ul className=" bg-slate-600 w-[90%] md:w-1/2 h-[25rem] shadow-xl rounded-md">
            {optionsArray.map((option, i) => <Option option={option} key={i} />)}
        </ul>
    )
}

export default PasswordOptions;