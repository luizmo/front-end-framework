import httpClient from "core/htttp-client";
import Photo from "core/types/photo";


const getPhotosByAlbumId = async (albumId: string): Promise<Photo[]> => {
  const photos = (await httpClient.get<Photo[]>('photos',{
    params:{
      albumId
    }
  })).data;
  return photos;
}

export {
  getPhotosByAlbumId
}