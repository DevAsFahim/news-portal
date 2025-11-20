import news1 from "../assets/images/news/n1.webp";

const SingleNews = () => {
  return (
    <>
    <div className="shadow-md rounded-xl p-5 mb-[30px] border border-gray-300">
      <div className="mb-[30px]">
        <img src={news1} alt="news image" />
      </div>

      <div className="">
        <h2 className="font-bold text-2xl mb-5">
          New field is created for badminton. JD project is stopped for now.
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          repudiandae modi ad, nulla, deserunt repellendus inventore mollitia
          veniam recusandae, asperiores maxime sunt fugit molestiae unde tempore
          totam obcaecati eius exercitationem porro voluptas amet reiciendis
          velit enim magni. Aliquam, praesentium veniam quis debitis quidem sed!
          Beatae molestiae culpa inventore deserunt laudantium possimus
          accusamus sit cum similique minima atque odit aspernatur reiciendis
          temporibus dolores non sapiente, placeat tenetur? Magni placeat
          laudantium aut assumenda unde, voluptatibus suscipit impedit omnis ad
          tempore iusto optio quo nihil corporis, maxime laboriosam repellendus,
          et nulla. Recusandae dicta non maiores hic eum itaque aut molestiae
          labore sed pariatur voluptatibus fugit, similique nobis laboriosam
          ullam deserunt dolores qui sunt fuga quis deleniti minima iusto.
          Ducimus, expedita corrupti? Consequatur, ducimus. Sint rem labore in
          reiciendis id soluta dolorem facere illo! Sint accusamus perferendis
          voluptatum nesciunt. Consequatur repudiandae deserunt non, tempora
          quam aspernatur similique aliquid expedita ipsa, dolor necessitatibus!
          Voluptatem nisi, ipsa tenetur, sapiente, dolorem officia recusandae
          itaque necessitatibus repudiandae dolorum impedit iusto quae rerum
          animi! Nobis temporibus labore amet quis non iure blanditiis quam? Ad
          necessitatibus vel accusantium dolores? Asperiores beatae
          exercitationem eos, sit reprehenderit dolores, obcaecati, ipsam rem
          maxime illo nostrum sed vero! Aspernatur voluptate neque, iusto culpa
          eveniet iure perspiciatis asperiores molestiae enim? Fuga laudantium
          distinctio enim, odit totam at iure debitis praesentium. Temporibus
          repudiandae nesciunt perferendis nam commodi facilis consectetur,
          porro qui omnis saepe sed reiciendis ullam, veniam ut quo accusantium
          error placeat facere quisquam dolor asperiores explicabo cum, laborum
          vel! Illum expedita quaerat atque quo reprehenderit excepturi vel qui
          ea error nobis. Vel blanditiis nam rerum accusamus perspiciatis
          molestiae nemo impedit possimus maxime, corrupti sapiente cupiditate,
          iure, ipsam numquam animi molestias repellendus quasi expedita quis
          voluptas voluptatum? Quo incidunt quibusdam provident non iste, facere
          odio nesciunt laboriosam ipsum qui vitae optio rem amet blanditiis,
          consectetur temporibus.
        </p>
      </div>

    </div>
      {/* Comment section */}
      <div className="shadow-md rounded-xl p-5 mb-[30px] border border-gray-300">
        <h3 className="text-2xl font-semibold mb-5">Comment</h3>
       <textarea type="text" class="py-2.5 sm:py-3 px-4 block w-full border border-gray-300 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none h-40 shadow" placeholder="Type your comment here"/>
      </div>
      </>
  );
};

export default SingleNews;
