import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { HomePage } from '@pages';
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
