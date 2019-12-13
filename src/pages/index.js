import React from "react"
import Auth0Lock from "auth0-lock"

const IndexPage = () => {
  const lock = new Auth0Lock("CLIENT_SECRET", "CLIENT_DOMAIN_ID")
  return <div>{lock.show()}</div>
}

export default IndexPage
