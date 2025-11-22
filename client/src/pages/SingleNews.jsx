import { Link } from "react-router";
import news1 from "../assets/images/news/n2.jpg";
import author from "../assets/images/profile-1.jpg";
import { IoCalendarClearOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";

const SingleNews = () => {
  return (
    <>
      <div className="shadow-md mb-[30px] bg-white">
        <div className="">
          <img className="w-full" src={news1} alt="news image" />
        </div>

        <div className="pt-10 px-[60px] pb-[50px]">
          <div className="mb-7">
            <Link
              to={"/"}
              className="uppercase text-xs text-white px-3 pt-[7px] pb-1.5 leading-3 rounded-full bg-[#f99500] inline-block mb-2"
            >
              technology
            </Link>
            <h2 className="font-bold text-4xl leading-14 mb-4">
              New field is created for badminton. JD project is stopped for now.
            </h2>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <img
                  className="h-6 w-6 rounded-full"
                  src={author}
                  alt="Author image"
                />
                <span className="text-muted font-medium text-xs">
                  Mikasa Ackerman
                </span>
              </div>
              <div className="flex items-center gap-1">
                <FaRegEye className="text-muted" />
                <span className="text-muted text-xs">15,989 views</span>
              </div>
              <div className="flex items-center gap-1">
                <IoCalendarClearOutline className="text-muted" />
                <span className="text-muted text-xs">1 month ago</span>
              </div>
            </div>
          </div>
          <p className="text-muted">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            repudiandae modi ad, nulla, deserunt repellendus inventore mollitia
            veniam recusandae, asperiores maxime sunt fugit molestiae unde
            tempore totam obcaecati eius exercitationem porro voluptas amet
            reiciendis velit enim magni. Aliquam, praesentium veniam quis
            debitis quidem sed! Beatae molestiae culpa inventore deserunt
            laudantium possimus accusamus sit cum similique minima atque odit
            aspernatur reiciendis temporibus dolores non sapiente, placeat
            tenetur? Magni placeat laudantium aut assumenda unde, voluptatibus
            suscipit impedit omnis ad tempore iusto optio quo nihil corporis,
            maxime laboriosam repellendus, et nulla. Recusandae dicta non
            maiores hic eum itaque aut molestiae labore sed pariatur
            voluptatibus fugit, similique nobis laboriosam ullam deserunt
            dolores qui sunt fuga quis deleniti minima iusto. Ducimus, expedita
            corrupti? Consequatur, ducimus. Sint rem labore in reiciendis id
            soluta dolorem facere illo! Sint accusamus perferendis voluptatum
            nesciunt. Consequatur repudiandae deserunt non, tempora quam
            aspernatur similique aliquid expedita ipsa, dolor necessitatibus!
            Voluptatem nisi, ipsa tenetur, sapiente, dolorem officia recusandae
            itaque necessitatibus repudiandae dolorum impedit iusto quae rerum
            animi! Nobis temporibus labore amet quis non iure blanditiis quam?
            Ad necessitatibus vel accusantium dolores? Asperiores beatae
            exercitationem eos, sit reprehenderit dolores, obcaecati, ipsam rem
            maxime illo nostrum sed vero! Aspernatur voluptate neque, iusto
            culpa eveniet iure perspiciatis asperiores molestiae enim? Fuga
            laudantium distinctio enim, odit totam at iure debitis praesentium.
            Temporibus repudiandae nesciunt perferendis nam commodi facilis
            consectetur, porro qui omnis saepe sed reiciendis ullam, veniam ut
            quo accusantium error placeat facere quisquam dolor asperiores
            explicabo cum, laborum vel! Illum expedita quaerat atque quo
            reprehenderit excepturi vel qui ea error nobis. Vel blanditiis nam
            rerum accusamus perspiciatis molestiae nemo impedit possimus maxime,
            corrupti sapiente cupiditate, iure, ipsam numquam animi molestias
            repellendus quasi expedita quis voluptas voluptatum? Quo incidunt
            quibusdam provident non iste, facere odio nesciunt laboriosam ipsum
            qui vitae optio rem amet blanditiis, consectetur temporibus.
          </p>
        </div>
      </div>
      {/* Comment section */}
      <div className="shadow-md pt-10 px-[60px] pb-[50px] mb-[30px] bg-white">
        <h3 className="text-2xl font-semibold mb-5">Add comment</h3>
        <textarea
          type="text"
          className="input min-h-40 mb-5"
          placeholder="Type your comment here"
        />

        <div className="flex items-center gap-5 mb-6">
          <input
            type="text"
            placeholder="Name"
            className="input"
          />
          <input
            type="text"
            placeholder="Email"
            className="input"
          />
        </div>

        <button className="primary-btn">Submit comment</button>
      </div>
    </>
  );
};

export default SingleNews;
