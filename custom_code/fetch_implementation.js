// ------------------------------------------->
//    Fetch Implementation
// ------------------------------------------->

async function xyz() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const jsonParsed = await data.json();
    const data1 = jsonParsed[0].title;
    console.log("fetch Implementation", data1);
}
xyz();

// -------------------------------->
//    Custom fetch Implementation
// -------------------------------->

async function customFetch(status) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (status === 200) {
                res({ title: "custom fetch Implementation" })
            }
            rej("Data cannot be displayed");
        }, 2000);
    })
}
customFetch(200).then(data => console.log(data.title));