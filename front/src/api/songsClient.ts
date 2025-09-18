import axios from "axios";
import { API_URL } from "../config";
import type { Song } from "../types/songTypes";

export async function dbGetSongs(): Promise<Song[]> {
  try {
    const res = await axios.get<Song[]>(`${API_URL}/songs`);
    return res.data;
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error;
  }
}

export async function dbUploadSongs(songs: Song[]) {
  try {
    return axios.post(`${API_URL}/songs`, songs);
  } catch (error) {
    console.error("Error uploading songs:", error);
    throw error;
  }
}
