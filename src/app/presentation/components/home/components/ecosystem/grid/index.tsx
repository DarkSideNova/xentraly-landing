import listCards from "../list"
import Card from "./card"

const Grid = () => {
    return(
        <div className="w-full h-fit relative flex flex-wrap justify-center items-center">
            {listCards.map((elem, i) => <Card card={elem} key={i} /> )}
        </div>
    )
}

export default Grid