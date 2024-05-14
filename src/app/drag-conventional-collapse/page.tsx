import GridContainer from "@/components/gridContainer/GridContainer";
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
};

const DragConventionalCollapse = () => {
  

  return (
    <div className="container mx-auto  my-20">
      {/* section 2  */}
      <GridContainer
      isDraggable={true}
      isResizable={true}
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 2, md: 2, sm: 1, xs: 1, xxs: 1 }}
      />
    </div>
  );
};

export default DragConventionalCollapse;

/**
 * File Name: page.tsx
 * Component Name: DragConventionalCollapse
 * Component Type: Functional Component
 * Dev Initials: Elias Emon
 * Date Created: 2024-05-14
 *
 * Question: Why was it necessary to create this component?
 * 
 * Answer: The component is created to serve as a page component named DragConventionalCollapse.
 * 
 * Question: What does this component do?
 * 
 * Answer: The component renders a container containing a GridContainer component with draggable and resizable functionality enabled. The GridContainer renders a responsive grid layout of images based on the provided layouts, breakpoints, and column configurations.
 * 
 * Section Comments:
 * 
 * Section 1: Defines the layouts for the GridContainer component, specifying the position, size, and custom data (image URLs) for each grid item in the "lg" breakpoint.
 * 
 * Section 2: Defines the DragConventionalCollapse component, which renders a container containing a GridContainer component with draggable and resizable functionality enabled.
 * 
 * Input Comments: The GridContainer component expects layouts, breakpoints, column configurations, and optional props for draggable and resizable functionality.
 * 
 * Output Comments: The output of the DragConventionalCollapse component is a container containing a GridContainer component with draggable and resizable functionality enabled, rendering a responsive grid layout of images.
 * 
 * Additional Comments: None
 */
