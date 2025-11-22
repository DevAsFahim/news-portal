import { Link } from "react-router";
import news1 from "../assets/images/news/n1.webp";
import author from "../assets/images/profile-1.jpg";
import { FaRegEye } from "react-icons/fa";

const Home = () => {
  return (
    <div className="">
      <div className="flex shadow-md mb-[30px] bg-white">
        <div className="flex-1">
          <img className="h-full w-full object-cover" src={news1} alt="news image" />
        </div>

        <div className="flex-1 p-6">
          <Link to={'/'} className="uppercase text-xs text-white px-3 pt-[7px] pb-1.5 leading-3 rounded-full bg-[#f99500] inline-block mb-2">
            technology
          </Link>
          <Link
            to="/single-news"
            className="font-bold text-[26px]  mb-3 text-black hover:text-blue block"
          >
            <h4>New field is created for badminton. JD project is stopped for now.</h4>
          </Link>
          <p className="text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            repudiandae modi ad, nulla, deserunt repellendus...
          </p>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center gap-2">
                <img className="h-6 w-6 rounded-full" src={author} alt="Author image" />
                <span className="text-muted font-medium text-xs">Mikasa Ackerman</span>
            </div>
            <div className="flex items-center gap-1">
                <FaRegEye className="text-muted" />
                <span className="text-muted text-xs">15,989 views</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex shadow-md mb-[30px] bg-white">
        <div className="flex-1">
          <img className="h-full w-full object-cover" src={news1} alt="news image" />
        </div>

        <div className="flex-1 p-6">
          <Link to={'/'} className="uppercase text-xs text-white px-3 pt-[7px] pb-1.5 leading-3 rounded-full bg-[#f99500] inline-block mb-2">
            technology
          </Link>
          <Link
            to="/single-news"
            className="font-bold text-[26px]  mb-3 text-black hover:text-blue block"
          >
            <h4>New field is created for badminton. JD project is stopped for now.</h4>
          </Link>
          <p className="text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            repudiandae modi ad, nulla, deserunt repellendus...
          </p>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center gap-2">
                <img className="h-6 w-6 rounded-full" src={author} alt="Author image" />
                <span className="text-muted font-medium text-xs">Mikasa Ackerman</span>
            </div>
            <div className="flex items-center gap-1">
                <FaRegEye className="text-muted" />
                <span className="text-muted text-xs">15,989 views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
