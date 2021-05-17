import axios from "axios";

const API_URL = "http://localhost:3000"

async function getMenu(){
    const obj = await axios.get(`${API_URL}/main_page`)
    return obj
}

async function getMathGuru(){
    const obj = await axios.get(`${API_URL}/math_guru`)
}

export default { getMenu, getMathGuru };
