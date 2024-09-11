import "./App.css";
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

function App() {
  return (
    <>
      <div>aa</div>
      <Select>
        <Label>Favorite Animal</Label>
        <Button>
          <SelectValue />
          <span aria-hidden="true">▼</span>
        </Button>
        <Popover>
          <ListBox>
            <ListBoxItem>Cat</ListBoxItem>
            <ListBoxItem>Dog</ListBoxItem>
            <ListBoxItem>Kangaroo</ListBoxItem>
          </ListBox>
        </Popover>
      </Select>
    </>
  );
}

export default App;
