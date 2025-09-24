export async function fetchGetDataFunction({url, method='GET', msgOnFail}) {

    const response = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
    },)
    const serverData= await response.json()
    if (!response.ok) {
        if(response.status===500){
           return {fetchSucceed:false, serverErrorMessage: msgOnFail, serverData}
        }
        return {fetchucceed:false, ...serverData, status:response.status}
    } else {
        return {fetchSucceed:true , serverData}
    }
}