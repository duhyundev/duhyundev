import { OnlyLeftSideBarLayout } from '@layouts';
import { Sidebar } from '@components';

const StoryPage = () => (
  <OnlyLeftSideBarLayout sidebar={<Sidebar />}>
    <div className="StoryPage"></div>
  </OnlyLeftSideBarLayout>
);

export default StoryPage;
