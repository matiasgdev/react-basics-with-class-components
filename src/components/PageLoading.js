import React from 'react'
import Loader from './Loader'

const styles = {
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}

export default function PageLoading() {
  return (
    <div style={styles} className="pageLoading">
      <Loader />
    </div>
  )
}
