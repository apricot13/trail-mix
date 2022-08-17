import React from "react";

import {ScoutButton, SolidButton} from "./ScoutButton"


export default {
  title: "Design System/ScoutButton",
  component: ScoutButton,
};

export const ViewScoutButton = (args) => (
  <div>
    <ScoutButton {...args}>
    ScoutButton
    </ScoutButton>
  </div>
);

ViewScoutButton.storyName = "Scout Button";

export const ViewSolidButton = (args) => (
  <div>
    <SolidButton {...args}>
    SolidButton
    </SolidButton>
  </div>
);

ViewSolidButton.storyName = "Solid Button";


