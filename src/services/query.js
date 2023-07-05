import { QueryClient } from "react-query";

const queryClint = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})

export default queryClint;