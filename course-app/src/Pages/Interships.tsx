import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import AlignHorizontalRightIcon from "@mui/icons-material/AlignHorizontalRight";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Slider from "@mui/material/Slider";
import TurnedInNotOutlinedIcon from "@mui/icons-material/TurnedInNotOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Chorme from "../Images/CHORME_LOGO.png";
import FPT from "../Images/FPT_LOGO.png";
import VINFAST from "../Images/VINFAST_LOGO.png";
import CarLOGO from "../Images/Logo-Zalo-Arc 9.png";
import BamBooLogo from "../Images/BamBooLogo.png";
import { Cards } from "../Data/Data";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Link } from "react-router-dom";

const Categories = [
  "Computer Science",
  "Blockchain Development",
  "Full Stack Development",
  "Network Engineering",
  "Python Development",
  "Website Design",
  "WordPress Development",
  "Unity Game Development",
  "Mobile App Development"
]

const Locations = [
  "Work from home",
  "Ha Noi",
  "Ho Chi Minh",
  "Da Nang",
  "An Giang",
  "Ba Ria - Vung Tau",
  "Bac Giang",
  "Bac Kan",
  "Bac Lieu",
  "Bac Ninh"
]


const LOGOS = [VINFAST, FPT, BamBooLogo, Chorme, CarLOGO];

const checkboxs = [
  {
    title: "Work Schedule",
    values: ["Full-time", "Part-time", "Flexible"],
  },
  {
    title: "Salary",
    slider: [
      {
        value: 0,
        label: "0",
      },
      {
        value: 20,
        label: "1tr",
      },
      {
        value: 40,
        label: "2tr",
      },
      {
        value: 60,
        label: "3tr",
      },
      {
        value: 80,
        label: "4tr",
      },
      {
        value: 100,
        label: "5tr",
      },
    ],
    values: ["Not Necesary"],
  },
  {
    title: "Working Conditions",
    values: ["Regular Work", "Distant Work", "Temporary Work", "By Contract"],
  },
  {
    title: "Work Experience",
    values: [
      "Without Experience",
      "Up to 1 year",
      "1 - 3 years",
      "3 - 5 years",
      "5 years or more",
    ],
  },
];

const SortByIcon = () => (
  <span className="text-blue-900 px-3">
    <AlignHorizontalRightIcon />
  </span>
);

const FilterIcon = () => (
  <span className="text-blue-900 px-3">
    <FilterAltIcon />
  </span>
);

