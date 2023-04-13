import { updateTodo } from "@/modules/Data";
import { useAuth } from '@clerk/nextjs';

export default function Toggle({todo}){
    const { isLoaded, userId, sessionId, getToken } = useAuth();

    const updateDone = async (todo) => {
        const authToken = await getToken({ template: "codehooks" });
        todo.done = !todo.done;
        let updateresp = updateTodo(authToken,todo);
    }

    return(
        <label class="relative float-right items-center mr-5 cursor-pointer align-top">
                    <input type="checkbox" value="" className="sr-only peer" defaultChecked={todo.done} onClick={() => updateDone(todo)}/>
                    <div class="w-11 h-6 rounded-full peer bg-gray-300 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        </label>
    )}