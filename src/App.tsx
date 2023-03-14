import { ApolloProvider } from "@apollo/client"
import { Toaster } from "react-hot-toast"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Router } from "./Router"

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Toaster />
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  )
}

export default App
