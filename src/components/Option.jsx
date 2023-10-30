
function Option({ option, key }) {
    return (
        <li key={key} className=" flex w-full h-1/5 flex-row items-center p-3 gap-x-3 bg-white even:border-b-2 even:border-t-2 first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md">
            <input className=" w-6 h-6 rounded-lg" type="checkbox" name={option} />
            <p className="font-bold">{option}</p>
            
        </li>
    )
}

export default Option;