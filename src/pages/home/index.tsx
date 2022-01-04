import React, { useEffect, useState } from 'react';
import Album from 'core/types/album';
import Post from 'core/types/post';
import { getAllAlbums } from 'core/services/albums';
import { getAllPosts } from 'core/services/posts';
import { Container, Section, SectionTitle, List, SeeMore } from './styles';
import PostCard from 'components/postCard';
import AlbumCard from 'components/albumCard';
import Loading from 'components/loading';

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [albums, setAlbums] = useState<Album[]>();

  useEffect(() => {
    const fetchData = async() => {
      const posts = await getAllPosts();
      setPosts(posts?.slice(0, 4))

      const albums = await getAllAlbums();
      setAlbums(albums?.slice(0,5))
    }
    fetchData();
  }, [])

  if(!posts || !albums){
    return <Loading/>
  }

  return(
    <Container>
      <Section>
        <SectionTitle>Posts</SectionTitle>
        <List>
          {posts?.map((post: Post, key: number)=> (
            <PostCard post={post} key={`post-${key}-${post.id}`}/>
          ))}
        </List>
        <SeeMore to="/posts">Ver mais</SeeMore>
      </Section>
      <Section>
        <SectionTitle>Albuns</SectionTitle>
        <List>
          {albums?.map((album: Album, key: number)=> (
            <AlbumCard album={album} key={`album-${key}-${album.id}`}/>
          ))}
        </List>
        <SeeMore to="/albums">Ver mais</SeeMore>
      </Section>
    </Container>
  );
}

export default Home;