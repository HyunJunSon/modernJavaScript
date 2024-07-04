import fetch from "node-fetch";

const getGithubUserName = async id => {
    const res = await fetch(`http://api.github.com/users/${id}`);
    const {name} = await res.json();
    console.log(name);
}

getGithubUserName('ungmo2')