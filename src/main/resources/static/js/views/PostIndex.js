import CreateView from "../createView.js";

export default function PostIndex(props) {
    return `
        <header>
            <h1 style="text-align: center">Posts Page</h1>
        </header>
        <main>
            <h3>Lists of Posts:</h3>
            <div>
                ${props.posts.map(post =>
                    `<h3>${post.title}</h3>
                    <button class="editPost" name="editPost">Edit Post</button>
                    <button class="deletePost" name="deletePost">Delete Post</button> `).join('')}   
            </div>
            <br>
            <br>
            <h3>Add a post</h3>
           
            <form>
                <label for="title">Title</label>
                <br>
                <input id="title" name="title" type="text" placeholder="Enter title">
                <br>
                <br>
                <label for="content">Content</label>
                <br>
                <textarea id="content" name="content" rows="10" cols="50" placeholder="Enter content"></textarea>
                <br>
                <button id="addPost" name="addPost">Add Post</button>
            </form>
            
        </main>
    `;
}

//need to import to router.js when you use an export function.
export function postSetup() {
    addPostHandler();
    getPostId();
    // editPost();
    // deletePost();
}

// function deletePost() {
//     const deleteButton = document.querySelectorAll(".deletePost");
//     deleteButton.addEventListener("click", function (event){
//     const requestOptions = {
//         method: 'DELETE',
//         headers: {"Content-Type": "application/json"}
//     };
//     fetch('http://localhost:8080/api/posts', )
//         .then(() => element.innerHTML = 'Delete successful');
//     })
// }



function  getPostId() {
    let request = {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    }
    fetch("http://localhost:8080/api/posts", request)
        .then(response => response.json()).then(data => console.log(data));
}


function addPostHandler() {
    const addButton = document.querySelector("#addPost");
    addButton.addEventListener("click", function (event) {
        const titleField = document.querySelector("#title");
        const contentField = document.querySelector("#content");

        let newPost = {
            id: null,
            title: titleField.value,
            content: contentField.value
        }
        console.log(newPost);

        let request = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newPost)
        }

        fetch("http://localhost:8080/api/posts", request)
            .then(response => {
                console.log(response.status);
                CreateView("/posts");
            })

    });

    // function deletePostHandler() {
    //     const deleteButton = document.querySelectorAll(".deletePost");
    //     for (const deleteButtonKey in deleteButton) {
    //     deleteButtonKey.addEventListener("click", function (event) {
    //         let deletePost = {
    //             title: ,
    //             content:
    //         }
    //
    //         let request = {
    //             method: "DELETE",
    //             headers: {"Content-Type": "application/json"}
    //         }
    //         fetch("http://localhost:8080/api/posts/", request)
    //             .then(response => {
    //                 console.log(response.status);
    //                 CreateView("/posts");
    //             })
    //     })};
}