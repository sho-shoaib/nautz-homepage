import "./index.css";

const data = [
  {
    title: "25%",
    points: [
      "5 ETH Giveaway to our community.",
      "Limited edition merch giveaway to every holder.",
      "Tree plantation under the name of each NFT holder.",
      "24 hodlers will get invitation to NAUTZ bunker.",
      "Accessories pre-sale access.",
      "Ipad pro giveaway.",
    ],
  },
  {
    title: "50%",
    points: [
      "Entry to exclusive holder's club.",
      "5 ETH Giveaway to our community.",
      "Sponsoring 3 college scholarships for aeronotical engineering and space studies.",
      "Value exchange program initiation in nautz bunker.",
      "PS5 giveaway.",
    ],
  },
  {
    title: "75%",
    points: [
      "5 ETH Giveaway to our community.",
      "NAUTZ shorts with commercial rights, NOASIS announcement.",
      "Invitations to nautzpops all over the globe.",
      "MacBook pro giveaway.",
      "Funding one space project of young aspirants.",
    ],
  },
  {
    title: "100%",
    points: [
      "Free trip to Dubai NASA for our 5% holders!.",
      "Launch our own marketplace.",
      "Launch NAUTZ P2E game.",
      "5 ETH Giveaway to our community.",
      "Custom build PC giveaway.",
    ],
    last: true,
  },
];

