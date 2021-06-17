import { client } from "./connection";

export const getAllQuestions = async () => {
    let response = await client.get("/cards/getAll");
    return await response.data;
}

export const addCardToDb = async (card) => {
    let response = await client.post("/cards/addCard", card);
    return await response.data;
}

export const deleteCard = async (id) => {
    let response = await client.delete("/cards/deleteCard", id);
    return await response.data;
}

export const getAllUsers = async () => {
    let response = await client.get("/users/getAll");
    return await response.data;
}

export const addUser = async (user) => {
    let loginCreds = {
        username: user.username,
        password: user.password,
        email: user.email
    }
    let response = await client.post("/users/addUser", loginCreds);
    return await response;
}

export const loginUser = async (loginCreds) => {
    let response = await client.post("/users/login", loginCreds);
    return await response;
}

export const deleteUser = async (id) => {
    let response = await client.delete("/users/deleteUser", id);
    return await response;
}