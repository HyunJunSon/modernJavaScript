const xhr = new XMLHttpRequest();
let url = "https://jsonplaceholder.typicode.com/todos/3"
xhr.open('GET', url);
xhr.send();

xhr.onreadystatechange = () => {

    if (xhr.readyState !== XMLHttpRequest.DONE) return;

    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.response));
    } else {
        console.error('Error', xhr.status, xhr.statusText);
    }
}