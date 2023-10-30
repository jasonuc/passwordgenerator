import { generate } from "generate-password-browser";

function Generate({ setPassword, constraints, passwordLength }) {

    function handleClick() {

        if (constraints['changed']) {
            let newPassword = generate({
                length: passwordLength,
                numbers: constraints['Numbers'],
                uppercase: constraints['UpperCase'],
                lowercase: constraints['LowerCase'],
                symbols: constraints['Symbols (e.g. $ $ ^ & ) > < / ` \" @'],
                strict: true
            })

            setPassword(newPassword)
        } else {
            alert('You have to tick some of the checkboxes')
        }
    }

    return (
        <button onClick={handleClick} className=" font-oswald uppercase font-bold tracking-wider text-white bg-blue-500 w-[10rem] h-10 rounded-sm shadow-lg hover:italic hover:text-blue-500 hover:border-blue-500 hover:border-2 hover:bg-white hover:rounded-lg">Generate</button>
    )
}

export default Generate;