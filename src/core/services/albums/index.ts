import httpClient from "core/htttp-client";
import Album from "core/types/album";

const getAllAlbums = async (filters?: Object): Promise<Album[]> => {
  const albums = (await httpClient.get<Album[]>('albums', {
    params: filters
  })).data;
  return albums;
}

const getAlbumById = async (albumId: string): Promise<Album> => {
  const album = (await httpClient.get<Album>(`albums/${albumId}`)).data;
  return album;
}

export {
  getAllAlbums,
  getAlbumById
}