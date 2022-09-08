import "./index.css";
import icon4 from "../../assets/compress/planet-4.png";
import icon3 from "../../assets/compress/planet-3.png";
import icon1 from "../../assets/compress/planet-1.png";
import icon2 from "../../assets/compress/planet-2.png";
import useWindowDimensions from "../getWindowDimensions";

function App() {
  const { width } = useWindowDimensions();

  return (
    <>
      {width >= 980 ? (
        <div id='infographic' className='flex flex-col items-center py-5'>
          <div className='step one text-blue-400 font-semibold text-xl'>
            <div
              className='circle relative flex justify-center items-center'
              style={{
                transform: "translateY(60px) translateX(-100%)",
              }}
            >
              <div className='px-2'>
                <img src={icon1} alt='icon-3' className='w-full' />
              </div>
            </div>
            <article data-step='18'>
              <header className='flex items-center '>
                <i className='fas fa-meteor'></i>
                <h6 className='text-white font-semibold text-base'>
                  Ipad pro giveaway
                </h6>
              </header>
            </article>
            <article data-step='1'>
              <header className='flex items-center '>
                <i className='fas fa-meteor'></i>
                <h6 className='text-white font-semibold text-base'>
                  5 ETH Giveaway to our community
                </h6>
              </header>
            </article>
            <article data-step='2'>
              <header className='flex items-center '>
                <i className='fas fa-meteor'></i>
                <h6 className='text-white font-semibold text-base'>
                  Limited edition merch giveaway to every HODLer
                </h6>
              </header>
            </article>
            <article data-step='3'>
              <header className='flex items-center '>
                <i className='fas fa-meteor'></i>
                <h6 className='text-white font-semibold text-base'>
                  Tree plantation under the name of each NFT holder
                </h6>
              </header>
            </article>
            <article data-step='4'>
              <header className='flex items-center '>
                <i className='fas fa-meteor'></i>
                <h6 className='text-white font-semibold text-base'>
                  24 HODLers will get an invite to the Nautz Bunker
                </h6>
              </header>
            </article>
            <article data-step='5'>
              <header className='flex items-center '>
                <i className='fas fa-meteor'></i>
                <h6 className='text-white font-semibold text-base'>
                  Pre-sale access to accessories
                </h6>
              </header>
            </article>
          </div>
          <div className='step two text-blue-500 font-semibold text-xl'>
            <div className='circle'>
              <div className='px-2'>
                <img src={icon2} alt='icon-4' className='w-full' />
              </div>
            </div>
            <article data-step='6'>
              <header className='flex items-center'>
                <i className='fas fa-cookie-bite'></i>
                <h6 className='text-white text-base'>
                  Entry to exclusive holder's club
                </h6>
              </header>
            </article>
            <article data-step='7'>
              <header className='flex items-center'>
                <i className='fas fa-cookie-bite'></i>
                <h6 className='text-white text-base'>
                  5 ETH Giveaway to our community
                </h6>
              </header>
            </article>
            <article data-step='8'>
              <header className='flex items-center'>
                <i className='fas fa-cookie-bite'></i>
                <h6 className='text-white text-base'>
                  Sponsoring 3 college scholarships for aeronotical engineering
                  and space studies
                </h6>
              </header>
            </article>
            <article data-step='9'>
              <header className='flex items-center'>
                <i className='fas fa-cookie-bite'></i>
                <h6 className='text-white text-base'>
                  Value exchange program initiation in the Nautz Bunker
                </h6>
              </header>
            </article>
            <article data-step='10'>
              <header className='flex items-center'>
                <i className='fas fa-cookie-bite'></i>
                <h6 className='text-white text-base'>PS5 giveaway</h6>
              </header>
            </article>
          </div>
          <div className='step three text-danger'>
            <div className='circle text-blue-600 font-semibold text-xl'>
              <div className='px-2'>
                <img src={icon3} alt='icon-3' className='w-full' />
              </div>
            </div>
            <article data-step='11'>
              <header className='flex items-center text-danger'>
                <i className='fas fa-dragon'></i>
                <h6 className='text-white text-base font-semibold'>
                  5 ETH Giveaway to our community
                </h6>
              </header>
            </article>
            <article data-step='12'>
              <header className='flex items-center text-danger'>
                <i className='fas fa-dragon'></i>
                <h6 className='text-white text-base font-semibold'>
                  NAUTZ shorts with commercial rights, NOASIS announcement
                </h6>
              </header>
            </article>
            <article data-step='13'>
              <header className='flex items-center text-danger'>
                <i className='fas fa-dragon'></i>
                <h6 className='text-white text-base font-semibold'>
                  Invitations to nautzpops all over the globe
                </h6>
              </header>
            </article>
            <article data-step='14'>
              <header className='flex items-center text-danger'>
                <i className='fas fa-dragon'></i>
                <h6 className='text-white text-base font-semibold'>
                  MacBook pro giveaway
                </h6>
              </header>
            </article>
            <article data-step='15'>
              <header className='flex items-center text-danger'>
                <i className='fas fa-dragon'></i>
                <h6 className='text-white text-base font-semibold'>
                  NAUTZ sponsorship program
                </h6>
              </header>
            </article>
          </div>
          <div className='step four text-blue-700 font-semibold text-xl'>
            <div className='circle'>
              <div className='px-2'>
                <img src={icon4} alt='icon-3' className='w-full' />
              </div>
            </div>
            <article data-step='6'>
              <header className='flex items-center'>
                <i className='fas fa-cookie-bite'></i>
                <h6 className='text-white text-base'>
                  Free trip to NASA Dubai to our top 5% HODLers
                </h6>
              </header>
            </article>
            <article data-step='7'>
              <header className='flex items-center'>
                <i className='fas fa-cookie-bite'></i>
                <h6 className='text-white text-base'>
                  Launch our own marketplace
                </h6>
              </header>
            </article>
            <article data-step='8'>
              <header className='flex items-center'>
                <i className='fas fa-cookie-bite'></i>
                <h6 className='text-white text-base'>Launch NAUTZ P2E game</h6>
              </header>
            </article>
            <article data-step='9'>
              <header className='flex items-center'>
                <i className='fas fa-cookie-bite'></i>
                <h6 className='text-white text-base'>
                  5 ETH Giveaway to our community
                </h6>
              </header>
            </article>
            <article data-step='10'>
              <header className='flex items-center'>
                <i className='fas fa-cookie-bite'></i>
                <h6 className='text-white text-base'>
                  Custom build PC giveaway
                </h6>
              </header>
            </article>
            <article data-step='17'>
              <header className='flex items-center'>
                <i className='fas fa-cookie-bite'></i>
                <h6 className='text-white text-base'>
                  Sending all 5000 NFTs to space
                </h6>
              </header>
            </article>
          </div>
        </div>
      ) : (
        <div id='infographic' className='flex flex-col items-center py-5'>
          <div className='step one text-white font-semibold text-xl'>
            <div className='flex flex-col items-center'>
              <div className='circle relative flex justify-center items-center'>
                <div className='px-2'>
                  <img src={icon1} alt='icon-3' className='w-full' />
                </div>
              </div>
              <div>
                <article data-step='17'>
                  <header className='flex items-center '>
                    <i className='fas fa-meteor'></i>
                    <h6 className='text-white font-semibold text-base'>
                      Ipad pro giveaway
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center '>
                    <i className='fas fa-meteor'></i>
                    <h6 className='text-white font-semibold text-base'>
                      5 ETH Giveaway to our community
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center '>
                    <i className='fas fa-meteor'></i>
                    <h6 className='text-white font-semibold text-base'>
                      Limited edition merch giveaway to every HODLer
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center '>
                    <i className='fas fa-meteor'></i>
                    <h6 className='text-white font-semibold text-base'>
                      Tree plantation under the name of each NFT holder
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center '>
                    <i className='fas fa-meteor'></i>
                    <h6 className='text-white font-semibold text-base'>
                      24 HODLers will get an invite to the Nautz Bunker
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center '>
                    <i className='fas fa-meteor'></i>
                    <h6 className='text-white font-semibold text-base'>
                      Pre-sale access to accessories
                    </h6>
                  </header>
                </article>
              </div>
            </div>
          </div>
          <div className='step two text-blue-500 font-semibold text-xl'>
            <div>
              <div className='circle'>
                <div className='px-2'>
                  <img src={icon2} alt='icon-4' className='w-full' />
                </div>
              </div>
              <div>
                <article>
                  <header className='flex items-center'>
                    <i className='fas fa-cookie-bite'></i>
                    <h6 className='text-blue-500 text-base'>
                      Entry to exclusive holder's club
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center'>
                    <i className='fas fa-cookie-bite'></i>
                    <h6 className='text-blue-500 text-base'>
                      5 ETH Giveaway to our community
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center'>
                    <i className='fas fa-cookie-bite'></i>
                    <h6 className='text-blue-500 text-base'>
                      Sponsoring 3 college scholarships for aeronotical
                      engineering and space studies
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center'>
                    <i className='fas fa-cookie-bite'></i>
                    <h6 className='text-blue-500 text-base'>
                      Value exchange program initiation in the Nautz Bunker
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center'>
                    <i className='fas fa-cookie-bite'></i>
                    <h6 className='text-blue-500 text-base'>PS5 giveaway</h6>
                  </header>
                </article>
              </div>
            </div>
          </div>
          <div className='step three text-danger'>
            <div>
              <div className='circle text-blue-600 font-semibold text-xl'>
                <div className='px-2'>
                  <img src={icon3} alt='icon-3' className='w-full' />
                </div>
              </div>
              <div>
                <article>
                  <header className='flex items-center text-danger'>
                    <i className='fas fa-dragon'></i>
                    <h6 className='text-blue-600 text-base font-semibold'>
                      5 ETH Giveaway to our community
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center text-danger'>
                    <i className='fas fa-dragon'></i>
                    <h6 className='text-blue-600 text-base font-semibold'>
                      NAUTZ shorts with commercial rights, NOASIS announcement
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center text-danger'>
                    <i className='fas fa-dragon'></i>
                    <h6 className='text-blue-600 text-base font-semibold'>
                      Invitations to nautzpops all over the globe
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center text-danger'>
                    <i className='fas fa-dragon'></i>
                    <h6 className='text-blue-600 text-base font-semibold'>
                      MacBook pro giveaway
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center text-danger'>
                    <i className='fas fa-dragon'></i>
                    <h6 className='text-blue-600 text-base font-semibold'>
                      Funding one space project of young aspirants
                    </h6>
                  </header>
                </article>
              </div>
            </div>
          </div>
          <div className='step four text-blue-700 font-semibold text-xl'>
            <div>
              <div className='circle'>
                <div className='px-2'>
                  <img src={icon4} alt='icon-3' className='w-full' />
                </div>
              </div>
              <div>
                <article>
                  <header className='flex items-center'>
                    <i className='fas fa-cookie-bite'></i>
                    <h6 className='text-blue-700 text-base'>
                      Free trip to NASA Dubai to our top 5% HODLers
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center'>
                    <i className='fas fa-cookie-bite'></i>
                    <h6 className='text-blue-700 text-base'>
                      Launch our own marketplace
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center'>
                    <i className='fas fa-cookie-bite'></i>
                    <h6 className='text-blue-700 text-base'>
                      Launch NAUTZ P2E game
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center'>
                    <i className='fas fa-cookie-bite'></i>
                    <h6 className='text-blue-700 text-base'>
                      5 ETH Giveaway to our community
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center'>
                    <i className='fas fa-cookie-bite'></i>
                    <h6 className='text-blue-700 text-base'>
                      Custom build PC giveaway
                    </h6>
                  </header>
                </article>
                <article>
                  <header className='flex items-center'>
                    <i className='fas fa-cookie-bite'></i>
                    <h6 className='text-blue-700 text-base'>
                      Sending all 5000 NFTs to space
                    </h6>
                  </header>
                </article>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

{
  /* <article data-step='16'>
<header className='flex items-center text-danger'>
  <i
    className='fas fa-flag-checkered'
    style={{ fontSize: "4em", padding: "20px" }}
  ></i>
  <h6 className='text-blue-600 text-base font-semibold'>
    Lorem Ipsum dolor sit Amet
  </h6>
</header>

<h6></h6>
</article> */
}

export default App;
