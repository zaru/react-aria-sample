import "./Checkbox.css";
import { Checkbox as RACheckbox } from "react-aria-components";

interface Props {
  slot?: "selection";
  onClick?: () => void;
}

export function Checkbox(props: Props) {
  return (
    <RACheckbox slot={props.slot} onChange={props.onClick}>
      <div className="checkbox">
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
    </RACheckbox>
  );
}
