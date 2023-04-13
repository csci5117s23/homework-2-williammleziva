const Backend_URL = "https://backend-oayc.api.codehooks.io/dev"

export async function addTodo(authToken, todos) {
    const resp = await fetch(Backend_URL+"/todos", {
        method: "POST", 
        headers: {  'Authorization': 'Bearer ' + authToken,
                    'Content-Type': "application/json" },
        body: JSON.stringify(todos)
    });
    console.log(resp);
    return resp;
}

export async function getTodos(authToken, uId) {
    const resp = await fetch(Backend_URL+'/todos?userId='+uId+'&done=false&sort=-created', {
        method: "GET",
        headers: {'Authorization': 'Bearer ' + authToken}
    });
    return resp.json();
}

export async function getDoneTodos(authToken, uId) {
    const resp = await fetch(Backend_URL+'/todos?userId='+uId+'&done=true&sort=-created', {
        method: "GET",
        headers: {'Authorization': 'Bearer ' + authToken}
    });
    return resp.json();
}

export async function getTodo(authToken, tId) {
    const resp = await fetch(Backend_URL+'/todos?_id='+tId, {
        method: "GET",
        'headers': {'Authorization': 'Bearer ' + authToken}
    });
    return resp.json();
}

export async function toggleDone(authToken, tId){

}