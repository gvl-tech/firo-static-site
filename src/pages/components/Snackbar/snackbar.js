import React, { useState, useEffect } from "react"
import "./snackbar.css"

function Snackbar({ message, timeout = 4000 }) {
  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false)

  useEffect(() => {
    if (message) {
      setIsSnackbarVisible(true)
      const timeoutId = setTimeout(() => {
        setIsSnackbarVisible(false)
      }, timeout)
      return () => clearTimeout(timeoutId)
    }
  }, [message, timeout])

  return (
    <div className={`snackbar ${isSnackbarVisible ? "snackbar--visible" : ""}`}>
      <span className="snackbar__message">{message}</span>
    </div>
  )
}

export default Snackbar
