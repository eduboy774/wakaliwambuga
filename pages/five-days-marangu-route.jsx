import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const ThreeDaysItenary = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Marangu Route"} />
      {/*====== Start Blog Details Section ======*/}
      <section className="blog-details-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              {/*=== Blog Details Wrapper ===*/}
              <div className="blog-details-wrapper pr-lg-50">
                <div className="blog-post mb-60 wow fadeInUp">
                  <div className="post-thumbnail">
                    <img
                      src="assets/images/blog/blog-single-1.jpg"
                      alt="Blog Image"
                    />
                  </div>
                  
                  {/* Itenary 01 */}
                  <div className="main-post mt-4">
                    <div className="entry-content">
                      <h3 className="title">
                      5 Days Safaris
                      </h3>
                      <span className="sub-title">Kilimanjaro Trekking</span>
                      <h4>Overview</h4>
                      <p className="text-start">
                      It is known as “Coca-Cola” route, Marangu approaches Kilimanjaro from the southeast of the Mountain.
                      It is the oldest established route. Many favor the Marangu route because it is considered to be the easiest route on the mountain.<br/><br/>
                      The minimum days required for this route is five, although the probability of successfully reaching the top in that time is a bit low. Spending an extra acclimatisation day on the mountain is highly recommended, maximizing the chance of reaching to the summit. Marangu is the only route which offers sleeping huts in dormitory style accommodations.
                      </p>
                      <h4>Full Itinerary</h4>
                      <div className="entry-footer wow fadeInUp">
                      <div className="tag-links">
                      <h6>Day 1 :</h6>
                      <a>Marangu Gate – Mandara Huts</a>
                    </div>
                    </div>
                      <p>
                      Departing from Moshi, drive will take you through the Village of Marangu to the Kilimanjaro National Park Gate.
                      We will patiently wait for our permits to be issued while watching the hustle and bustle of operations as many crews prepare for the journey ahead.<br/><br/>
                      Enjoy the beautiful rainforest scenery and windy trails while your guide tells you about the local flora and fauna and natural wildlife. At these lower elevations, the trail can be muddy and quite slippery. We highly recommend gaiters and trekking poles here.
                      </p>
                      
                    </div>
                  </div>
                  {/* Itenary 01 */}

                   {/* Itenary 02 */}
                   <div className="main-post mt-4">
                    <div className="entry-content">
                      <div className="entry-footer wow fadeInUp">
                      <div className="tag-links">
                      <h6>Day 2 :</h6>
                      <a>Mandara Huts – Horombo Huts</a>
                    </div>
                    </div>
                      <p>
                      After a good nights sleep and a hearty breakfast, we emerge from the rain forest and continue on an ascending path, through heathland, looking for giant lobelias and groundsels. <br/><br/>
                      Continue up into open moorlands where small shrubs are the main vegetation. Stop halfway for lunch, to enjoy amazing views of Mawenzi. Arrive at the Horombo Huts late afternoon beneath the spectacular Kibo Summit viewpoint. Temperatures begin to drop.
                      </p>
                     
                    </div>
                  </div>
                  {/* Itenary 02 */}


                   {/* Itenary 03 */}
                   <div className="main-post mt-4 block-quote">
                    <div className="entry-content">
                      <div className="entry-footer wow fadeInUp">
                      <div className="tag-links">
                      <h6>Day 3 :</h6>
                      <a>Horombo Huts- Kibo Huts</a>
                    </div>
                    </div>
                      <p>
                      After breakfast, we continue on through the dwindling heathland that blends into a moonscape as you enter the sweeping saddle connecting Mawenzi and Kibo.
                      Here while we stop for lunch, and later when you cross this surprisingly large saddle, you can examine the summit climb up Kibo that you will be starting in just a few hours
                      </p>
                     
                    </div>
                  </div>
                  {/* Itenary 03 */}

                   {/* Itenary 04 */}
                   <div className="main-post mt-4 block-quote">
                    <div className="entry-content">
                      <div className="entry-footer wow fadeInUp">
                      <div className="tag-links">
                      <h6>Day 4 :</h6>
                      <a>Kibo Huts – Summit - Horombo Huts</a>
                    </div>
                    </div>
                      <p>
                      Excitement is building as morning comes with an early start between midnight and 2 a.m.
                      This is the most mentally and physically challenging portion of the trek. We continue our way to the summit in a switchback formation through trying to stay warm and focused on the amazing sense of accomplishment that lies ahead. <br/><br/>
                      With a switchback motion, we ascend through heavy scree and possibly snow towards Gillman’s Point on the crater rim. You will be rewarded with the most magnificent sunrise during your short rest here. Faster hikers may view the sunrise from the summit. From here on your remaining 1 hour ascent to Uhuru Peak, you are likely to encounter snow all the way. <br/><br/>
                      Congratulations, one step at a time you have now reached Uhuru Peak the highest point on Mount Kilimanjaro and the entire continent of Africa! After photos, celebrations and maybe a few tears of joy we take a few moments to enjoy this incredible accomplishment. We begin our steep descent down to Mweka Camp, stopping at Barafu for lunch and a very brief rest. We strongly recommend gaiters and trekking poles for uncooperative loose gravel and volcano ash terrain. Well-deserved rest awaits you to enjoy your last evening on the mountain. Overnight Mweka Camp.
                      </p>
                     
                    </div>
                  </div>
                  {/* Itenary 04 */}

                  {/* Itenary 05*/}
                  <div className="main-post mt-4 block-quote">
                    <div className="entry-content">
                      <div className="entry-footer wow fadeInUp">
                      <div className="tag-links">
                      <h6>Day 5 :</h6>
                      <a> Horombo Huts – Marangu Gate – Moshi</a>
                    </div>
                    </div>
                      <p>
                      After breakfast and a heartfelt ceremony of appreciation and team bonding with your crew, it’s time to say goodbye. We continue the descent down stopping at the Mandara Huts for lunch.
                      Remember to tip your guides, cooks, and porters, since you will be leaving them here. <br/><br/>
                      You return back to the Marangu Park Gate and receive your summit certificates. As the weather is drastically warmer, the terrain is wet, muddy and steep and we highly recommend Gaiters and trekking poles. From the gate, a vehicle will meet you to drive you back to your hotel in Moshi (about 45 minutes). Enjoy a long overdue hot shower, dinner, and celebrations!!
                      </p>
                     
                    </div>
                  </div>
                  {/* Itenary 05 */}



                  <span className="sub-title">Items Included</span>
                  <div className="entry-footer wow fadeInUp">
                  <div className="tag-links">
                      </div>
                    <div className="tag-links">
                     <div className="row"> 
                     <a>Lodge safari according to the itinerary</a>
                      <a>Private Jeep 4×4 equipped with refrigerator, portable charging stations and pop-up roof</a>
                      <a>Unlimited mileage game drive</a>
                      <a>Professional, English-speaking guide</a>
                      <a>Overnight stays in Lodges</a>
                      <a>Meals according to the itinerary</a>
                      <a>Mineral water on all days</a>
                      <a>All mentioned activities</a>
                      <a>All park entrances fees</a>
                      <a>All government taxes</a>
                    </div>
                    </div>
                  </div>

                  <span className="sub-title">Items Excluded</span>
                  <div className="entry-footer wow fadeInUp">
                  <div className="tag-links">
                      </div>
                    <div className="tag-links">
                     <div className="row"> 
                     <a>Flights ( International)</a>
                      <a>Alcoholic and soft drinks</a>
                      <a>Tips for safari guide</a>
                      <a>Personal expenses in nature such as money for souvenirs, travel insurance, visa fees etc.</a>
                      <a>Visa fees ( 100 USD for American and 50 USD for non-American)</a>
                      <a>Immunization documents ( yellow fever recommended for visa processing on arrivals)</a>
                      <a>Government imposed increase of taxes and /or park fees</a>
                    </div>
                    </div>
                  </div>


                <div className="sidebar-widget-area">
                  <div className="sidebar-widget category-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Items on Request</h4>
                  <ul className="category-nav">
                    <li>
                      <a>
                      Airport transfers on arrivals and departures
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                    <li>
                      <a>
                        Hotel accommodation in Moshi or Arusha before and after the safari
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                    <li>
                      <a>
                        Local flights
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                    <li>
                      <a>
                        Optional activities like walking safari, visit Masai tribe, hunting etc.
                         <i className="far fa-arrow-right" />
                      </a>
                    </li>
                    <li>
                      <a>
                        Hot air Balloon 599 USD per personal (inclusive of all fees and taxes)
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                  </div>
                  </div>

                </div>
                
               
               
              </div>
            </div>
            <div className="col-xl-4">
              <div className="sidebar-widget-area">
                {/*=== Search Widget ===*/}
                <div className="sidebar-widget search-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Search</h4>
                  <form>
                    <div className="form_group">
                      <label>
                        <i className="far fa-search" />
                      </label>
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Keywords"
                        name="search"
                        required
                      />
                    </div>
                  </form>
                </div>
                {/*=== Category Widget ===*/}
                <div className="sidebar-widget category-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Category</h4>
                  <ul className="category-nav">
                    <li>
                      <a href="#">
                        Tent Camping
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Family Camping
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Wild Camping
                        <i className="far fa-arrow-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Campfire <i className="far fa-arrow-right" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Luxury Cabin <i className="far fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
                {/*=== Recent Post Widget ===*/}
                <div className="sidebar-widget recent-post-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">Recent News</h4>
                  <ul className="recent-post-list">
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-1.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <h5>
                          <Link legacyBehavior href="/blog-details">
                            Quality Assurance Requirements Web Dev Risk Manage
                          </Link>
                        </h5>
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">November 23,2022</a>
                        </span>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-2.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <h5>
                          <Link legacyBehavior href="/blog-details">
                            Deep Div Wonder World Of Displaem Filtering
                          </Link>
                        </h5>
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">November 23,2022</a>
                        </span>
                      </div>
                    </li>
                    <li className="post-thumbnail-content">
                      <img
                        src="assets/images/blog/post-thumb-3.jpg"
                        alt="post thumb"
                      />
                      <div className="post-title-date">
                        <h5>
                          <Link legacyBehavior href="/blog-details">
                            Handling Mountin mountin Naviation Routes In Native
                          </Link>
                        </h5>
                        <span className="posted-on">
                          <i className="far fa-calendar-alt" />
                          <a href="#">November 23,2022</a>
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*=== Banner Widget ===*/}
                <div className="sidebar-widget sidebar-banner-widget wow fadeInUp mb-40">
                  <div className="banner-widget-content">
                    <div className="banner-img">
                      <img
                        src="assets/images/blog/banner-1.jpg"
                        alt="Post Banner"
                      />
                      <div className="hover-overlay">
                        <div className="hover-content">
                          <h4 className="title">
                            <a href="#">Swimming Pool</a>
                          </h4>
                          <p>
                            <i className="fas fa-map-marker-alt" />
                            Marrakesh, Morocco
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*=== Tag Widget ===*/}
                <div className="sidebar-widget tag-cloud-widget gray-bg mb-40 wow fadeInUp">
                  <h4 className="widget-title">Products Tags</h4>
                  <a href="#">Camping</a>
                  <a href="#">Tent Camp</a>
                  <a href="#">Campfire</a>
                  <a href="#">Luxury Cabin</a>
                  <a href="#">Safari Tent</a>
                  <a href="#">House Tree</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Details Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <GallerySection />
    </Layout>
  );
};
export default ThreeDaysItenary;
