
export default function Toggle({done,tId}){

    const HandleToggle = (tId) => {
        console.log("toggle-",tId);
    };

    return(
        <label class="relative float-right items-center mr-5 cursor-pointer align-top">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked={done} onClick={() => HandleToggle(tId)}/>
                    <div class="w-11 h-6 rounded-full peer bg-gray-300 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        </label>
    )}