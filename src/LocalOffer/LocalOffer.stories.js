import React from "react";
import styled from "styled-components";

import LocalOffer from "./LocalOffer";


export default {
  title: "Design System/LocalOffer",
  component: LocalOffer,
};

export const ViewLocalOffer = (args) => (
  <div>
    <LocalOffer {...args} />
  </div>
);

ViewLocalOffer.storyName = "LocalOffer";
ViewLocalOffer.args = {
    "description": "dfsdfs",
    "link": "http://www.google.com",
    "survey_answers": [
      "{answer: \"fsdfsdf\", question: \"What outcomes does y…}",
      "{answer: \"dfsdfsdf\", question: \"What recent SEND-sp…}",
      "{answer: \"dfsdfs\", question: \"How do you involve pa…}",
      "{answer: \"fsdfsd\", question: \"How will you share in…}",
      "{answer: \"fsdfs\", question: \"How accessible is the …}",
      "{answer: \"dfsdf\", question: \"How can children and y…}",
      "{answer: \"sdfsdf\", question: \"What future plans do …}"
    ],
    "sendNeeds": [
      "{id: 3, name: \"Visual impairment\", slug: \"visual-im…}",
      "{id: 4, name: \"Mobility\", slug: \"mobility\"}",
      "{id: 5, name: \"Cognitive\", slug: \"cognitive\"}"
    ]
  }
