import createView from "../createView.js";

export default function Logout(props) {
    console.log("Successfully logged out");
    return `<h1>Logging Out...</h1>`
}

export function LogoutEvent(){
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("refresh_token");
    createView("/login")
}