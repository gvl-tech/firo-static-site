import React from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"
import { FlexDiv } from "../../../components/utilities/flex-div.component"
import firoBox1 from "../../../assets/animation/firo-box-1.svg"
import firoBox2 from "../../../assets/animation/firo-box-2.svg"
import firoLogo from "../../../assets/animation/firo-logo-1.svg"

const AnimationHome1Desktop = ({ showInitial, setShowInitial }) => {
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1100px)",
  })

  return (
    <>
      {showInitial && (
        <>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-20px",
              left: "80%",
              zIndex: "-1",
            }}
            initial={{ x: 1000 }}
            onAnimationComplete={() => setShowInitial(false)}
            animate={{
              x: 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoLogo} alt={firoLogo} width={300} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              right: "50%",
              zIndex: "-1",
            }}
            initial={{ x: -1000 }}
            onAnimationComplete={() => setShowInitial(false)}
            animate={{
              x: 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoLogo} alt={firoLogo} width={150} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-580px",
              left: "10%",
              zIndex: "-1",
            }}
            initial={{ x: -1000 }}
            onAnimationComplete={() => setShowInitial(false)}
            animate={{
              x: 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoLogo} alt={firoLogo} width={200} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-550px",
              right: "50%",
              zIndex: "-1",
            }}
            initial={{ x: -1000 }}
            onAnimationComplete={() => setShowInitial(false)}
            animate={{
              x: 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoBox2} alt={firoBox2} width={250} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-575px",
              left: "92%",
              zIndex: "-1",
            }}
            initial={{ x: 1000 }}
            onAnimationComplete={() => setShowInitial(false)}
            animate={{
              x: 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoBox2} alt={firoBox2} width={130} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-375px",
              left: "62%",
              zIndex: "-1",
            }}
            initial={{ x: 1000 }}
            onAnimationComplete={() => setShowInitial(false)}
            animate={{
              x: 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoBox2} alt={firoBox2} width={100} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-405px",
              left: "45%",
              zIndex: "-1",
            }}
            initial={{ x: 1000 }}
            onAnimationComplete={() => setShowInitial(false)}
            animate={{
              x: 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoBox1} alt={firoBox1} width={300} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: isTablet ? "-260px" : "-300px",
              left: "32%",
              zIndex: -1,
            }}
            initial={{ x: 1000 }}
            onAnimationComplete={() => setShowInitial(false)}
            animate={{
              x: 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoBox1} alt={firoBox1} width={270} />
            </FlexDiv>
          </motion.FlexDiv>
        </>
      )}

      {!showInitial && (
        <>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-20px",
              left: "80%",
              zIndex: -1,
            }}
            animate={{ x: [0, -150, 0] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              delay: 0.1,
            }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoLogo} alt={firoLogo} width={300} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              right: "50%",
              zIndex: -1,
            }}
            animate={{ x: [0, 250, 0] }}
            transition={{
              repeat: Infinity,
              duration: 28,
              delay: 0.1,
            }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoLogo} alt={firoLogo} width={150} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-580px",
              left: "10%",
              zIndex: -1,
            }}
            animate={{ x: [0, 200, 0] }}
            transition={{
              repeat: Infinity,
              duration: 28,
              delay: 0.1,
            }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoLogo} alt={firoLogo} width={200} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-550px",
              right: "50%",
              zIndex: -1,
            }}
            animate={{ x: [0, 200, 0] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              delay: 0.1,
            }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoBox2} alt={firoBox2} width={250} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-575px",
              left: "92%",
              zIndex: -1,
            }}
            animate={{ x: [0, -150, 0] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              delay: 0.1,
            }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoBox2} alt={firoBox2} width={130} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-375px",
              left: "62%",
              zIndex: -1,
            }}
            animate={{ x: [0, -60, 0] }}
            transition={{
              repeat: Infinity,
              duration: 14,
              delay: 0.1,
            }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoBox2} alt={firoBox2} width={100} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: isTablet ? "-500px" : "-405px",
              left: isTablet ? "30%" : "45%",
              zIndex: -1,
            }}
            animate={{ x: [0, -250, 0] }}
            transition={{
              repeat: Infinity,
              duration: 40,
              delay: 0.1,
            }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoBox1} alt={firoBox1} width={300} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: isTablet ? "-260px" : "-300px",
              left: "32%",
              zIndex: -1,
            }}
            animate={{ x: [0, -120, 0] }}
            transition={{
              repeat: Infinity,
              duration: 26,
              delay: 0.1,
            }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoBox1} alt={firoBox1} width={270} />
            </FlexDiv>
          </motion.FlexDiv>
        </>
      )}
    </>
  )
}

export default AnimationHome1Desktop
