import './assets/scss/reset.scss';
import './assets/scss/App.scss';
import FontEffect from './fontsEffect'
import Page404 from './extraPage/page404'
import Page500 from './extraPage/page500'
import PageHelloWorld from './extraPage/pageHelloWorld';

function App() {
  return (
    <div className="App">
      <FontEffect />
      <Page404 />
      <Page500 />
      <PageHelloWorld />
    </div>
  );
}

export default App;
