import React from "react"
import { motion } from "framer-motion"
import { FlexDiv } from "../../../../components/utilities/flex-div.component"
import firoCoin2 from "../../../../assets/animation/firo-coin-2.svg"
import firoCoin3 from "../../../../assets/animation/firo-coin-3.svg"
import firoCoin4 from "../../../../assets/animation/firo-coin-4.svg"
import firoCoin5 from "../../../../assets/animation/firo-coin-5.svg"

const AnimationFiroToken = ({ showInitial, setShowInitial }) => {
  return (
    <>
      {showInitial && (
        <>
          <motion.div
            style={{
              position: "relative",
              top: "-430px",
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
              <img src={firoCoin5} alt={firoCoin5} width={150} />
            </FlexDiv>
          </motion.div>
          <motion.div
            style={{
              position: "relative",
              top: "-300px",
              left: "50%",
              zIndex: "-1",
            }}
            initial={{ y: -1000 }}
            onAnimationComplete={() => setShowInitial(false)}
            animate={{
              y: 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img src={firoCoin4} alt={firoCoin4} width={100} />
            </FlexDiv>
          </motion.div>
          <motion.div
            style={{
              position: "relative",
              top: "20px",
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
              <img src={firoCoin3} alt={firoCoin3} width={200} />
            </FlexDiv>
          </motion.div>
          <motion.div
            style={{
              position: "relative",
              top: "-480px",
              right: "10%",
              zIndex: "-1",
            }}
            initial={{ y: -1000 }}
            onAnimationComplete={() => setShowInitial(false)}
            animate={{
              y: 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <FlexDiv
              style={{
                position: "absolute",
              }}
            >
              <img
                src={firoCoin2}
                alt={firoCoin2}
                width={100}
                style={{ transform: "rotate(15deg)" }}
              />
            </FlexDiv>
          </motion.div>
          <motion.div
            style={{
              position: "relative",
              top: "-100px",
              right: "10%",
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
              <img
                src={firoCoin2}
                alt={firoCoin2}
                width={200}
                style={{ transform: "rotate(-25deg)" }}
              />
            </FlexDiv>
          </motion.div>
          <motion.div
            style={{
              position: "relative",
              top: "-80px",
              left: "75%",
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
              <img
                src={firoCoin2}
                alt={firoCoin2}
                width={400}
                style={{ opacity: 0.8 }}
              />
            </FlexDiv>
          </motion.div>
        </>
      )}

      {!showInitial && (
        <>
          <motion.div
            style={{
              position: "relative",
              top: "-430px",
              zIndex: -1,
            }}
            animate={{ x: [0, 400, 0] }}
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
              <img src={firoCoin5} alt={firoCoin5} width={150} />
            </FlexDiv>
          </motion.div>
          <motion.div
            style={{
              position: "relative",
              top: "-300px",
              left: "50%",
              zIndex: -1,
            }}
            animate={{ y: [0, 150, 0] }}
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
              <img src={firoCoin4} alt={firoCoin4} width={100} />
            </FlexDiv>
          </motion.div>
          <motion.div
            style={{
              position: "relative",
              top: "20px",
              left: "20%",
              zIndex: -1,
            }}
            animate={{ x: [0, -200, 0] }}
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
              <img src={firoCoin3} alt={firoCoin3} width={200} />
            </FlexDiv>
          </motion.div>
          <motion.div
            style={{
              position: "relative",
              top: "-480px",
              right: "10%",
              zIndex: -1,
            }}
            animate={{ y: [0, 200, 0] }}
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
              <img
                src={firoCoin2}
                alt={firoCoin2}
                width={100}
                style={{ transform: "rotate(15deg)" }}
              />
            </FlexDiv>
          </motion.div>
          <motion.div
            style={{
              position: "relative",
              top: "-100px",
              right: "10%",
              zIndex: -1,
            }}
            animate={{ x: [0, 300, 0] }}
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
              <img
                src={firoCoin2}
                alt={firoCoin2}
                width={200}
                style={{ transform: "rotate(-25deg)" }}
              />
            </FlexDiv>
          </motion.div>
          <motion.div
            style={{
              position: "relative",
              top: "-80px",
              left: "75%",
              zIndex: -1,
            }}
            animate={{ x: [0, -150, 0] }}
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
              <img
                src={firoCoin2}
                alt={firoCoin2}
                width={400}
                style={{ opacity: 0.8 }}
              />
            </FlexDiv>
          </motion.div>
        </>
      )}
    </>
  )
}

export default AnimationFiroToken
