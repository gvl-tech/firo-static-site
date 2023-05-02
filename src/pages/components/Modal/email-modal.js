import React from "react"
import { BoxDiv } from "../../../components/utilities/box-container.component"

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <BoxDiv
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <BoxDiv
        onClick={onClose}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: 0,
        }}
      ></BoxDiv>
      <BoxDiv
        style={{
          position: "relative",
          backgroundColor: "#fff",
          padding: "50px",
          maxWidth: "500px",
          minWidth: "400px",
          maxHeight: "80vh",
          minHeight: "fit-content",
          overflowy: "auto",
          borderRadius: "5px",
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        {children}
      </BoxDiv>
    </BoxDiv>
  )
}

export default Modal
