const Shimmer = () => { 

    const cards = [];

    for(let i = 0; i < 20; i++)
        cards.push(
            <div key={i} className="bg-[#b6b6b628] w-[250px] h-[400px] mb-3 ml-4 rounded-2xl animate-breath">
            </div>
        )

        return (
            <div className=" cursor-progress bg-slate-100  pt-10 mx-auto max-w-[1300px]">
                <div className="flex flex-col-reverse gap-6 md:flex-row items-center md:justify-between w-full  px-4 lg:px-20 xl:px-40" >
                  
                  <div className=" flex gap-2 items-center justify-center">
                      <button className="bg-[#b6b6b628] text-white px-4 py-2 rounded-lg transition-all duration-150 cursor-not-allowed animate-breath">
                        Top Rated Restaurants
                      </button>
      
                      <button className="bg-[#b6b6b628] text-white px-4 py-2 rounded-lg transition-all duration-150 cursor-not-allowed animate-breath">
                        Reset Filter
                      </button>
                  </div>
      
                  <div className="flex  p-1 items-center justify-center ">
                    <input className="h-9 px-3 text-lg outline-none rounded-l-2xl bg-[#b6b6b628] cursor-not-allowed "
                      />
      
                    <button className="h-9 bg-[#b6b6b628] text-white rounded-r-2xl px-3 cursor-not-allowed animate-breath">
                      Search
                    </button>
                  </div>
      
                </div>
                  
                <div className="flex flex-wrap items-center justify-center gap-4  md:gap-10 max-w-[1300px] mx-auto pt-10">
                  {
                    cards
                    .map(card => card)
                  }
                </div>
            </div>
        )
}
export default Shimmer;