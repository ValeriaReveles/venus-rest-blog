import {isLoggedIn} from "../../auth.js";
export default function Navbar(props) {

    //refactor navbar code with if else statement to generate different navbars depending on user login status:
    let navbar = `<nav>
        <a href="/" data-link>Home</a>
             <a href="/about" data-link>About</a>
    `;
    if(isLoggedIn()){
        navbar += `
            <a href="/posts" data-link>Posts</a>
            <a href="/me" data-link>About ME</a>
            <a href="/logout" data-link>Logout</a>
        `;
    }else{
        navbar += `
            <a href="/login" data-link>Login</a>
            <a href="/register" data-link>Register</a>
        `;
    }
    navbar += `</nav>`;
    return navbar;
}