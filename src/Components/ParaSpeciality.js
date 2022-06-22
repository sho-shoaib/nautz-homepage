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
    <motion.p
      className='text-lg'
      ref={ref}
      animate={animation}
      initial={{ opacity: 0, y: 50 }}
    >
      Your NFT is special because no one else owns them. Owning Nautz means it's
      fully yours no one in the space has rights on it! Each Nautz NFT is
      specially hand-made and programmatically generated so each one is 100%
      different. 5000 Nautz have been made from 20,000,000 possibilities. All
      Nautz are stored as ERC-721A tokens on the Ethereum Blockchain. Owning one
      Nautz will primarily give you access to 20-40% discount at NAUTZ
      PRODUCTION HOUSE, special clubs, free entries to all NAUTZ sponsored
      events that will take place worldwide. Secondarily you will be eligible
      for giveaways only for our NAUTZ holders.
    </motion.p>
  );
};

export default ParaSpeciality;
