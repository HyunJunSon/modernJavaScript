import fetch from "node-fetch";

const foo = async () => {
    const wrongUrl = "https//wrong.url"

    const res = await fetch(wrongUrl);
    const data = res.json();
    return data;
}

foo().then(console.log).catch(console.error);