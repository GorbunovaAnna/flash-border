import './App.css';
// import { PageOne } from './page-one';
// import { PageTwo } from './page-two';
import { FlashBorder } from './flash-border';
import { MyComponent } from './MyComponent';

function App() {
  return (
    <>
      {/* <PageOne />
      <PageTwo /> */}
      <FlashBorder add={true}>
        <MyComponent />
      </FlashBorder>
    </>  
  );
}

export default App;
