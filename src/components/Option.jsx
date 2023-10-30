
function Option({ option, key, constraints, setConstraints }) {


    function handleChange() {
        if (constraints !== undefined && constraints !== null) {
            setConstraints((prev) => ({ ...prev, [option]: !constraints[option], 'changed': true }));
        }
    }

    return (
        <li key={key} className=" flex w-full h-1/5 flex-row items-center p-3 gap-x-3 bg-white even:border-b-2 even:border-t-2 first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md flex-grow">
            <input className=" w-6 h-6 rounded-lg" type="checkbox" value={option} onChange={handleChange} />
            <p className="font-bold">{option}</p>
        </li>
    )
}

export default Option;