function App() {
  return (
    <>
      <div id='infographic' className='flex flex-col items-center py-5'>
        <div className='step one text-blue-400 font-semibold text-xl'>
          <div
            className='circle'
            style={{ transform: "translateY(60px) translateX(-100%)" }}
          >
            <i className='fas fa-meteor'></i>
            <h4>
              25%
              <br />
              Sold Out!
            </h4>
          </div>
          <article data-step='17'>
            <header className='flex items-center '>
              <i className='fas fa-meteor'></i>
              <h6 className='text-blue-400 font-semibold text-base'>
                Ipad pro giveaway.
              </h6>
            </header>
          </article>
          <article data-step='1'>
            <header className='flex items-center '>
              <i className='fas fa-meteor'></i>
              <h6 className='text-blue-400 font-semibold text-base'>
                5 ETH Giveaway to our community.
              </h6>
            </header>
          </article>
          <article data-step='2'>
            <header className='flex items-center '>
              <i className='fas fa-meteor'></i>
              <h6 className='text-blue-400 font-semibold text-base'>
                Limited edition merch giveaway to every holder.
              </h6>
            </header>
          </article>
          <article data-step='3'>
            <header className='flex items-center '>
              <i className='fas fa-meteor'></i>
              <h6 className='text-blue-400 font-semibold text-base'>
                Tree plantation under the name of each NFT holder.
              </h6>
            </header>
          </article>
          <article data-step='4'>
            <header className='flex items-center '>
              <i className='fas fa-meteor'></i>
              <h6 className='text-blue-400 font-semibold text-base'>
                24 hodlers will get invitation to NAUTZ bunker.
              </h6>
            </header>
          </article>
          <article data-step='5'>
            <header className='flex items-center '>
              <i className='fas fa-meteor'></i>
              <h6 className='text-blue-400 font-semibold text-base'>
                Accessories pre-sale access.
              </h6>
            </header>
          </article>
        </div>
        <div className='step two text-green-400 font-semibold text-xl'>
          <div className='circle'>
            <i className='fas fa-cookie-bite'></i>
            <h4>
              50%
              <br />
              Sold Out!
            </h4>
          </div>
          <article data-step='6'>
            <header className='flex items-center'>
              <i className='fas fa-cookie-bite'></i>
              <h6 className='text-green-400 text-base'>
                Entry to exclusive holder's club.
              </h6>
            </header>
          </article>
          <article data-step='7'>
            <header className='flex items-center'>
              <i className='fas fa-cookie-bite'></i>
              <h6 className='text-green-400 text-base'>
                5 ETH Giveaway to our community.
              </h6>
            </header>
          </article>
          <article data-step='8'>
            <header className='flex items-center'>
              <i className='fas fa-cookie-bite'></i>
              <h6 className='text-green-400 text-base'>
                Sponsoring 3 college scholarships for aeronotical engineering
                and space studies.
              </h6>
            </header>
          </article>
          <article data-step='9'>
            <header className='flex items-center'>
              <i className='fas fa-cookie-bite'></i>
              <h6 className='text-green-400 text-base'>
                Value exchange program initiation in nautz bunker.
              </h6>
            </header>
          </article>
          <article data-step='10'>
            <header className='flex items-center'>
              <i className='fas fa-cookie-bite'></i>
              <h6 className='text-green-400 text-base'>PS5 giveaway.</h6>
            </header>
          </article>
        </div>
        <div className='step three text-danger'>
          <div className='circle text-red-500 font-semibold text-xl'>
            <i className='fas fa-dragon'></i>
            <h4>
              75%
              <br />
              Sold Out!
            </h4>
          </div>
          <article data-step='11'>
            <header className='flex items-center text-danger'>
              <i className='fas fa-dragon'></i>
              <h6 className='text-red-500 text-base font-semibold'>
                5 ETH Giveaway to our community.
              </h6>
            </header>
          </article>
          <article data-step='12'>
            <header className='flex items-center text-danger'>
              <i className='fas fa-dragon'></i>
              <h6 className='text-red-500 text-base font-semibold'>
                NAUTZ shorts with commercial rights, NOASIS announcement.
              </h6>
            </header>
          </article>
          <article data-step='13'>
            <header className='flex items-center text-danger'>
              <i className='fas fa-dragon'></i>
              <h6 className='text-red-500 text-base font-semibold'>
                Invitations to nautzpops all over the globe.
              </h6>
            </header>
          </article>
          <article data-step='14'>
            <header className='flex items-center text-danger'>
              <i className='fas fa-dragon'></i>
              <h6 className='text-red-500 text-base font-semibold'>
                MacBook pro giveaway.
              </h6>
            </header>
          </article>
          <article data-step='15'>
            <header className='flex items-center text-danger'>
              <i className='fas fa-dragon'></i>
              <h6 className='text-red-500 text-base font-semibold'>
                Funding one space project of young aspirants.
              </h6>
            </header>
          </article>
        </div>
        <div className='step two text-green-400 font-semibold text-xl'>
          <div className='circle'>
            <i className='fas fa-cookie-bite'></i>
            <h4>
              100%
              <br />
              Sold Out!
            </h4>
          </div>
          <article data-step='6'>
            <header className='flex items-center'>
              <i className='fas fa-cookie-bite'></i>
              <h6 className='text-green-400 text-base'>
                Free trip to Dubai NASA for our 5% holders!.
              </h6>
            </header>
          </article>
          <article data-step='7'>
            <header className='flex items-center'>
              <i className='fas fa-cookie-bite'></i>
              <h6 className='text-green-400 text-base'>
                Launch our own marketplace.
              </h6>
            </header>
          </article>
          <article data-step='8'>
            <header className='flex items-center'>
              <i className='fas fa-cookie-bite'></i>
              <h6 className='text-green-400 text-base'>
                Launch NAUTZ P2E game.
              </h6>
            </header>
          </article>
          <article data-step='9'>
            <header className='flex items-center'>
              <i className='fas fa-cookie-bite'></i>
              <h6 className='text-green-400 text-base'>
                5 ETH Giveaway to our community.
              </h6>
            </header>
          </article>
          <article data-step='10'>
            <header className='flex items-center'>
              <i className='fas fa-cookie-bite'></i>
              <h6 className='text-green-400 text-base'>
                Custom build PC giveaway.
              </h6>
            </header>
          </article>
        </div>
      </div>
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
  <h6 className='text-red-500 text-base font-semibold'>
    Lorem Ipsum dolor sit Amet
  </h6>
</header>

<h6></h6>
</article> */
}

export default App;
