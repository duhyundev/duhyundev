import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { HomePage, StoryPage, NetworkPage, PostPage, LicensePage, AskPage } from '@pages';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/story" component={StoryPage} />
        <Route exact path="/network" component={NetworkPage} />
        <Route exact path="/post" component={PostPage} />
        <Route exact path="/license" component={LicensePage} />
        <Route exact path="/ask" component={AskPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
