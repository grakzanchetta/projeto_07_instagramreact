import Story from "./Story";

export default function Stories (){
    const stories = [
        {imagem: "./assets/img/9gag.svg", usuario:"9gag"},
        {imagem: "./assets/img/9gag.svg", usuario:"9gag"},
        {imagem: "./assets/img/9gag.svg", usuario:"9gag"},
        {imagem: "./assets/img/9gag.svg", usuario:"9gag"},
        {imagem: "./assets/img/9gag.svg", usuario:"9gag"},
        {imagem: "./assets/img/9gag.svg", usuario:"9gag"},
        {imagem: "./assets/img/9gag.svg", usuario:"9gag"},
        {imagem: "./assets/img/9gag.svg", usuario:"9gag"},
        {imagem: "./assets/img/9gag.svg", usuario:"9gag"}
    ]

    return (
        <div class="stories">
            {
                stories.map(story => {
                    return <Story imagem={story.imagem} usuario={story.usuario}/>
                })
            }

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    )
}

