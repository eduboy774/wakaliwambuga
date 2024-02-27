import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const ThreeDaysItenary = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"Best of Tanzania Safari"} />
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
                      4 Days Safaris
                      </h3>
                      <span className="sub-title">Tanzania Lodge Safari</span>
                      <h4>Overview</h4>
                      <p className="text-start">
                      This 4 Days Tanzania Camping Safari tour goes to Serengeti national park,
                      Ngorongoro crater and one of Tarangire national park or Lake Manyara national park depending on which will be selling better viewing of animals at that particular time.
                      You have high chance to see all big five while having short time in three big national parks of the northern circuit.
                      </p>
                      <h4>Full Itinerary</h4>
                      <div className="entry-footer wow fadeInUp">
                      <div className="tag-links">
                      <h6>Day 1 :</h6>
                      <a>Arusha to Lake Manyara National Park</a>
                    </div>
                    </div>
                      <p>
                      We would pick up you from your hotel after breakfast to visit the Lake Manyara National park,
                      which stretches along the 600 m high Rift Valley Escarpment: and is a good spot for combining the nature with adventure. 
                      The alkaline Lake Manyara is the center of attraction. Many water birds gather at the lake and more than 400 bird species are found in the park.<br/><br/>
                      Its diverse vegetation supports to a large numbers of herbivorous and the carnivores ultimately. 
                      Some of the animals you would encounter here are the monkeys in the forest, giraffes and antelopes on the grasslands and elephants around the acacia trees.
                      Manyara lions, lounging in the trees are a great sight to see in the afternoon drive. After your game drive is off, head to the lodge, where you will spend the night.
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
                      <a>Lake Manyara Area to Serengeti National Park</a>
                    </div>
                    </div>
                      <p>
                      After breakfast you will drive towards the fertile crater highlands where the farmers grow wheat,
                      corn and coffee. You will pass the Ngorongoro Crater before you reach the plains of the Serengeti National Park around midday.
                      With short grass plains, savannah, thick bush, swamps, mountains and lakes and with Bizarre rock formations called Kopjes
                       where the ferocious predators are often found and Annual Migration of wild beasts, this is one of the central attraction of Tanzania.
                    .<br/><br/>
                    Depending on the season you will witness the migration of thousands of animals for which this park is famous for. 
                    More than 2.5 million mammals move from one eco-system to the other in search of food and water. On their way to Kenya they give birth to calves many of which are haunted by the lurking predators.
                    Most of the mammals loss their life while crossing the crocodile infested Mara River. But remember that, Annual Migration is an unpredictable thing, as it entirely depends on the rain pattern, 
                    but your guide will know where to find the animals and where to see them best. You will spend the night at the lodge.
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
                      <a>Serengeti National Park to Ngorongoro Conservation Area</a>
                    </div>
                    </div>
                      <p>
                      Dawn is a good time to watch wildlife and so you will be up early to join an early morning game drive. You will return to the camp for breakfast before heading out for another game drive in the park. 
                       <br/><br/>
                       Here in the Seronera region you will often see wildebeests and zebras in close proximity of lions and other predators such as leopards and cheetahs. 
                       After a picnic lunch you will continue your journey towards the Ngorongoro Crater. Once you have reached the crater rim you will enjoy fantastic views of this 600 m deep collapsed volcano.
                       You will stay at the lodge, situated on the craters edge or Karatu town.
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
                      <a>Ngorongoro Crater to Arusha</a>
                    </div>
                    </div>
                      <p>
                      After an early breakfast you will drive down the steep and narrow road that takes you into the crater. 
                      The slopes are forested but soon the landscape changes to savannah. Here the wildlife is just breath-taking and with a little luck you can observe the “Big Five” – lion, elephant, buffalo, rhino and leopard – in just a few hours.<br/><br/> 
                      You should also see warthogs, wildebeests, zebras, hippos and some of the more than 500 bird species of the area. After a morning dedicated to game viewing and a picnic lunch, you will leave the crater in the early afternoon to drive back to Arusha/Moshi, where you will arrive in the early evening.
                      </p>
                     
                    </div>
                  </div>
                  {/* Itenary 04 */}

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
