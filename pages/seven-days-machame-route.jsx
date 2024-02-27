import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const ThreeDaysItenary = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Machame Route"} />
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
                      7 Days Safaris
                      </h3>
                      <span className="sub-title">Kilimanjaro Trekking</span>
                      <h4>Overview</h4>
                      <p className="text-start">
                      The Machame route, also known as the Whisky Route is one of the most scenic and recommended routes on Kilimanjaro. 
                      This popular route with paths through magnificent forests to gain a ridge leading through the moorland zones to the Shira Plateau. <br/><br/>
                      It then traverses beneath the glaciated precipices of the Southern Ice fields to join the Barafu Route to the summit. Because it can be done over longer periods and the incline is more manageable it has a much higher success rate of summit.
                      </p>
                      <h4>Full Itinerary</h4>
                      <div className="entry-footer wow fadeInUp">
                      <div className="tag-links">
                      <h6>Day 1 :</h6>
                      <a>Machame Gate – Machame Camp</a>
                    </div>
                    </div>
                      <p>
                      Departing from Moshi, drive will take you through the Village of Machame to the Kilimanjaro National Park Gate.
                      We will patiently wait for our permits to be issued while watching the hustle and bustle of operations as many crews prepare for the journey ahead Enjoy the beautiful rainforest scenery and windy trails while your guide tells you about the local flora and fauna and natural wildlife. At these lower elevations, the trail can be muddy and quite slippery. We highly recommend gaiters and trekking poles here.
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
                      <a>Machame Camp – Shira Camp</a>
                    </div>
                    </div>
                      <p>
                      After a good nights sleep and a hearty breakfast we emerge from the rain forest and continue on an ascending path, crossing the valley along a steep rocky ridge.
                      The route now turns west onto a river gorge until we arrive at the Shira campsite. Temperatures begin to drop.
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
                      <a>Shira Camp – Lava Tower – Barranco Camp</a>
                    </div>
                    </div>
                      <p>
                      Although you end the day around the same elevation as when you began, this day is very important for acclimatization.
                      From Shira Plateau we continue east up a ridge, passing the junction towards the Kibo peak before we then continue, South East towards the Lava Tower, called the “Shark’s Tooth” (elev. 4650m/15,250ft).
                      Shortly after the tower, we come to a second junction, which leads to the Arrow Glacier. We then continue to descend to overnight at Barranco Camp.
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
                      <a> Barranco Camp – Karanga Camp</a>
                    </div>
                    </div>
                      <p>
                      After breakfast, we continue on a steep ridge up to the adventurous Barranco Wall to the Karanga Valley and the junction, which connects, with the Mweka Trail. 
                      This is one of the most impressive days to see the power, agility, and strength of your crew zip over this wall with what appears such ease. Overnight at Karanga Camp
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
                      <a>Hike Karanga Camp – Barafu Camp</a>
                    </div>
                    </div>
                      <p>
                      We continue up toward Barafu Camp, and once reached you have now completed the South Circuit, which offers a variety of breathtaking views of the summit from many different angles.
                      An early dinner and rest as we prepare for summit night. Overnight at Barafu Camp.
                      </p>
                     
                    </div>
                  </div>
                  {/* Itenary 05 */}


                   {/* Itenary 06*/}
                   <div className="main-post mt-4 block-quote">
                    <div className="entry-content">
                      <div className="entry-footer wow fadeInUp">
                      <div className="tag-links">
                      <h6>Day 6 :</h6>
                      <a>Barafu Camp – Summit - Mweka Camp</a>
                    </div>
                    </div>
                      <p>
                      Excitement is building as morning comes with an early start between midnight and 2 a.m. 
                      This is the most mentally and physically challenging portion of the trek. 
                      We continue our way to the summit between the Rebmann and Ratzel glaciers trying to stay warm and focused on the amazing sense of accomplishment that lies ahead.
                      With a switchback motion in a northwesterly direction and ascend through heavy scree towards Stella Point on the crater rim.
                      You will be rewarded with the most magnificent sunrise during your short rest here. Faster hikers may view the sunrise from the summit. From here on your remaining 1 hour ascent to Uhuru Peak, you are likely to encounter snow all the way.<br/><br/>
                      Congratulations, one step at a time you have now reached Uhuru Peak the highest point on Mount Kilimanjaro and the entire continent of Africa! After photos, celebrations and maybe a few tears of joy we take a few moments to enjoy this incredible accomplishment.
                      We begin our steep descent down to Mweka Camp, stopping at Barafu for lunch and a very brief rest. We strongly recommend gaiters and trekking poles for uncooperative loose gravel and volcano ash terrain. 
                      Well-deserved rest awaits you to enjoy your last evening on the mountain. Overnight Mweka Camp.
                      </p>
                     
                    </div>
                  </div>
                  {/* Itenary 06 */}


                   {/* Itenary 07*/}
                   <div className="main-post mt-4 block-quote">
                    <div className="entry-content">
                      <div className="entry-footer wow fadeInUp">
                      <div className="tag-links">
                      <h6>Day 7 :</h6>
                      <a>Mweka Camp – Mweka Gate – Moshi</a>
                    </div>
                    </div>
                      <p>
                      After breakfast and a heartfelt ceremony of appreciation and team bonding with your crew, it’s time to say goodbye.
                      We continue the descent down to the Mweka Park Gate to receive your summit certificates. As the weather is drastically warmer, the terrain is wet, muddy and steep and we highly recommend Gaiters and trekking poles.<br/><br/>
                      From the gate, a vehicle will meet you at Mweka village to drive you back to your hotel in Moshi (about 30 minutes). Enjoy a long overdue hot shower, dinner and celebrations!!
                      </p>
                     
                    </div>
                  </div>
                  {/* Itenary 07 */}

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
