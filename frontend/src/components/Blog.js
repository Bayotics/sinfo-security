import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';



const Blog = () => {
    return(
      <div>
        <div className="main_heading text_align_left">
            <h1 id = "" style={{marginBottom: "30px"}} className='text-center'>
            <span className='theme-color'>LATEST</span><span id = "blog-span"> FROM OUR</span> BLOG
        </h1>
          </div>
        <div class="container-blog row">
  <div class="card col">
    <div class="card-header">
      <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" />
    </div>
    <div class="card-body">
      <span class="tag tag-yellow">Technology</span>
      <h4>
        Why is the Tesla Cybertruck designed the way it
        is?
      </h4>
      <p>
        An exploration into the truck's polarising design
      </p>
      <div class="user">
        <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
        <div class="user-info">
          <h5>July Dec</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  </div>
  <div class="card col">
    <div class="card-header">
      <img src="https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg" alt="ballons" />
    </div>
    <div class="card-body">
      <span class="tag tag-purple">Popular</span>
      <h4>
        How to Keep Going When You Don’t Know What’s Next
      </h4>
      <p>
        The future can be scary, but there are ways to
        deal with that fear.
      </p>
      <div class="user">
        <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo" alt="user" />
        <div class="user-info">
          <h5>Eyup Ucmaz</h5>
          <small>Yesterday</small>
        </div>
      </div>
    </div>
  </div>
  <div class="card col">
    <div class="card-header">
      <img src="https://images6.alphacoders.com/312/thumb-1920-312773.jpg" alt="city" />
    </div>
    <div class="card-body">
      <span class="tag tag-pink">Design</span>
      <h4>
        10 Rules of Dashboard Design
      </h4>
      <p>
        Dashboard Design Guidelines
      </p>
      <div class="user">
        <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg" alt="user" />
        <div class="user-info">
          <h5>Carrie Brewer</h5>
          <small>1w ago</small>
        </div>
      </div>
    </div>
  </div>
    </div>
      </div>
    )
}

export default Blog