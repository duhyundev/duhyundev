import { OnlyLeftSideBarLayout } from '@layouts';
import { Sidebar } from '@components';

const NetworkPage = () => (
  <OnlyLeftSideBarLayout sidebar={<Sidebar />}>
    <div className="NetworkPage"></div>
  </OnlyLeftSideBarLayout>
);

export default NetworkPage;
