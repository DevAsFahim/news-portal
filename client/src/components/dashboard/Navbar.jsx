import { Link } from "react-router"
import user from "../../assets/images/profile-1.jpg"

const Navbar = () => {
  return (
    <div className='bg-white shadow'>
        <div className="flex items-center justify-between gap-10 px-5 h-[60px] md:h-[70px] xl:h-[90px]">
            <h2 className="text-3xl font-bold">Dashboard</h2>

            <button className="flex items-center gap-3 cursor-pointer p-2 border border-border px-5 rounded-md hover:bg-amber-50">
              <span>devasfahim@gmail.com</span>
              <img className="w-8 rounded-full" src={user} alt="user" />

            </button>
        </div>
    </div>
  )
}

export default Navbar