const getProyects = async () => {
    let result = [];
    let response = await fetch('https://localhost:7108/api/v1/Project');
    if (response.ok) {
        result = await response.json();
    }
    return result;
}
const ApiProyects = {
    Get : getProyects
};

export default ApiProyects;