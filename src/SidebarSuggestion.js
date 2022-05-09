  function SidebarSuggestion (props){
    return (
        <div class="sugestao">
        <div class="usuario">
          <img src={props.suggestionsObj.friendSuggestionImage} />
          <div class="texto">
            <div class="nome">{props.suggestionsObj.friendSuggestionName}</div>
            <div class="razao">{props.suggestionsObj.friendReason}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>
    )
}

export default function SidebarSug (){
  const suggestions = [
    {friendSuggestionImage: "./assets/img/wawawicomics.svg", friendSuggestionName: "wawawicomics", friendReason: "Segue Você"},
    {friendSuggestionImage: "./assets/img/bad.vibes.memes.svg", friendSuggestionName: "badvibesmemes", friendReason: "Segue Você"},
    {friendSuggestionImage: "./assets/img/barked.svg", friendSuggestionName: "barked", friendReason: "Novo no Instagram"},
    {friendSuggestionImage: "./assets/img/meowed.svg", friendSuggestionName: "mewoed", friendReason: "Segue Você"},
    {friendSuggestionImage: "./assets/img/9gag.svg", friendSuggestionName: "9gag", friendReason: "Segue Você"}
  ]
  return (
        <div class="sugestoes">
          {
            suggestions.map(sidebarSuggestion => <SidebarSuggestion suggestionsObj ={sidebarSuggestion }/>  )
          }
        </div>
      
    )
} 

