
function verify() {
    const userData = localStorage.getItem('uid');
    localStorage.key(0);
    console.log(userData);
    if (!userData) {
        window.location.replace("login.html");
    }
}
verify()
