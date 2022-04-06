export const checkFollow = (Auth,data) => {
    let user = data
    let res = Auth.following.includes(user._id)
    user.statusFollow=res
    return user
    
}