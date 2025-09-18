import { Stack, Typography } from "@mui/material";
import SongsInput from "./SongsInput";
import SongsTable from "./SongsTable";

export default function Songs() {
  return (
    <Stack gap={2} justifyContent="center">
      <Typography variant="h3" textAlign="center">
        Songs
      </Typography>
      <SongsInput />
      <SongsTable />
    </Stack>
  );
}
