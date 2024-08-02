import requester from "./requester";

const BASE_URL = 'http://localhost:3030/data/comments';
// const buildUrl = (gameId) => `${BASE_URL}/${gameId}/comments`;

const create = (gameId, text) => requester.post(BASE_URL, { gameId, text });

const getAll = (gameId) => {
    const params = new URLSearchParams({
        where: `gameId="${gameId}"`
    })
    return requester.get(`${BASE_URL}?${params.toString()}`);
}

const commentsAPI = {
    create,
    getAll
}

export default commentsAPI;