import { OnlyLeftSideBarLayout } from '@layouts';
import { Sidebar } from '@components';

const LicensePage = () => (
  <OnlyLeftSideBarLayout sidebar={<Sidebar />}>
    <div className="LicensePage"></div>
  </OnlyLeftSideBarLayout>
);

export default LicensePage;
