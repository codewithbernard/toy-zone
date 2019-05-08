import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import ToyZone from "../src";

storiesOf("ToyZone", module)
  .add("Basic", () => <ToyZone onFilesAdded={action("Files uploaded")} />)
  .add("Loading", () => <ToyZone loading />);
