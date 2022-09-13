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
//    const deleteButtons = document.querySelectorAll(".deletePost");
//     //     for (let i = 0; i < deleteButtons.length; i++) {
//     //         deleteButtons[i].addEventListener("click", function (event) {
//     //             console.log(deleteButtons[i].getAttribute("data-id") + "will be deleted");
//     //             let request = {
//     //                 method: "DELETE",
//     //                 headers: {"Content-Type": "application/json"},
//     //             }

                    //Why let url?:
//     //             let url = `http://localhost:8080/api/posts/${deleteButtons[i].getAttribute("data-id")}`
//     //             fetch(url, request).then(response => response.json());

                    //Why location.reload?:
//     //             location.reload();

                    //WHHHHHHHYYYYYYYYYYYYYYYYYYYYYYY?!?!?!?!??!!??!??!?!?!?!?
//     //
//     //         });

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

//another working deleteFunction:
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




//Ben example:

 //import createView from "../createView.js"
    // export default function PostIndex(props) {
    //     const postsHTML = generatePostsHTML(props.posts);
    //     return `
    //     <header>
    //      <h1>Posts Page</h1>
    //     </header>
    //     <main>
    //      <h3>List of posts</h3>
    //      <div>
    //         ${postsHTML}
    //      </div>
    //      <br>
    //      <h3>add a post</h3>
    //      <form action="">
    //       <label for="title">Title</label><br>
    //       <input id="title" name="title" type="text" placeholder="Enter title for post">
    //       <br>
    //       <label for="content">Content</label><br>
    //       <textarea name="content" id="content" cols="50" rows="10" placeholder="Enter content"></textarea>
    //       <button id="addPost" name="addPost">Add post</button>
    //       </form>
    //      </main>
    // `;
    // }
    // function generatePostsHTML(posts) {
    //     let postsHTML = `
    //         <table class="table">
    //         <thead>
    //         <tr>
    //             <th scope="col">Title</th>
    //             <th scope="col">Content</th>
    //         </tr>
    //         </thead>
    //         <tbody>
    //     `;
    //     for (let i = 0; i < posts.length; i++) {
    //         const post = posts[i];
    //         postsHTML += `<tr>
    //             <td>${post.title}</td>
    //             <td>${post.content}</td>
    //             <td><button data-id=${post.id} class="editPost">Edit</button></td>
    //             <td><button data-id=${post.id} class="deletePost">Delete</button></td>
    //             </tr>`;
    //     }
    //     postsHTML += `</tbody></table>`;
    //     return postsHTML;
    // }
    // function addPostHandler(){
    //     const addButton = document.querySelector("#addPost")
    //     addButton.addEventListener("click", function (event) {
    //         const titleField =  document.querySelector("#title");
    //         const contentField = document.querySelector("#content");
    //         if((titleField.value === "") || (contentField.value === "")) {
    //             console.log("needs more data");
    //         }
    //         else {
    //             let newPost = {
    //                 title: titleField.value,
    //                 content: contentField.value,
    //             }
    //             console.log(newPost);
    //             let request = {
    //                 method: "POST",
    //                 headers: {"Content-Type": "application/json"},
    //                 body: JSON.stringify(newPost)
    //             }
    //             fetch("http://localhost:8080/api/posts", request)
    //                 .then(response => {
    //                     console.log(response.status);
    //                     createView("/posts");
    //                 })
    //         }})}
    // function editPostHandlers() {
    //     const editButtons = document.querySelectorAll(".editPost");
    //     const titleField =  document.querySelector("#title");
    //     const contentField = document.querySelector("#content");
    //     for (let i = 0; i < editButtons.length; i++) {
    //         editButtons[i].addEventListener("click", function(event) {
    //             console.log(editButtons[i].getAttribute("data-id") + "will be edited");
    //             if((titleField.value === "") || (contentField.value === "")) {
    //                 console.log("needs more data");
    //             }
    //             else{
    //             let editPost = {
    //                 title: titleField.value,
    //                 content: contentField.value,
    //             }
    //             let request = {
    //                 method: "PUT",
    //                 headers: {"Content-Type": "application/json"},
    //                 body: JSON.stringify(editPost)
    //             }
    //             let url = `http://localhost:8080/api/posts/${editButtons[i].getAttribute("data-id")}`;
    //             fetch(url, request).then(response => response.json());
    //             location.reload();
    //         }});
    //     }
    // }
    // function deletePostHandlers() {
    //     const deleteButtons = document.querySelectorAll(".deletePost");
    //     for (let i = 0; i < deleteButtons.length; i++) {
    //         deleteButtons[i].addEventListener("click", function (event) {
    //             console.log(deleteButtons[i].getAttribute("data-id") + "will be deleted");
    //             let request = {
    //                 method: "DELETE",
    //                 headers: {"Content-Type": "application/json"},
    //             }
    //             let url = `http://localhost:8080/api/posts/${deleteButtons[i].getAttribute("data-id")}`
    //             fetch(url, request).then(response => response.json());
    //             location.reload();
    //
    //         });
    //     }
    // }
    //     export function postSetup() {
    //         addPostHandler();
    //         editPostHandlers();
    //         deletePostHandlers();
    //     }
}