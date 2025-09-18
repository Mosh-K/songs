import { Box } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useGetSongs } from "../api/useSongs";
import type { Song } from "../types/songTypes";

export default function SongsTable() {
  const { data: songs = [] } = useGetSongs();

  const columns: GridColDef<Song>[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "band", headerName: "Band", flex: 1 },
    { field: "year", headerName: "Year", flex: 1 },
  ];

  return (
    <Box mx="auto" sx={{ height: 400, width: 500 }}>
      <DataGrid
        columns={columns}
        rows={songs}
        getRowId={(row) => `${row.name}-${row.band}`}
      />
    </Box>
  );
}
