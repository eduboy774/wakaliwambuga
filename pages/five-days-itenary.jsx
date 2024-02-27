import GallerySection from "@/src/components/GallerySection";
import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const ThreeDaysItenary = () => {
  return (
    <Layout extraClass={"pt-160"}>
      <PageBanner pageTitle={"African Big five safari"} />
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
                      <span className="sub-title">African Big five safari</span>
                      <h4>Overview</h4>
                      <p className="text-start">
                      This African Big five safari features three of the popular Northern Circuit game parks.
                       You will see flamingos and other water fowls in Lake Manyara National Park, a crater filled with wild animals in the Ngorongoro Conservation Area and a large selection of animals in the Serengeti National Park.
                      </p>
                      <h4>Full Itinerary</h4>
                      <div className="entry-footer wow fadeInUp">
                      <div className="tag-links">
                      <h6>Day 1 :</h6>
                      <a>Arusha to Lake Manyara National Park</a>
                    </div>
                    </div>
                      <p>
                      In the morning you will be picked up at your hotel to start your African Big five safari to the Lake Manyara National Park. Established in 1960, the small Lake Manyara National Park is home to tree climbing lions, elephants and large troops of baboons and monkeys. <br/><br/>
                      The park is dominated by the shallow, alkaline lake and boasts with diverse habitats like grassy plains, escarpment and forest.
                       Here hundreds of bird species gather most notable, thousands of pink flamingos. In addition to the striking scenery you have the chance to see giraffes, buffaloes, hippos, wildebeests and the comical warthog. 
                       The safari vehicle has an open roof and is the ideal viewing platform to appreciate the nature and animals of this park. In the late afternoon you will leave the park and travel to the lodge, where you will spend the night.
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
                      Take an early drive towards the fertile crater highlands immediately after your breakfast and get mesmerized with the beauty of the crop fields that grow wheat, corn and coffee.
                      At midday you will reach the plains of the Serengeti National Park, the largest park in Tanzania. <br/><br/>
                      The Serengeti has a diversity of landscapes including short grass plains, savannah, thick bush,
                      swamps and lakes and it is famous for the yearly migration when hundred thousands of wildebeest and zebras trek to find fresh grass and water.
                      On your way to your accommodation you will understand, where the word Serengeti (plains in the language of the Masai) comes from. In the early evening you will reach the lodge, where you will spend the night.
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
                      The whole day will be spent on a game drive in the Serengeti National Park.
                      During the short rainy season in November and December the herds move from the hills in the north to the plains in the south while during the longer rainy season from April to June they return back up north. <br/><br/>
                      This circle of life is determined by the rainfalls and locations of the herds might vary from year to year but your guide will know where to find the animals and where to see them best.
                      A visit to the Serengeti Visitor Centre is also possible. Here you can learn more about the history of the park and the research that is being done by the Frankfurter Zoological Society. 
                      You will spend another night at the lodge.
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
                      After breakfast you will continue your African Big five safari in the Serengeti National Park.
                      In the Seronera Valley you might be lucky to see predators hunt as animals gather at the waters during the dry season. 
                      <br/><br/> 
                      After lunch at a picnic spot you will slowly drive in the direction of the Ngorongoro Crater.
                      As soon as you have reached the crater you will have a superb view of the caldera. 
                      This approximate 20 km wide crater is part of an UNESCO World Heritage Site and is home to over 20,000 animals.
                       You will stay at the lodge possibly on the crater rim from where you will be able to enjoy an incredible sunset.
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
                      <a>Ngorongoro Crater to Moshi/Arusha</a>
                    </div>
                    </div>
                      <p>
                      Rise and shine! Take our breakfast and drive down in the steep path of world’s greatest caldera” Ngorongoro Crater” the largest, unbroken and unfolded caldera in the world.
                      The crater is not only scenically beautiful, rather it houses an unbelievable diversity of wildlife such as the Zebras, the rare black rhino and other members of the “Big Five” – lion, elephant, buffalo, rhino and leopard.<br/><br/>
                      The crater is also home to other animals such as hyenas, waterbucks, bushbucks, eland and more than 500 bird species. After an extensive game drive and a picnic lunch you will leave the caldera in the early afternoon and drive back to Moshi/Arusha, where you will arrive in the early evening.
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

                <div className="sidebar-widget category-widget mb-30 wow fadeInUp">
                <div className="footer-content">
                  <p>
                    Which of us ever undertake laborious physical exercise
                    except obtain
                  </p>
                  <form>
                    <div className="form_group">
                      <label>
                        <i className="far fa-paper-plane" />
                      </label>
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required
                      />
                    </div>
                  </form>
                </div>
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
