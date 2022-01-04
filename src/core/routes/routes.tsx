import Albums from 'pages/albums';
import AlbumDetail from 'pages/albums/detail';
import Home from 'pages/home';
import Posts from 'pages/post';
import PostDetail from 'pages/post/detail';
import ToDos from 'pages/todos';
import { HOME, POST_DETAIL, NOT_FOUND, ALBUM_DETAIL, ALBUMS, TODOS, POSTS } from './constants';

interface IRoutes {
  path: string;
  name: string;
  component: React.ComponentType<any>;
  exact?: boolean;
  isProtected?: boolean;
}

const routes: IRoutes[] = [
  {
    path: HOME,
    name: 'Página Principal',
    component: Home,
  },
  {
    path: POSTS,
    name: 'Página de listagem dos Posts',
    component: Posts,
  },
  {
    path: POST_DETAIL,
    name: 'Página Detalhada do Post',
    component: PostDetail,
  },
  {
    path: ALBUMS,
    name: 'Página de listagem dos Albums',
    component: Albums,
  },
  {
    path: ALBUM_DETAIL,
    name: 'Página Detalhada do Album',
    component: AlbumDetail,
  },
  {
    path: TODOS,
    name: 'Página Listagem de ToDo',
    component: ToDos,
  },
  // Sempre manter no final
  {
    path: NOT_FOUND,
    name: 'Página de error 404',
    component: Home,
  },
];

export default routes;