import GridContainer from "@/components/gridContainer/GridContainer";
import Link from "next/link";
import { ILayouts } from "@/types";

// section 1 
const layouts: ILayouts = {
  lg: [
    {
      i: "a",
      x: 0,
      y: 0,
      w: 1,
      h: 1,
      customData: { imgUrl: "img/R1C1.jpg" },
    },
    {
      i: "b",
      x: 1,
      y: 0,
      w: 1,
      h: 1,
      customData: { imgUrl: "img/R1C2.jpg" },
    },
    {
      i: "c",
      x: 0,
      y: 1,
      w: 1,
      h: 1,
      customData: { imgUrl: "img/R2C1.jpg" },
    },
    {
      i: "d",
      x: 1,
      y: 1,
      w: 1,
      h: 1,
      customData: { imgUrl: "img/R2C2.jpg" },
    },
  ],
  sm: [
    {
      i: "b",
      x: 1,
      y: 0,
      w: 1,
      h: 1,
      customData: { imgUrl: "img/R1C1.jpg" },
    },
    {
      i: "a",
      x: 0,
      y: 0,
      w: 1,
      h: 1,
      customData: { imgUrl: "img/R1C2.jpg" },
    },
    {
      i: "d",
      x: 1,
      y: 1,
      w: 1,
      h: 1,
      customData: { imgUrl: "img/R2C1.jpg" },
    },
    {
      i: "c",
      x: 0,
      y: 1,
      w: 1,
      h: 1,
      customData: { imgUrl: "img/R2C2.jpg" },
    },
  ],
};

// section 2
const ReversedCollapse = () => {
  

  return (
    <div className="container mx-auto  my-20">
      <GridContainer
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 2, md: 2, sm: 1, xs: 1, xxs: 1 }}
      />
    </div>
  );
};

export default ReversedCollapse;

/**
 * File Name: page.tsx
 * Component Name: Reversed
 * Component Type: Functional Component
 * Dev Initials: Elias Emon
 * Date Created: 2024-05-14
 *
 * Question: Why was it necessary to create this component?
 * 
 * Answer: The component is created to serve as a page component named Reversed.
 * 
 * Question: What does this component do?
 * 
 * Answer: The component renders a container containing a GridContainer component, which in turn renders a responsive grid layout of images based on the provided layouts, breakpoints, and column configurations. The layouts are reversed for the "sm" breakpoint compared to the "lg" breakpoint.
 * 
 * Section Comments:
 * 
 * Section 1: Defines the layouts for the GridContainer component, specifying the position, size, and custom data (image URLs) for each grid item in the "lg" and "sm" breakpoints.
 * 
 * Section 2: Defines the ReversedCollapse component, which renders a container containing a GridContainer component with layouts provided for different breakpoints.
 * 
 * Input Comments: The GridContainer component expects layouts, breakpoints, and column configurations as input props to define the grid structure and content.
 * 
 * Output Comments: The output of the ReversedCollapse component is a container containing a GridContainer component with layouts rendered differently for different breakpoints.
 * 
 * Additional Comments: None
 */
