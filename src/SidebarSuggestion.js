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
    {friendSuggestionImage: "./assets/img/catanacomics.svg", friendSuggestionName: "catanacomics", friendReason: "Segue Você"},
    {friendSuggestionImage: "./assets/img/catanacomics.svg", friendSuggestionName: "catanacomics", friendReason: "Segue Você"},
    {friendSuggestionImage: "./assets/img/catanacomics.svg", friendSuggestionName: "catanacomics", friendReason: "Novo no Instagram"},
    {friendSuggestionImage: "./assets/img/catanacomics.svg", friendSuggestionName: "catanacomics", friendReason: "Segue Você"},
    {friendSuggestionImage: "./assets/img/catanacomics.svg", friendSuggestionName: "catanacomics", friendReason: "Segue Você"}
  ]
  return (
        <div class="sugestoes">
          {
            suggestions.map(sidebarSuggestion => <SidebarSuggestion suggestionsObj ={sidebarSuggestion }/>  )
          }
        </div>
      
    )
} 

