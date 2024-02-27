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
                      6 Days Safaris
                      </h3>
                      <span className="sub-title">Discover Northern Tanzania Safari</span>
                      <h4>Overview</h4>
                      <p className="text-start">
                      On this safari package Discover Northern Tanzania Safari allows you to explore all major of the popular Northern Circuit game parks. Apart from the Serengeti National Park and the Ngorongoro Conservation Area, you will also visit the Tarangire and Lake Manyara National Park.
                      You will see swamps and savannah, huge herds of elephants and a crater full of game.
                      </p>
                      <h4>Full Itinerary</h4>
                      <div className="entry-footer wow fadeInUp">
                      <div className="tag-links">
                      <h6>Day 1 :</h6>
                      <a>Moshi/Arusha to Tarangire National Park</a>
                    </div>
                    </div>
                      <p>
                      In the morning you will be picked up from your hotel to start your safari to the Tarangire National Park. The park is roughly the size of Luxemburg and covers an area of about 2,600 km².
                      Bush savannah, seasonal swamps and giant baobab trees make up the landscape of this nature reserve and the park is probably one of the best places in East Africa to see elephants. <br/><br/>
                      Not only they are found in thousands but also they seem to be more accustomed to the vehicles, and for this you can be closer to these gigantic animals.
                      It is not only the elephants rather a varied numbers of animals such as to Masai giraffes, various gazelles, antelopes, buffaloes, lions, leopards, baboons and more than 500 types of birds make this the one stop solution for both the bird and the animal lovers.
                      After an extensive game drive you will leave the park in the late afternoon and drive to the Camp for your overnight stay.
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
                      <a>Tarangire Area to Serengeti National Park</a>
                    </div>
                    </div>
                      <p>
                      After breakfast you will travel from the Tarangire Area to the lush highlands where crops such as wheat, corn and coffee are grown. Travelling through the Ngorongoro Conservation Area you might stop for a breath-taking view over the Ngorongoro Crater before you continue to the Serengeti National Park. <br/><br/>
                      The vast savannah of Serengeti that stretches to the horizon teeming with the wild animals would enthrall to any of the visitors visiting this park. 
                      In Maasai language Serengeti means “endless plains” and the park justifies to its name bizarre rock formations dot the grassy landscape where predators roam. Blue wildebeests, Thomson’s gazelles, zebras and buffaloes are on the menu… Through the high and open roof of the safari vehicle you will be able to enjoy the diversified habitats and landscapes of the park. 
                      You will arrive in the Seronera Valley for an evening meal and overnight stay at the Camp.
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
                      <a>Serengeti National Park</a>
                    </div>
                    </div>
                      <p>
                      The entire day is dedicated to game viewing in the Serengeti National Park. The areas that you will visit will depend upon where the migrating herds are to be found. Predators usually follow closely behind the trekking animals. <br/><br/>
                      During the short rainy season in November and December the herds move from the hills in the north to the plains in the south. During the longer rainy season from April to June they return up north. As the migration depends upon the yearly rains, the location of the herds might vary from year to year but guide will know where to see them best.
                      You will spend another night at the same Camp.
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
                      <a>Serengeti National Park to Ngorongoro Conservation Area</a>
                    </div>
                    </div>
                      <p>
                      After breakfast you will join another game drive in the Serengeti National Park and you might spot animals you haven’t seen during the last two days.
                      The Serengeti is also home to the “Big Five” – lion, elephant, buffalo, rhino and leopard and today you might be able to tick off all the members of this group.
                      <br/><br/> 
                      After lunch at a picnic site, you will drive in direction of the Ngorongoro Crater and as soon as you have reached the edge of the crater, the caldera opens up before you. 
                      This approximate 20 km wide crater is a UNESCO World Heritage Site and home to over 25,000 animals. You will drive to the Camp from where you can witness the sun set over the crater.
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
                      <a>Ngorongoro Crater to Lake Manyara Area Discover</a>
                    </div>
                    </div>
                      <p>
                      Rise and shine! After breakfast at day break you drive down into the crater.
                      Inside the world’s biggest caldera you will see a diversity of wildlife ranging from black rhinos, Grant’s and Thomson’s gazelles, lions and leopards, to elephants and mountain reedbucks in the forests on the slopes. 
                      You might also see buffaloes, spotted hyenas and some of the more than 500 bird species of the area.<br/><br/> 
                      After an extensive game drive and a picnic lunch you will leave the crater in the afternoon to travel the Camp.
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
                      <a>Ngorongoro Crater to Lake Manyara Area Discover</a>
                    </div>
                    </div>
                      <p>
                      The small Lake Manyara National Park is home to over 400 bird species, primate-filled forests and grassy plains.
                      A large area of the park is covered by the alkaline Lake Manyara, which is home to colonies of flamingos and other water birds. <br/><br/>
                      Apart from giraffes, hippos, wildebeests and impalas on the grassy plains, you might see lions lounging in the trees and elephants feeding on the acacias in the woodlands. While the forest near the lake is filled with noisy troops of blue monkeys, extended baboon families hang around the roads.
                      After an intensive game drive you will return to Moshi/Arusha in the late afternoon.
                      </p>
                     
                    </div>
                  </div>
                  {/* Itenary 06 */}

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
