import {RouterProvider} from "react-router-dom";
import {AuthProvider} from 'react-auth-kit'
import router from "./router.tsx";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
      <AuthProvider authType="localstorage"
      authName="_auth"
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}>
    <RouterProvider router={router}/>
      </AuthProvider>
      </QueryClientProvider>
  );
}

export default App;
