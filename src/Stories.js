import Story from "./Story";

export default function Stories (){
    const stories = [
        {imagem: "./assets/img/9gag.svg", usuario:"9gag"},
        {imagem: "./assets/img/bad.vibes.memes.svg", usuario:"badvibesmemes"},
        {imagem: "./assets/img/filomoderna.svg", usuario:"filomoderna"},
        {imagem: "./assets/img/chibirdart.svg", usuario:"chibirdart"},
        {imagem: "./assets/img/memeriagourmet.svg", usuario:"memeriagourmet"},
        {imagem: "./assets/img/smallcutecats.svg", usuario:"smallcats"},
        {imagem: "./assets/img/respondeai.svg", usuario:"respondeai"},
        {imagem: "./assets/img/9gag.svg", usuario:"9gag"},
        {imagem: "./assets/img/bad.vibes.memes.svg", usuario:"badvibesmemes"}
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

