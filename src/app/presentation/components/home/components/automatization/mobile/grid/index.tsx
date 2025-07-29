import listCards from "../../list"
import Card from "./card"

const Grid = () => {
    return(
        <div className="w-full h-fit relative grid grid-cols-1 gap-3">
            {listCards.map((elem, i) => <Card card={elem} key={i} /> )}
        </div>
    )
}

export default Grid