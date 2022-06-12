import React from "react";
import { Box, Container } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import MenuIcon from "@mui/icons-material/Menu";
import useWindowDimensions from "../Components/getWindowDimensions";
import { Link } from "react-scroll";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import DiscordIcon from "../assets/compress/discordIcon.png";

const NavbarHome = () => {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      {width > 850 && (
        <nav
          className={`z-50 w-full ${width > 800 && "sticky top-0"}`}
          style={{
            backgroundColor: "#2F339B",
          }}
        >
          <Container className='flex items-center justify-between py-4'>
            <Link activeClass='active' to='home' spy={true} smooth={true}>
              <p className='font-bold text-2xl text-glow cursor-pointer'>
                NAUTZ
              </p>
            </Link>
            <Box className='flex gap-10 child:text-lg child:font-medium child:cursor-pointer child-hover:opacity-80 child:transition child:ease-in'>
              <Link activeClass='active' to='home' spy={true} smooth={true}>
                <p className='text-xl'>Home</p>
              </Link>
              <Link activeClass='active' to='about' spy={true} smooth={true}>
                <p className='text-xl'>About</p>
              </Link>

              <Link activeClass='active' to='roadmap' spy={true} smooth={true}>
                <p className='text-xl'>Roadmap</p>
              </Link>

              <Link activeClass='active' to='team' spy={true} smooth={true}>
                <p className='text-xl'>Team</p>
              </Link>

              <Link
                activeClass='active'
                to='utilities'
                spy={true}
                smooth={true}
              >
                <p className='text-xl'>Utilities</p>
              </Link>

              <Link activeClass='active' to='faq' spy={true} smooth={true}>
                <p className='text-xl'>FAQ</p>
              </Link>
            </Box>
            <div className='flex gap-6 child-hover:opacity-80 child:transition child:ease-in child:cursor-pointer'>
              <a href='https://twitter.com/nautz_' target='_blank'>
                <TwitterIcon sx={{ fontSize: 30 }} />
              </a>

              <a href='https://www.instagram.com/nautzz/' target='_blank'>
                <InstagramIcon sx={{ fontSize: 30 }} />
              </a>

              <a href='https://discord.gg/CGByNHYQcd' target='_blank'>
                <img src={DiscordIcon} alt='discordIcon' className='w-8' />
              </a>
            </div>
          </Container>
        </nav>
      )}{" "}
      {width <= 850 && width > 550 && (
        <>
          <Container
            className='flex items-center justify-between py-4 z-50'
            sx={{ backgroundColor: "#2F339B" }}
          >
            <p className='font-bold text-xl'>LOGO</p>
            <div className='flex gap-6 child-hover:opacity-80 child:transition child:ease-in child:cursor-pointer'>
              <a href='https://twitter.com/nautz_' target='_blank'>
                <TwitterIcon sx={{ fontSize: 30 }} />
              </a>

              <a href='https://www.instagram.com/nautzz/' target='_blank'>
                <InstagramIcon sx={{ fontSize: 30 }} />
              </a>

              <a href='https://discord.gg/CGByNHYQcd' target='_blank'>
                <img src={DiscordIcon} alt='discordIcon' className='w-8' />
              </a>
            </div>
          </Container>
          <Box
            className='w-full border-t-2 border-indigo-700 p-2 child:text-lg child:font-medium child:cursor-pointer child-hover:opacity-80 child:transition child:ease-in flex gap-5 justify-center py-5 sticky top-0 z-50'
            sx={{
              backgroundColor: "#2F339B",
            }}
          >
            <Link activeClass='active' to='home' spy={true} smooth={true}>
              <p className='text-xl'>Home</p>
            </Link>
            <Link activeClass='active' to='about' spy={true} smooth={true}>
              <p className='text-xl'>About</p>
            </Link>
            <Link activeClass='active' to='roadmap' spy={true} smooth={true}>
              <p className='text-xl'>Roadmap</p>
            </Link>

            <Link activeClass='active' to='team' spy={true} smooth={true}>
              <p className='text-xl'>Team</p>
            </Link>

            <Link activeClass='active' to='utilities' spy={true} smooth={true}>
              <p className='text-xl'>Utilities</p>
            </Link>

            <Link activeClass='active' to='faq' spy={true} smooth={true}>
              <p className='text-xl'>FAQ</p>
            </Link>
          </Box>
        </>
      )}
      {width <= 550 && (
        <>
          <div className='z-50 w-full sticky top-0 relative'>
            <Container
              className='flex items-center justify-between py-4 z-40'
              sx={{ backgroundColor: "#2F339B" }}
            >
              <p className='font-bold text-xl'>LOGO</p>
              <div className='flex gap-6 child-hover:opacity-80 child:transition child:ease-in child:cursor-pointer'>
                <a href='https://twitter.com/nautz_' target='_blank'>
                  <TwitterIcon sx={{ fontSize: 30 }} />
                </a>

                <a href='https://www.instagram.com/nautzz/' target='_blank'>
                  <InstagramIcon sx={{ fontSize: 30 }} />
                </a>

                <a href='https://discord.gg/CGByNHYQcd' target='_blank'>
                  <img src={DiscordIcon} alt='discordIcon' className='w-8' />
                </a>
                {isOpen ? (
                  <CloseIcon sx={{ fontSize: 30 }} onClick={toggle} />
                ) : (
                  <MenuIcon sx={{ fontSize: 30 }} onClick={toggle} />
                )}
              </div>
            </Container>
            <div
              className={`overflow-hidden absolute w-full ${!isOpen && "h-0"}`}
            >
              <Box
                className={`w-full border-t-2 border-indigo-700 p-2 child:text-lg child:font-medium child:cursor-pointer child-hover:opacity-80 child:transition child:ease-in flex flex-col gap-4 justify-center py-3 z-20 transition ${
                  isOpen ? "drop" : "up"
                }`}
                sx={{
                  backgroundColor: "#2F339B",
                }}
              >
                <Link activeClass='active' to='home' spy={true} smooth={true}>
                  <p className='text-lg' onClick={toggle}>
                    Home
                  </p>
                </Link>
                <Link activeClass='active' to='about' spy={true} smooth={true}>
                  <p className='text-lg' onClick={toggle}>
                    About
                  </p>
                </Link>
                <Link
                  activeClass='active'
                  to='roadmap'
                  spy={true}
                  smooth={true}
                >
                  <p className='text-lg' onClick={toggle}>
                    Roadmap
                  </p>
                </Link>

                <Link activeClass='active' to='team' spy={true} smooth={true}>
                  <p className='text-lg' onClick={toggle}>
                    Team
                  </p>
                </Link>

                <Link
                  activeClass='active'
                  to='utilities'
                  spy={true}
                  smooth={true}
                >
                  <p className='text-lg' onClick={toggle}>
                    Utilities
                  </p>
                </Link>

                <Link activeClass='active' to='faq' spy={true} smooth={true}>
                  <p className='text-lg' onClick={toggle}>
                    FAQ
                  </p>
                </Link>
              </Box>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NavbarHome;
