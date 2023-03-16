import axios from 'axios'
import jwtDecode from 'jwt-decode'

// instantiate axios
const httpClient = axios.create()

httpClient.getToken = function() {
	return localStorage.getItem('token')
}

httpClient.setToken = function(token) {
	localStorage.setItem('token', token)
	return token
}

httpClient.getCurrentUser = function() {
	const token = this.getToken()
	if(token) return jwtDecode(token)
	return null
}

httpClient.logIn = function(credentials) {
    let user = JSON.parse(localStorage.getItem('userInfo'));
    console.log(user);
    if(user.email === credentials.email && user.password === credentials.password)
    {
        console.log(user);
            let zaposleni = JSON.stringify('zaposleni')
            localStorage.setItem('user', zaposleni);
    }
    else
    {
        console.log('neuspesan login');
    }
    // console.log(user);
}

// logIn and signUp functions could be combined into one since the only difference is the url we're sending a request to..
httpClient.signUp = function(userInfo) {
    let info = JSON.stringify(userInfo);
    localStorage.setItem('userInfo',info)
    return userInfo
}

httpClient.logOut = function() {
	localStorage.removeItem('user')
	return true
}

// During initial app load attempt to set a localStorage stored token
// as a default header for all api requests.
httpClient.defaults.headers.common.token = httpClient.getToken()
export default httpClient