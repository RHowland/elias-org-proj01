"use client";
import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { ILayoutItemMetadata, ILayouts } from "../../types";

const ResponsiveGridLayout = WidthProvider(Responsive);

interface IProps {
  layouts: ILayouts;
  breakpoints: { [key: string]: number };
  cols: { [key: string]: number };
  isDraggable?: boolean;
  isResizable?: boolean;
}

/* Section 1: */
const GridContainer: React.FC<IProps> = ({ layouts, breakpoints, cols , isDraggable = false , isResizable= false }) => {
  return (
    <>
      {/* Section 2: */}
      <ResponsiveGridLayout
        isDraggable={isDraggable}
        isResizable={isResizable}
        className="layout"
        layouts={layouts}
        breakpoints={breakpoints}
        cols={cols}
        rowHeight={300}
      >
        {/* Section 3: */}
        {layouts?.lg?.map((item: ILayoutItemMetadata, index: number) => (
          <div key={item.i} style={{ border: "1px solid black" }}>
            <img
              src={item.customData.imgUrl}
              alt="image"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </ResponsiveGridLayout>
    </>
  );
};

export default GridContainer;

/**
 * File Name: GridContainer.tsx
 * Component Name: GridContainer
 * Component Type: Functional Component
 * Dev Initials: Elias Emon
 * Date Created: 2024-05-13
 * 
 * 
 * Question: Why was it necessary to create this component?
 * 
 * Answer: This component was likely created to provide a reusable and responsive grid layout functionality for displaying images or other content in a dynamic and organized manner within a React application. 
 * 
 * 
 * Question: What does this component do?
 * 
 * Answer: This component renders a responsive grid layout using the React-Grid-Layout library. It takes in layouts, breakpoints, and column configurations as props to define the grid structure. Inside the grid, it maps over the layout items in the "lg" breakpoint and renders images (or other content) within div elements, applying styling to ensure the images fill their containers.
 * 
 * Section Comments:
 * 
 * Section 1: Defines the GridContainer component as a functional component, taking in props for layouts, breakpoints, columns, draggable and resizable behavior.
 * 
 * Section 2: Renders the ResponsiveGridLayout component from the react-grid-layout library, passing in necessary props and containing the layout items.
 * 
 * Section 3: Maps over the layout items for the "lg" breakpoint and renders images within div elements, applying necessary styling for responsive and dynamic display.
 * 
 * Input Comments: The input comments should describe the purpose and expected format of each prop passed to the component, including layouts, breakpoints, columns, isDraggable, and isResizable.
 * 
 * Output Comments: The output comments should describe what is returned by the component when it's rendered, such as a responsive grid layout with images (or other content) displayed within div elements, styled to fill their containers.
 * 
 * Additional Comments: None
 */
