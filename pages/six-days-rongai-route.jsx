import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const ThreeDaysItenary = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Discover Northern Tanzania Safari"} />
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
                      <span className="sub-title">Northern Tanzania Safari</span>
                      <h4>Overview</h4>
                      <p className="text-start">
                      Visiting Tanzania and love luxury safari? This Tanzania Lodge Safari tour package is the perfect fit for you.
                      From luxurious to mid-range grade tented camps and lodges, you’ll be accommodated alongside the famous tourist spots where wildlife is most likely to be found.
                      Thus, you’ll have a better wildlife viewing experience. These tented camps and lodges are not only equipped with comforting beds and pillows, but are also safe.<br/><br/>
                      Starting off your tour at Moshi or Arusha, you’ll first visit Tarangire National Park. Next off to the vast plains of Serengeti National Park and pristine wilderness of Ngorongoro Conservation Area.
                       Lastly to Lake Manyara National Park where the lake is the accommodating place of hundreds of bird species. At the end of the tour, you’d have a rich Tanzania Lodge Safari conversance and the unique bush experience with Zambuli Africa safaris to get most excellent Tanzania Lodge Safari.
                      </p>
                      <h4>Full Itinerary</h4>
                      <div className="entry-footer wow fadeInUp">
                      <div className="tag-links">
                      <h6>Day 1 :</h6>
                      <a>Moshi/Arusha to Tarangire National Park</a>
                    </div>
                    </div>
                      <p>
                  You will be picked up in the morning and after a short briefing you will head off in direction of the Tarangire National Park.
                  The park with its savannah, baobab trees, and seasonal swamps is home to huge elephant herds. <br/><br/>
                  This also includes a selection of mammals ranging from giraffes, bushbucks and hartebeests to zebras and warthogs.
                  Besides this some of the most ferocious African predators like buffaloes, lions, leopards and the cheetahs are rarely spotted here.
                  This would be an awe-inspiring experience to watch the wandering animals from the open roof of our safari vehicle. You would head to a nearby lodge in the late afternoon for the rest and the overnight stay.
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
                      <a>Tarangire Area to Lake Natron</a>
                    </div>
                    </div>
                      <p>
                      After breakfast you will leave the area around Tarangire National Park and head to the multicultural village of Mto wa Mbu. 
                      From here you will travel on a spectacular and very bumpy gravel road along the Rift Valley Escarpment with Ol Doinyo Lengai “the holy mountain” of the Masai in the distance. <br/><br/>
                      Today’s destination is the typical Masai village of Ngare Sero in the hot and dusty Rift Valley.
                      From a distance you might be getting to see the pick glow of the flamingoes while breeding and feeding and with the going down of the sun you will join a Masai guide on a walk to a nearby waterfall.
                      After enjoying the beauty of the nature here you would return to the campsite for the dinner and the overnight stay.
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
                      <a>Lake Natron to Serengeti National Park</a>
                    </div>
                    </div>
                      <p>
                      After an early start, you will travel along adventurous dirt tracks with breath-taking views as your vehicle climbs out of the Rift Valley to reach the grassy plains of the Serengeti by midday.
                      In Maasai Serengeti means “endless plains” and truly you would find the grassland savannah stretching here to the horizon with the dotted grazing animals.<br/><br/> 
                      Serengeti is a must sought park for anyone planning for Tanzania safari. Because, it is the park , where the greatest wonder of the world “ The Annual migration of wild beasts “ is conducted in which millions of the animals march in quest of fresh pasture and water without caring for their life and even the life of their calves. After your game viewing you will overnight at a lodge in the northern or central part of the park.
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
                      <a>Serengeti National Park</a>
                    </div>
                    </div>
                      <p>
                      The entire day is dedicated to game viewing in the Serengeti National Park. 
                      You will either go on a full day game drive or join early morning and afternoon drives in the Seronera area, depending on last night’s stop. <br/><br/>
                      The best time to find the wild beasts here is between December and May and for the calving session January and March is the right session to visit.
                      The Seronera area is also the best place to spot the shy and nocturnal leopard. You will spend the night at a lodge in the Seronera area.
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
                      <a>Serengeti National Park to Ngorongoro Conservation Area</a>
                    </div>
                    </div>
                      <p>
                      The morning is set aside for another game drive in the Serengeti and you might spot some creatures that you haven’t seen yet.
                       Animals tend to be more active in the morning before the temperatures soar around midday. <br /><br/>
                      After lunch, you will leave the plains of the Serengeti and travel to the highlands of the Ngorongoro Conservation Area. You will overnight at a lodge directly on the Ngorongoro Crater’s edge with a view over the collapsed volcano.
                      It is a perfect spot to enjoy a sundowner at sunset.
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
                      <a>Ngorongoro Crater to Mto wa Mbu</a>
                    </div>
                    </div>
                      <p>
                      Rise and shine! It is up at daybreak to take on the steep path leading down into the 600 m deep crater. The slopes are forested but soon the landscape changes to savannah with the occasional acacia tree here and there. <br/><br/>
                      The wildlife in the crater is just breath-taking and with a little luck you might see the “Big Five” – lion, elephant, buffalo, rhino and leopard. 
                      You should also see warthogs, wildebeests, zebras, hippos and some of the more than 500 bird species of the area. After an entire morning of game viewing and a picnic lunch in the crater, you will travel to Mto wa Mbu where you will overnight at a lodge.
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
                      <a>Mto wa Mbu to Lake Manyara to Moshi/Arusha</a>
                    </div>
                    </div>
                      <p>
                      After a leisurely breakfast drive to the Lake Manyara National Park.
                      Not only is this park a bird-lover’s paradise with over 400 species of birds, but is also home to primates such as baboons and blue monkeys and many herbivores, such as elephants, hippos, wildebeest, impalas and giraffes. <br/><br/>
                      You might even catch a glimpse of the more carnivorous inhabitants, such as leopards and lions.
                      Through the pop-up roof of your safari vehicle you will see the landscape changing from lush acacia woodlands to grassy floodplains, where colonies of flamingos and other water fowls can be found on the alkaline Lake Manyara shoreline. 
                      After extensive game viewing you will leave the park and you will start your return trip to Moshi/Arusha. You will be dropped off at a hotel of your choice or at the airport.
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
