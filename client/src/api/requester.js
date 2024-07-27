export default async function requester(method, url, data) {
    const options = {};

    if (method !== 'POST') {
        options.method = method;
    }

    if (data) {
        options.headers = {
            'Content-Type' : 'application/json'
        }
    }

    await fetch(url, options)
}