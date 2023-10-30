
function Slider({ passwordLength, setPasswordLength }) {


    function handleChange(event) {
        setPasswordLength(event.target.value);
    }
    
    return (
        <li key={50} className="flex w-full h-1/5 flex-row items-center p-3 gap-x-3 bg-white even:border-b-2 even:border-t-2 first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md flex-grow justify-center">
            <p className="font-bold">Password Length: </p>
            <input type="range" name="slider" max={18} min={5}  step={1} onChange={handleChange}  className="h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg dark:bg-gray-700" />
            <p className="font-extrabold italic text-slate-500">{passwordLength}</p>
        </li>
    )

}

export default Slider;