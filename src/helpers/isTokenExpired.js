import jwtDecode from "jwt-decode";

function isTokenExpired() {
    const token = localStorage.getItem("token")
    const decoded = jwtDecode(token)
    if (Date.now() >= decoded.exp * 1000) {
        return false;
    } else {
        return true;
    }
}

export default isTokenExpired()