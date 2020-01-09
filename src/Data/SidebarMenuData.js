import {
  GiMolecule,
  GiAtom,
  GiComputing,
  GiSoapExperiment,
  GiCash
} from "react-icons/gi";
import { MdFunctions } from "react-icons/md";
import { FaTheaterMasks } from "react-icons/fa";

function onClick(e, item) {
  console.log("hello");
}

const papersData = [
  {
    name: "past-paper",
    label: "Past Papers",
    isLink: true
  },
  {
    name: "model-paper",
    label: "Model Papers",
    isLink: true
  },
  {
    name: "term-test-paper",
    label: "Term Test Papers",
    isLink: true
  }
];

export default [
  "divider",
  {
    name: "combined-maths",
    label: "Combined Mathematics",
    Icon: MdFunctions,
    isLink: false,
    items: papersData,
    onClick
  },
  "divider",
  {
    name: "physics",
    label: "Physics",
    Icon: GiAtom,
    items: papersData
  },
  "divider",
  {
    name: "chemistry",
    label: "Chemistry",
    Icon: GiSoapExperiment,
    items: papersData
  },
  "divider",
  {
    name: "Biology",
    label: "Biology",
    Icon: GiMolecule,
    items: [
      {
        name: "past-papers",
        label: "Past Papers"
      },
      {
        name: "model-papers",
        label: "Model Papers"
      },
      {
        name: "term-test-papers",
        label: "Term Test Papers",

        items: [
          {
            name: "grade-12",
            label: "Grade 12",
            items: [
              { name: "term-1", label: "1st Term" },
              { name: "term-2", label: "2nd Term" },
              { name: "term-3", label: "3rd Term" }
            ]
          },
          { name: "grade-12", label: "Grade 13" }
        ]
      }
    ]
  },
  "divider",
  {
    name: "ict",
    label: "I.C.T",
    Icon: GiComputing,
    items: papersData
  },
  "divider",
  {
    name: "econ",
    label: "Economics",
    Icon: GiCash,
    items: papersData
  },
  "divider",
  {
    name: "arts",
    label: "Fine Arts",
    Icon: FaTheaterMasks,
    items: papersData
  }
];
