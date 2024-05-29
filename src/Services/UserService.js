import axios from 'axios'
const UserService = {}

UserService.register = function(data){
    return axios.post('http://localhost:5000/users/signup',data)

}
UserService.signin = function(data){
    return axios.post('http://localhost:5000/users/signin',data)

}
UserService.adddemande = function(data){
    return axios.post('http://localhost:5000/users/adddemande',data)

}
UserService.adddetailDemande = function(data){
    return axios.post('http://localhost:5000/users/adddetailDemande',data)

}

export default UserService;