const Interships = () => {
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (event: any, title: string) => {
    console.log(event);

    switch (title) {
      case "Category":
        setCategory(event.target.value);
        break;
      case "Location":
        setLocation(event.target.value);
        break;
      case "Search":
        setSearch(event.target.value);
        break;
      default:
        break;
    }
    setCategory(event.target.value);
  };

  const sections = [
    {
      title: "Category",
      value: category,
      parts: Categories,
      isSelect: true,
    },
    {
      title: "Location",
      value: location,
      parts: Locations,
      isSelect: true,
    },
    {
      title: "Search",
      value: search,
      isSelect: false,
    },
  ];

  function valuetext(value: number) {
    return `${value}°C`;
  }

  const styles = {
    select: {
      color: "rgb(35 56 118)", // Change this to your desired color
      border: "2px solid rgb(35 56 118)",
    },
  };

  return (
    <>
      <div className="mx-36">
        <div className="flex justify-between drop-shadow-xl">
          {sections.map((section) => (
            <>
              <Box
                style={{ width: "32%" }}
                className="border shadow-xl mt-14 text-xs"
              >
                <FormControl fullWidth>
                  {section.isSelect ? (
                    <>
                      <InputLabel id="demo-simple-select-label">
                        {section.title}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={section.value}
                        label={section.title}
                        onChange={(event) => handleChange(event, section.title)}
                      >
                        {section.parts?.map((part) =><>
                          <MenuItem value={part}>{part}</MenuItem>
                        </>)}
                      </Select>
                    </>
                  ) : (
                    <TextField
                      id="outlined-basic"
                      label={section.title}
                      variant="outlined"
                    />
                  )}
                </FormControl>
              </Box>
            </>
          ))}
        </div>

        <div className="flex justify-between mt-24">
          <Box style={{ width: "32%" }} className=" text-xs">
            <FormControl fullWidth style={styles.select}>
              <InputLabel
                style={{ color: "rgb(35 56 118)", fontWeight: 600 }}
                id="demo-simple-select-label"
              >
                Filter
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                IconComponent={FilterIcon}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box style={{ width: "16%" }} className=" text-xs">
            <FormControl fullWidth style={styles.select}>
              <InputLabel
                style={{ color: "rgb(35 56 118)", fontWeight: 600 }}
                id="demo-simple-select-label"
              >
                Sort by:
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                IconComponent={SortByIcon}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        <div className="flex drop-shadow-xl mt-10 justify-between">
          <div style={{ width: "32%" }}>
            <div className="border shadow-lg">
              {checkboxs.map((checkbox) => (
                <>
                  <div className="m-5">
                    <label className="text-blue-900 text-xl font-bold">
                      {checkbox.title}
                    </label>
                    {checkbox.slider !== undefined ? (
                      <div className="mt-10">
                        <label className="font-thin">
                          Desired minimum monthly stipend {"("}VND{")"}
                        </label>
                        <Box sx={{ width: "100%" }}>
                          <Slider
                            aria-label="Custom Slider"
                            defaultValue={1}
                            getAriaValueText={valuetext}
                            step={20}
                            valueLabelDisplay="auto"
                            marks={checkbox.slider}
                          />
                        </Box>
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="mt-10 flex flex-col">
                      {checkbox.values.map((value) => (
                        <>
                          <span className="mb-5 font-thin">
                            <input type="checkbox" className="mr-2" /> {value}
                          </span>
                        </>
                      ))}
                    </div>
                  </div>
                </>
              ))}
            </div>

            <div className="mt-10 flex justify-end">
              <button
                style={{ width: "30%" }}
                className="bg-transparent justify-self-end hover:bg-blue-900 text-blue-900 font-semibold hover:text-white py-1 px-4 border border-blue-900 hover:border-transparent rounded"
              >
                Clear All
              </button>
            </div>
          </div>

          <div style={{ width: "65%" }}>
            {Cards.map((card) => {
              return (
                <div className="col-span-1 mb-10 shadow-lg border-r border-b border-l border-t">
                  <div>
                    <div className="flex p-4 justify-between leading-normal">
                      <div className="flex p-4">
                        <div className="mb-8">
                          <div className="border flex items-center px-2 py-1 mb-2">
                            <CheckCircleOutlineIcon className="text-lime-500 mr-2" />{" "}
                            Actively Hiring
                          </div>
                          <div className="text-gray-900 font-semibold text-4xl mb-1">
                            {card.label}
                          </div>
                          <p className="text-gray-400 text-xl text-thin">
                            {card.title}
                          </p>
                          <hr className="mb-5" />

                          <div>
                            <p className="text-gray-400 text-thin mb-5 text-lg flex items-center">
                              <FmdGoodIcon /> HaNoi
                            </p>

                            <div className="flex text-lg mb-10 text-gray-400">
                              <div className="flex flex-col mr-20">
                                <label>START DATE</label>
                                <p className="text-black text-thin text-xl mb-1">
                                  1 Jul - 5 Jul’ 23
                                </p>
                              </div>
                              <div className="flex flex-col mr-20">
                                <label>DURATION</label>
                                <p className="text-black text-thin text-xl mb-1">
                                  6 Months
                                </p>
                              </div>
                              <div className="flex flex-col mr-20">
                                <label>STIPEND</label>
                                <p className="text-black text-thin text-xl mb-1">
                                  3Tr/Month
                                </p>
                              </div>
                            </div>

                            <div className="flex text-lg text-gray-400">
                              <div className="bg-gray-200 px-2 mr-5">3 weeks ago</div>
                              <div className="bg-gray-200 px-2 mr-5">without experience</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className=" mr-5 flex flex-col">
                        <img
                          className="w-28 h-28 mr-8"
                          src={card.logo}
                          alt="Avatar of Jonathan Reinink"
                        />
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="p-4 flex justify-end text-blue-800">
                    <TurnedInNotOutlinedIcon className="text-gray-400" />
                    <Link to={"Details/"+card.id}>
                      View Details <KeyboardArrowRightIcon />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Interships;
