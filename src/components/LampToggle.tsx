import Button from "./Button";
import { Lamp } from "lucide-react";

function LampToggle() {
  return (
    <div className="mt-5">
      <Button icon={<Lamp size={19} />}> Mati / Hidup</Button>
    </div>
  );
}

export default LampToggle;
