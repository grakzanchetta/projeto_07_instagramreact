import Post from "./Post";

const friendPosts = [
  {imagemUsuarioPost:"./assets/img/meowed.svg", usuarioPost:"meowed", imagemPost: "assets/img/gato-telefone.svg"},
  {imagemUsuarioPost:"./assets/img/barked.svg", usuarioPost:"barked", imagemPost: "assets/img/dog.svg"}
]

export default function Posts(){
    return (
      <div class="posts">
        {
          friendPosts.map (post => {
            return <Post imagemUsuarioPost={post.imagemUsuarioPost} usuarioPost={post.usuarioPost} imagemPost={post.imagemPost}/>
          })
        }
               
      </div>
    )
}