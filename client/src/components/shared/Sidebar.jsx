import { Link } from "react-router";
import news1 from "../../assets/images/news/n1.webp";

const Sidebar = () => {
  return (
    <>
      <div className="shadow-md p-5 mb-[30px] bg-white">
        <h4 className="text-2xl font-semibold mb-5">Search</h4>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            className="input"
          />
          <button className="py-2 px-3 text-xs primary-btn">
            Search
          </button>
        </div>
      </div>
      <div className="shadow-md p-5 mb-[30px] bg-white">
        <h4 className="text-2xl font-semibold mb-7">Popular News</h4>

        <div className="flex gap-3 mb-4">
          <img
            className="w-20 fit object-contain"
            src={news1}
            alt="news-thumbnail"
          />
          <Link
            to="/"
            className="text-sm leading-4 text-muted hover:text-blue font-semibold"
          >
            <h5>
              New badminton field is ready. No need to go to JD anymore...
            </h5>
          </Link>
        </div>
        <div className="flex gap-3 mb-4">
          <img
            className="w-20 fit object-contain"
            src={news1}
            alt="news-thumbnail"
          />
          <Link
            to="/"
            className="text-sm leading-4 text-muted hover:text-blue font-semibold"
          >
            <h5>
              New badminton field is ready. No need to go to JD anymore...
            </h5>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
