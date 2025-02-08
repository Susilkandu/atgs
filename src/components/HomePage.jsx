import 'bootstrap-icons/font/bootstrap-icons.css';
export default function HomePage() {
  let posts = [
    { source: "./denielForest.jpeg", type: "Article", title: "What if famous brands had regular fonts? Meet RegularBrands!", content: "I've worked in UX for the better part of a decade F...", postedBy: "Sarthak Kamra", profilePhoto: "./profilePhoto/Sarthak.jpeg", views: "1.4k" },
    { source: "./outdoor.jpeg", type: "Education", title: "Tax Benefits for Investment under National Pension Scheme launched by Government", content: " I've worked in UX for the better part of a decade F...", postedBy: "Sarah West", profilePhoto: "./profilePhoto/Sarah.jpeg", views: "4.8k" },
    { source: "./phantom.jpeg", type: "Meetup", title: "Finance & Investment Elite Social Mixer @Lujiazui", content: "null", date: "Fri,12 Oct, 2018", location: "Ahmedabad, India", website: "figma.com", postedBy:"Ronal Jones", profilePhoto:"./profilePhoto/Ronal.jpeg", views: "800" }

  ]
  let postTypeLogo = [
    { type: "Article", source: "./smallLogo/Article.png" },
    { type: "Education", source: "./smallLogo/Education.png" },
    { type: "Meetup", source: " ./smallLogo/Meetup.png" },

  ]
  return (
    <div className="HomePageCnt sm-w-[360px] w-[100%]">
      <div className="cs-engineering flex-col justify-evenly w-[inherit] text-[#FFFFFF] ">
        {/* first block */}
        <div className="w-[inherit] h-[236px] md:h-[440px] cs-inner relative bg-[url(./csEng.jpeg)] bg-center bg-cover">
          <div className="absolute w-[inherit] h-[inherit]" style={
            {
              background: "linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%)",
            }
          }>
            {/* top section  */}
            <div className="top flex flex-row  justify-between items-center text-4xl pointer md:hidden ">
              <i className="bi bi-arrow-left-short mt-4 ml-[6px]"></i>
              <button className='w-[76px] h-7 mt-[14px] mr-[18px] p-[8px] text-[11px] border rounded-sm'>Join Group</button>
            </div>
            {/* Computer Engineering Info */}
            <div className='ceInfo mt-[121px] ml-4 text-[16px] md:text-[1.3rem] md:mt-[260px] md:ml-[88px]'>
              <p>
                <b className=' font-[IBM-Plex-Sans] md:text-[36px]/[48.6px] text-[#FFFFFF]'>Computer a Engineering</b>
              </p>
              <span className='font-[IBM-Plex-Sans] md:text-[18px]/[23.4px]'>142,765 Computer Engineers follow this</span>
            </div>
          </div>
        </div>
        {/* second block */}
        <div>
          <div className="top flex flex-row  justify-between items-center  text-4xl text-[#212529] mt-[14px]">
            <b className='text-[14px]  ml-[17px] mt-[14px]'>Posts(368)</b>
            <button className='w-[7rem] h-8 mt-[14px] mr- [18px] pl-[10px] text-[14px] font-bold border-none rounded-sm bg-[#F1F3F5]'>Filter: All <i className="bi bi-caret-down-fill ml-2 p-1.5"></i></button>
          </div>
        </div>
      </div>
      {/* below code displaying posts */}
      <div className="posts w-[360px] md:w-[692ppppx]">
        {
          posts.map((post) => {
            const ArticleLogo = postTypeLogo.find(item => item.type == post.type)
            const ProfilePhoto = post.profilePhoto
            return (
              <div className="post w flex-col" key={post.source.toString() + '1'}>
                {post.source && <img className="w-full  object-center h-[120px] md:h-[220px]" src={post.source} ></img>}
                <div className="ArticleType flex justify-start items-center text-[18px] ml-[16px]">
                  {
                    ArticleLogo && <img src={ArticleLogo.source} alt="Loading" className='w-[16px]' />
                  }
                  <span className='ml-[5px] font-bold text-[#343A40]'>
                    {post.type}
                  </span>
                </div>
                <div className='titleAction flex justify-between items-center'>
                  <b className='title w-[255px] ml-[16px] mr-[23px] text-[#212529]' >{post.title}</b>
                  <button className='w-[28px] mr-[1.5rem]'><i class="bi bi-three-dots text-[28px]"></i></button>
                </div>
                {(post.content !== "null") && <span className='description w-[320px] overflow-hidden text-[13px] text-[#495057] ml-[16px] mt-[14px]'>{(post.content).substring(0, 51)}...</span>}
                {(post.type == 'Meetup') &&
                  <div className="date  flex flex-col justify-between items-center w-[289.62px] ml-[16px] mt-[10.8px]">
                    <div className="detail flex justify-between items-center w-[289.62px]">
                      <div className="dateGroup flex">
                        <img src="./smallLogo/calendar.png" className='w-[16px]' alt="" />
                        <span className='text-[10.5px]'>{post.date}</span>
                      </div>
                      <div className="locationGroup flex justify-between ">
                        <img src="./smallLogo/location.png" className='w-[16px] mr-[2.6px]' alt="" />
                        <span className='text-10.58px'>{post.location}</span>
                      </div>
                    </div>
                    <button className="websiteLink w-[328px] border-2 ml-[36px] h-[34px] rounded-[.5rem] border-[#A9AEB8] mt-[16px] text-[#E56135]">
                      Visit Website
                    </button>
                  </div>
                }
                <div className="userAndShareBtn flex justify-between items-center">
                  <div className="group w-fit ml-[16px] mt-[27.58px] flex flex-row items-center">
                    <div className={`ProfilePhoto w-[37px] h-[37px] rounded-full bg-center bg-cover`} style={{ backgroundImage: `url(${ProfilePhoto})` }} />
                    <div className='profileDetails  ml-[12.8px]  w-[200.31px] flex flex-col justify-between items-start'>
                      <b className="name  w-fit ">{post.postedBy}</b>
                      <span className='text-[# ]'>{post.views} views</span>
                    </div>
                  </div>
                  <button className="shareBtn bg-[#F1F3F5] w-[80 px] h-[36px] mr-[18px] flex justify-center items-center rounded-[4px]">
                    <i class="bi bi-share-fill ml-[10.25px]"></i>
                    <b className='shareBtn ml-[4.5px] mr-[9.43px]  text-[#212529]'>Share</b>
                  </button>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}      