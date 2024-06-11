import { Link } from "react-router-dom"
import { BsArrowLeft } from "react-icons/bs"


const BackButton = ({dest = '/'}) => {
  return (
    <div className="flex">
        <Link 
        to={dest}
        className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit"
        >
            <BsArrowLeft className="text2xl" />
        </Link>
    </div>
  )
}

export default BackButton