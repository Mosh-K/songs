import { Box } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/reactQuery/queryClient";
import Songs from "./components/Songs";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <Songs />
      </Box>
    </QueryClientProvider>
  );
}

export default App;
