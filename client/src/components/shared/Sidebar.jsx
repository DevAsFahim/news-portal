import news1 from '../../assets/images/news/n1.webp'

const Sidebar = () => {
  return (
    <>
      <div className="shadow-md rounded-xl p-5 mb-[30px] border border-gray-300">
        <h4 className="text-2xl font-semibold mb-5">Search</h4>

        <input
          type="text"
          placeholder="Search news"
          className="block w-full border border-blue-900 rounded-md px-3 py-2"
        />
      </div>
      <div className="shadow-md rounded-xl p-3 mb-[30px] border border-gray-300">
        <h4 className="text-2xl font-semibold mb-5">Popular News</h4>

        <div>
            <div className="flex gap-3 mb-3">
                <img className='w-20 fit object-contain' src={news1} alt="news-thumbnail" />
                <a href='/' className='font-medium text-sm leading-4 hover:text-blue-500'>New badminton field is ready. No need to go to JD anymore...</a>
            </div>
            <div className="flex gap-3 mb-3">
                <img className='w-20 fit object-contain' src={news1} alt="news-thumbnail" />
                <a href='/' className='font-medium text-sm leading-4 hover:text-blue-500'>New badminton field is ready. No need to go to JD anymore...</a>
            </div>
        </div>
        
      </div>
    </>
  );
};

export default Sidebar;
