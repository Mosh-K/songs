import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Song } from "../types/songTypes";
import { QueryKeys } from "./reactQuery/QueryKeys";
import { dbGetSongs, dbUploadSongs } from "./songsClient";

export function useGetSongs() {
  const query = useQuery({
    queryKey: [QueryKeys.Songs],
    queryFn: dbGetSongs,
  });
  return query;
}

export function useUploadSongs() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (songs: Song[]) => dbUploadSongs(songs),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.Songs] });
    },
  });
  return mutation;
}
