import React from "react"
import { motion } from "framer-motion"
import { FlexDiv } from "../../../components/utilities/flex-div.component"
import firoBox1 from "../../../assets/animation/firo-box-1.svg"
import firoBox2 from "../../../assets/animation/firo-box-2.svg"
import firoLogo from "../../../assets/animation/firo-logo-1.svg"

const AnimationHome1Mobile = ({ showInitial, setShowInitial }) => {
  return (
    <>
      {showInitial && (
        <>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-580px",
              right: "15%",
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
              <img src={firoBox1} alt={firoBox1} width={220} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-640px",
              left: "20%",
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
              <img src={firoBox2} alt={firoBox2} width={120} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-150px",
              left: "25%",
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
              <img src={firoBox2} alt={firoBox2} width={70} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-100px",
              right: "55%",
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
              <img src={firoBox2} alt={firoBox2} width={100} />
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
              <img src={firoLogo} alt={firoLogo} width={200} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              left: "10%",
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
              <img src={firoLogo} alt={firoLogo} width={150} />
            </FlexDiv>
          </motion.FlexDiv>
        </>
      )}

      {!showInitial && (
        <>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-580px",
              right: "15%",
              zIndex: -1,
            }}
            animate={{ x: [0, -60, 0] }}
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
              <img src={firoBox1} alt={firoBox1} width={220} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-640px",
              left: "20%",
              zIndex: -1,
            }}
            animate={{ x: [0, -40, 0] }}
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
              <img src={firoBox2} alt={firoBox2} width={120} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-150px",
              left: "25%",
              zIndex: -1,
            }}
            animate={{ x: [0, -40, 0] }}
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
              <img src={firoBox2} alt={firoBox2} width={70} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              top: "-100px",
              right: "55%",
              zIndex: -1,
            }}
            animate={{ x: [0, 30, 0] }}
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
              <img src={firoBox2} alt={firoBox2} width={100} />
            </FlexDiv>
          </motion.FlexDiv>
          <motion.FlexDiv
            style={{
              position: "relative",
              right: "50%",
              zIndex: -1,
            }}
            animate={{ x: [0, -30, 0] }}
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
              left: "10%",
              zIndex: -1,
            }}
            animate={{ x: [0, -30, 0] }}
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
              <img src={firoLogo} alt={firoLogo} width={150} />
            </FlexDiv>
          </motion.FlexDiv>
        </>
      )}
    </>
  )
}

export default AnimationHome1Mobile
