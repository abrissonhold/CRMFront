const getClients = async () => {
    let result = [];
    let response = await fetch('https://localhost:7108/api/v1/Client');
    if (response.ok) {
        result = await response.json();
    }
    return result;

}
const ApiClients = {
    Get: getClients
};

export default ApiClients;