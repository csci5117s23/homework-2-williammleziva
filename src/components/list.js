import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function TodoListComponent({title,data}){


async function HandleToggle(tId){

}

return(
    <div class="w-full text-m font-medium text-gray-900 border rounded-lg bg-gray-700 border-gray-600 text-white">
        <a href="#" aria-current="true" class="block w-full text-lg px-4 py-2 text-white border-b  rounded-t-lg bg-gray-800 cursor-default border-gray-600">
            {title}
        </a>
        {data.map((todo) => (
            <div key={todo._id} className="block w-full px-4 py-2 border-b border-gray-200 cursor-default border-gray-600 focus:ring-gray-500 focus:text-white hover:bg-gray-600 hover:text-white">
                <span>{todo.item}</span>
                <label class="relative float-right items-center mr-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked={todo.done}/>
                    <div class="w-11 h-6 rounded-full peer bg-gray-300 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
                <Link href="#" className="float-right mx-4 align-center text-lg">
                <FontAwesomeIcon icon={faCircleInfo} style={{ color: "#5b90ec" }} />
                </Link>
            </div>
        ))}
    </div>
)}
