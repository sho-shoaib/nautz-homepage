import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const ParaSpeciality = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: 0.4,
        },
      });
    }
  }, [inView]);

  return (
    <motion.h5
      className='md:text-lg sm:text-lg xs:text-md text-justify xs:w-full sm:w-full md:w-3/4 lg:w-full'
      ref={ref}
      animate={animation}
      initial={{ opacity: 0, y: 50 }}
    >
      Your NFT is special because no one else owns them. Owning Nautz means it's
      entirely yours; no one else in the whole of space has rights to it! The
      Nautz NFTs are specially hand-made and programmatically generated, so each
      one is 100% unique. The 5000 Nautz have been specially created and curated
      from over 20,000,000 possibilities. All Nautz are stored as ERC-721A
      tokens on the Ethereum Blockchain. Owning one Nautz will primarily give
      you a hefty 20-40% discount at the NAUTZ PRODUCTION HOUSE, exclusive
      access to special clubs, and free entries to all events sponsored by Nautz
      around the world. The Nautz holders will also be eligible for exciting
      giveaways in the community.
    </motion.h5>
  );
};

export default ParaSpeciality;
