import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import './switch.scss'; // fichier SCSS pour custom

const Switch = React.forwardRef((props, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={`custom-switch ${props.className || ""}`}
    {...props}
  >
    <SwitchPrimitive.Thumb className="custom-switch-thumb" />
  </SwitchPrimitive.Root>
));

Switch.displayName = "Switch";
export { Switch };
