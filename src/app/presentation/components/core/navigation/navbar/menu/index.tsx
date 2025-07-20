import linksMenu from "../list"
import Link from "./link"

const Menu = () => {
    return(
        <div className="w-fit flex justify-between items-center relative gap-8">
            {linksMenu.map((elem, i) => <Link link={elem} key={i}/> )}
        </div>
    )
}

export default Menu