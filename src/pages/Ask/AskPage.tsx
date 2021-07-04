import { OnlyLeftSideBarLayout } from '@layouts';
import { Sidebar } from '@components';

const AskPage = () => (
  <OnlyLeftSideBarLayout sidebar={<Sidebar />}>
    <div className="AskPage"></div>
  </OnlyLeftSideBarLayout>
);

export default AskPage;
