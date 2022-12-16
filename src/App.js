import logo from './logo.svg';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import styled from 'styled-components';

import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

const MainTitleText = styled.p`
  font-szie: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>Mini Blog</MainTitleText>
      <Routes>
        <Route path="mini-blog" element={<MainPage />} />
        <Route path="/mini-blog/post-write" element={<PostWritePage />}/>
        <Route path="/mini-blog/post/:postId" element={<PostViewPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;