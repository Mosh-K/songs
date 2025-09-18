import { Clear, Description, Send, UploadFile } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { useState } from "react";
import { useUploadSongs } from "../api/useSongs";
import type { Song } from "../types/songTypes";
import { csvToJson } from "../utils/csvToJson";

export default function SongsInput() {
  const { mutate: uploadMutation } = useUploadSongs();

  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (file) {
      const songs = await csvToJson<Song>(file, {
        headers: ["name", "band", "year"],
        delimiter: ";",
      });
      setLoading(true);
      uploadMutation(songs, {
        onSettled: () => setLoading(false),
      });
      setFile(undefined);
    }
  };

  return (
    <Box
      p={3}
      border={1}
      borderColor="grey.300"
      borderRadius={2}
      width={400}
      mx="auto"
    >
      <Stack spacing={2} alignItems="center">
        <Button
          disabled={loading}
          variant="contained"
          component="label"
          startIcon={<UploadFile />}
        >
          Upload CSV
          <input
            hidden
            type="file"
            accept=".csv"
            value={""}
            onChange={(e) => setFile(e.target.files?.[0])}
          />
        </Button>

        <TextField
          variant="standard"
          placeholder="No file selected"
          value={file?.name ?? ""}
          slotProps={{
            input: {
              readOnly: true,
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Description color={file ? "primary" : "disabled"} />
                </InputAdornment>
              ),
              endAdornment: file && (
                <InputAdornment position="end">
                  <Tooltip title="Clear selected file">
                    <IconButton onClick={() => setFile(undefined)} edge="end">
                      <Clear />
                    </IconButton>
                  </Tooltip>
                </InputAdornment>
              ),
            },
          }}
        />

        <Button
          variant="contained"
          color="primary"
          endIcon={<Send />}
          onClick={handleSend}
          disabled={!file}
          fullWidth
          loading={loading}
          loadingPosition="end"
        >
          Send
        </Button>
      </Stack>
    </Box>
  );
}
