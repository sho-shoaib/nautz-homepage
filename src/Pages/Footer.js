import { Container } from "@mui/material";
import React, { useState } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import DiscordIcon from "../assets/compress/discordIcon.png";
import logo from "../assets/compress/logo.png";
import { Box } from "@mui/system";
import { Link } from "react-scroll";
import useWindowDimensions from "../Components/getWindowDimensions";
import axios from "axios";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const Footer = () => {
  const { width } = useWindowDimensions();
  const [name, setName] = useState("");
  const [twitter, setTwitter] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [responseSent, setResponseSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name !== "" && twitter !== "" && message !== "") {
      const data = {
        Name: name,
        Twitter: twitter,
        Message: message,
      };

      setError(false);
      setOpen(true);
      setLoading(true);
      setResponseSent(false);

      axios.post(process.env.REACT_APP_CONNECTION_URL, data).then((res) => {
        setName("");
        setTwitter("");
        setMessage("");

        setLoading(false);
        setResponseSent(true);
      });
    } else {
      console.log("hey");
      setError(true);
      setOpen(true);
      setResponseSent(false);

      setTimeout(() => {
        setError(false);
      }, 6000);
    }
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      {width > 900 && (
        <Container className='w-full flex md:flex-row xs:flex-col justify-between py-14 md:gap-10 xs:gap-5'>
          {/* logo and text */}
          <div className='flex flex-col basis-72 gap-20'>
            <div className='flex flex-col gap-4'>
              <div className='w-36'>
                <img
                  src={logo}
                  alt='logo2'
                  className='w-full h-full opacity-90'
                />
              </div>
              <div>
                <h2 className='text-justify text-sm'>
                  Nautz is a collection of 5000 different NFTs each blended in a
                  unique way. We are using the latest and the most efficient
                  smart contract that is ERC 721A.
                </h2>
              </div>
            </div>
            <div className='mt-2 opacity-75'>
              <p className='text-sm'>copyright © Rebillion NFT 2025</p>
            </div>
          </div>
          {/* useful links */}
          <div className='flex flex-col gap-14'>
            <div>
              <h4 className='sm:text-xl xs:text-xl font-semibold mb-8'>
                Useful links
              </h4>
              <Box className='grid grid-cols-3 gap-3 gap-y-4 child:self-center child:text-md child:cursor-pointer child-hover:opacity-80 child:transition child:ease-in'>
                <Link activeClass='active' to='home' spy={true} smooth={true}>
                  <p>Home</p>
                </Link>
                <Link activeClass='active' to='about' spy={true} smooth={true}>
                  <p>About</p>
                </Link>

                <Link
                  activeClass='active'
                  to='roadmap'
                  spy={true}
                  smooth={true}
                >
                  <p>Roadmap</p>
                </Link>

                <Link activeClass='active' to='team' spy={true} smooth={true}>
                  <p>Team</p>
                </Link>

                <Link
                  activeClass='active'
                  to='utilities'
                  spy={true}
                  smooth={true}
                >
                  <p>Utilities</p>
                </Link>

                <Link activeClass='active' to='faq' spy={true} smooth={true}>
                  <p>FAQ</p>
                </Link>
              </Box>
              <div className='mt-3 opacity-75 mb-2 translate-y-0.5'>
                <p className='text-lg'>Email: admin@nautz.io</p>
              </div>
            </div>
            <div>
              <div className='flex gap-5'>
                <a
                  href='https://www.instagram.com/nautzz/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <InstagramIcon sx={{ fontSize: 30 }} />
                </a>
                <a
                  href='https://twitter.com/nautz_'
                  target='_blank'
                  rel='noreferrer'
                >
                  <TwitterIcon sx={{ fontSize: 30 }} />
                </a>

                <a
                  href='https://discord.gg/CGByNHYQcd'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={DiscordIcon}
                    alt='discordIcon'
                    className='w-8 mb-2'
                  />
                </a>
              </div>
            </div>
          </div>
          {/* form */}
          <div className='flex items-end flex-col gap-6'>
            <div className='self-start'>
              <p className='sm:text-xl xs:text-xl font-semibold'>Contact us</p>
            </div>
            <div className='flex gap-2'>
              <form onSubmit={handleSubmit}>
                <div className='flex flex-col md:gap-5 xs:gap-8'>
                  <div className='flex flex-col md:gap-4 xs:gap-4'>
                    <div className='flex md:gap-3 xs:gap-3 child:w-40'>
                      <div className='flex flex-col'>
                        <input
                          type='text'
                          placeholder='Name'
                          className='rounded bg-transparent border-2 p-1.5 px-3 w-full disabled:opacity-90'
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          disabled={loading}
                        />
                      </div>
                      <div className='flex flex-col'>
                        <input
                          type='text'
                          name='user_twiter'
                          placeholder='Twitter Handle'
                          className='rounded bg-transparent border-2 p-1.5 px-3 disabled:opacity-90'
                          value={twitter}
                          onChange={(e) => setTwitter(e.target.value)}
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div className='flex flex-col w-full'>
                      <textarea
                        name='message'
                        placeholder='Message'
                        className='rounded bg-transparent border-2 p-1.5 px-3 md:h-full xs:h-32 disabled:opacity-90'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type='submit'
                      className='bg-indigo-600 rounded px-6 p-2 text-md hover:opacity-75 transition duration-300 active:opacity-90 disabled:opacity-90'
                      disabled={loading}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      )}{" "}
      {width < 900 && width > 680 && (
        <Container className='w-full flex md:flex-row xs:flex-col justify-between py-14 md:gap-10 xs:gap-5'>
          {/* logo and useful */}
          <div className='flex justify-around mb-4'>
            <div className='flex flex-col gap-4 basis-72'>
              <div className='w-36'>
                <img
                  src={logo}
                  alt='logo'
                  className='w-full h-full opacity-90'
                />
              </div>
              <div>
                <h2 className='text-justify text-sm'>
                  Nautz is a collection of 5000 different NFTs each blended in a
                  unique way. We are using the latest and the most efficient
                  smart contract that is ERC 721A.
                </h2>
              </div>
            </div>
            <div>
              <p className='sm:text-xl xs:text-xl font-semibold mb-8'>
                Useful links
              </p>
              <Box className='grid grid-cols-3 gap-3 gap-y-4 child:self-center child:text-md child:cursor-pointer child-hover:opacity-80 child:transition child:ease-in'>
                <Link activeClass='active' to='home' spy={true} smooth={true}>
                  <p>Home</p>
                </Link>
                <Link activeClass='active' to='about' spy={true} smooth={true}>
                  <p>About</p>
                </Link>

                <Link
                  activeClass='active'
                  to='roadmap'
                  spy={true}
                  smooth={true}
                >
                  <p>Roadmap</p>
                </Link>

                <Link activeClass='active' to='team' spy={true} smooth={true}>
                  <p>Team</p>
                </Link>

                <Link
                  activeClass='active'
                  to='utilities'
                  spy={true}
                  smooth={true}
                >
                  <p>Utilities</p>
                </Link>

                <Link activeClass='active' to='faq' spy={true} smooth={true}>
                  <p>FAQ</p>
                </Link>
              </Box>
            </div>
          </div>
          {/* useful links */}

          {/* form */}
          <div className='flex items-center gap-4 justify-around'>
            <div className='-ml-6'>
              <div className='self-start mb-4'>
                <p className='sm:text-xl xs:text-xl font-semibold'>
                  Contact us
                </p>
              </div>
              <div className='flex gap-2'>
                <form onSubmit={handleSubmit}>
                  <div className='flex flex-col gap-5 '>
                    <div className='flex flex-col md:gap-4 xs:gap-4'>
                      <div className='flex md:gap-3 xs:gap-3 child:w-40'>
                        <div className='flex flex-col'>
                          <input
                            type='text'
                            placeholder='Name'
                            className='rounded bg-transparent border-2 p-1.5 px-3 w-full disabled:opacity-90'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={loading}
                          />
                        </div>
                        <div className='flex flex-col'>
                          <input
                            type='twitter'
                            name='user_twitter'
                            placeholder='Twitter Handle'
                            className='rounded bg-transparent border-2 p-1.5 px-3 disabled:opacity-90'
                            onChange={(e) => setTwitter(e.target.value)}
                            disabled={loading}
                          />
                        </div>
                      </div>
                      <div className='flex flex-col w-full'>
                        <textarea
                          name='message'
                          placeholder='Message'
                          className='rounded bg-transparent border-2 p-1.5 px-3 md:h-full xs:h-32 disabled:opacity-90'
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type='submit'
                        className='bg-indigo-600 rounded px-6 p-2 text-md hover:opacity-75 transition duration-300 active:opacity-90 disabled:opacity-90'
                        disabled={loading}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className='flex flex-col self-center'>
              <div
                className='mt-2 opacity-75 mb-2 translate-y-0.5'
                style={{ transform: "translateX(3.1px)" }}
              >
                <p className='text-sm'>Email: admin@nautz.io</p>
              </div>
              <div className='flex gap-5'>
                <a
                  href='https://www.instagram.com/nautzz/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <InstagramIcon sx={{ fontSize: 30 }} />
                </a>
                <a
                  href='https://twitter.com/nautz_'
                  target='_blank'
                  rel='noreferrer'
                >
                  <TwitterIcon sx={{ fontSize: 30 }} />
                </a>

                <a
                  href='https://discord.gg/CGByNHYQcd'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={DiscordIcon}
                    alt='discordIcon'
                    className='w-8 mb-2'
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='mt-2 opacity-75 ml-14'>
            <p className='text-sm '>copyright © Rebillion NFT 2025</p>
          </div>
        </Container>
      )}
      {width <= 680 && (
        <Container className='w-full flex flex-col justify-between py-10 md:gap-10 xs:gap-5'>
          {/* logo and useful */}
          <div className='flex flex-col mb-4 gap-10'>
            <div className='flex flex-col gap-4'>
              <div className='w-36'>
                <img
                  src={logo}
                  alt='logo'
                  className='w-full h-full opacity-90'
                />
              </div>
            </div>
            <div className='w-full'>
              <p className='sm:text-xl xs:text-xl font-semibold mb-8'>
                Useful links
              </p>
              <Box className='grid grid-cols-3 gap-3 gap-y-4 child:self-center child:text-md child:cursor-pointer child-hover:opacity-80 child:transition child:ease-in mb-10'>
                <Link activeClass='active' to='home' spy={true} smooth={true}>
                  <p>Home</p>
                </Link>
                <Link activeClass='active' to='about' spy={true} smooth={true}>
                  <p>About</p>
                </Link>

                <Link
                  activeClass='active'
                  to='roadmap'
                  spy={true}
                  smooth={true}
                >
                  <p>Roadmap</p>
                </Link>

                <Link activeClass='active' to='team' spy={true} smooth={true}>
                  <p>Team</p>
                </Link>

                <Link
                  activeClass='active'
                  to='utilities'
                  spy={true}
                  smooth={true}
                >
                  <p>Utilities</p>
                </Link>

                <Link activeClass='active' to='faq' spy={true} smooth={true}>
                  <p>FAQ</p>
                </Link>
              </Box>
              <div className='flex flex-col self-center'>
                <div
                  className='mt-2 opacity-75 mb-2 translate-y-0.5'
                  style={{ transform: "translateX(2px)" }}
                >
                  <p className='text-sm'>Email: admin@nautz.io</p>
                </div>
                <div className='flex gap-5'>
                  <a
                    href='https://www.instagram.com/nautzz/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <InstagramIcon sx={{ fontSize: 30 }} />
                  </a>
                  <a
                    href='https://twitter.com/nautz_'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <TwitterIcon sx={{ fontSize: 30 }} />
                  </a>

                  <a
                    href='https://discord.gg/CGByNHYQcd'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={DiscordIcon}
                      alt='discordIcon'
                      className='w-8 mb-2'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* useful links */}

          {/* form */}
          <div className='flex items-center gap-4'>
            <div className=''>
              <div className='self-start mb-4'>
                <p className='sm:text-xl xs:text-xl font-semibold'>
                  Contact us
                </p>
              </div>
              <div className='flex gap-2'>
                <form onSubmit={handleSubmit}>
                  <div className='flex flex-col gap-5 '>
                    <div className='flex flex-col md:gap-4 xs:gap-4'>
                      <div className='flex md:gap-3 xs:gap-3 child:w-40'>
                        <div className='flex flex-col'>
                          <input
                            type='text'
                            placeholder='Name'
                            className='rounded bg-transparent border-2 p-1.5 px-3 w-full disabled:opacity-90'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={loading}
                          />
                        </div>
                        <div className='flex flex-col'>
                          <input
                            type='twitter'
                            name='user_twitter'
                            placeholder='Twitter Handle'
                            className='rounded bg-transparent border-2 p-1.5 px-3 disabled:opacity-90'
                            value={twitter}
                            onChange={(e) => setTwitter(e.target.value)}
                            disabled={loading}
                          />
                        </div>
                      </div>
                      <div className='flex flex-col w-full'>
                        <textarea
                          name='message'
                          placeholder='Message'
                          className='rounded bg-transparent border-2 p-1.5 px-3 md:h-full xs:h-32 disabled:opacity-90'
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          disabled={loading}
                        />
                      </div>
                    </div>
                    <div>
                      <button
                        type='submit'
                        className='bg-indigo-600 rounded px-6 p-2 text-md hover:opacity-75 transition duration-300 active:opacity-90 disabled:opacity-90'
                        disabled={loading}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='mt-2 opacity-75 '>
            <p className='text-sm '>copyright © Rebillion NFT 2025</p>
          </div>
        </Container>
      )}
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={`${loading ? "info" : error ? "error" : "success"}`}
          sx={{ width: "100%" }}
        >
          {loading && "Sending..."}
          {responseSent && "Response sent!"}
          {error && "Empty Fields!"}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Footer;
