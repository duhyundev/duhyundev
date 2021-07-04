import { OnlyLeftSideBarLayout } from '@layouts';
import { Sidebar } from '@components';

const PostPage = () => (
  <OnlyLeftSideBarLayout sidebar={<Sidebar />}>
    <div className="PostPage"></div>
  </OnlyLeftSideBarLayout>
);

export default PostPage;
