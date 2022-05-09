function UserNameInstagram (props){
  return (
  <div class="usuario">
    <img src= {props.InstaUser.UserAvatar}/>
    <div class="texto">
    <strong>{props.InstaUser.UserNick}</strong>
    {props.InstaUser.UserName}
    </div>
  </div>
)
}

export default function UserName (){

const UserObj = [
  {UserAvatar: "assets/img/catanacomics.svg", UserNick: "catanacomics", UserName: "Catana"}
]

    return (
        <div class="usuario">
          {
            UserObj.map(userNameInstagram => <UserNameInstagram InstaUser={userNameInstagram}/>)
          }
        </div> 
    )

}
