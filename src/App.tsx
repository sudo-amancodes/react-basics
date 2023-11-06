import ListGroup from "./components/ListGroup";
import ButtonComponent from "./components/ButtonComponent";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  let items = ["Tokyo", "Mumbai", "New York", "London"];

  const handleSelection = (item: string) => {
    console.log(item);
  };

  return (
    <>
      {alertVisible && (
        <Alert
          children="This is a error"
          color="primary"
          onClose={() => setAlertVisibility(false)}
        ></Alert>
      )}
      <ButtonComponent
        text="Click Here"
        colorclass="primary"
        onClick={() => {
          setAlertVisibility(true);
        }}
      />
      <div>
        <ListGroup
          items={items}
          heading="cities"
          onSelectItem={handleSelection}
        />
      </div>
    </>
  );
}

export default App;
