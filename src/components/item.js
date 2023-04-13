export default function TodoListComponent({data}){

    async function HandleToggle(tId){
    
    }

    return(
        <div>
            {data.map((todo) => ( 
                <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {todo.item}
                    </h5>
                    <p class="font-large text-gray-700 dark:text-gray-400">
                        {todo.category}
                    </p>
                    <p class="font-small text-gray-700 dark:text-gray-400">
                        {todo.content}
                    </p>
                </div>
            ))}
        </div>
    )}