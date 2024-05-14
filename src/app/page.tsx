import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto my-10">
      <section aria-label="Intro" className="container-fluid">
        {/* Section 1 */}
        {/* Introduction  */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Get Started</h1>
          <p className="mb-4">
            Welcome to our platform dedicated to testing and refining a
            collection of frequently used layout components.
          </p>
          <p>
            Explore the various layout components showcased here, each with its
            own dedicated page, to see how they can enhance your web projects.
          </p>
        </div>

        <hr className="my-8 border-gray-300" />


        {/* Section 2  */}
        {/* Component Conventional Collapse */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Layout Component: Conventional Collapse
          </h2>
          <p className="mb-4">
            Discover a layout component employing a conventional collapse
            method, where right cells follow left cells.
          </p>
          <div className="mb-4">
            <p>{`Expanded view(desktop view):`}</p>
            <pre className="bg-gray-100 p-2 rounded">
              R1C1 R1C2 <br />
              R2C1 R2C2
            </pre>
            <p>{`Collapsed view(mobile view):`}</p>
            <pre className="bg-gray-100 p-2 rounded">
              R1C1 <br />
              R1C2 <br />
              R2C1 <br />
              R2C2
            </pre>
          </div>
          <Link className="mr-2" href="/conventional-collapse">
            <Button>Non Draggable</Button>
          </Link>
          <Link href="/drag-conventional-collapse">
            <Button>Draggable</Button>
          </Link>
        </div>

        <hr className="my-8 border-gray-300" />

        {/* Section 3 */}
        {/* Component Reversed Collapse */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Layout Component: Reversed Collapse
          </h2>
          <p className="mb-4">
            Dive into a layout component utilizing an unconventional collapse
            method, where right cells precede left cells.
          </p>
          <div className="mb-4">
          <p>{`Expanded view(desktop view):`}</p>
            <pre className="bg-gray-100 p-2 rounded">
              R1C1 R1C2 <br />
              R2C1 R2C2
            </pre>
            <p>{`Collapsed view(mobile view):`}</p>
            <pre className="bg-gray-100 p-2 rounded">
              R1C2 <br />
              R1C1 <br />
              R2C2 <br />
              R2C1
            </pre>
          </div>
          <Link href="/reversed-collapse">
            <Button>Explore Component</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

/**
 * ---------------------------------------------------------------------
 * File Name : page.tsx
 * Component Name : Home
 * Component Type : Home Component
 * Dev Initials : Elias Emon
 * Date Created : 2024-05-13
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * 
 * Answer: This component was necessary to serve as the homepage of the application. It provides an introduction to the platform and showcases various layout components available for exploration.
 * 
 * ------------------------------
 * Question: What does this component do?
 * 
 * Answer: This component renders the homepage of the application, containing an introduction section and sections for showcasing different layout components with descriptions and buttons for exploration.
 * 
 * ------------------------------
 * Section Comments:
 * Section 1: Renders the introduction section of the homepage with a brief welcome message and instructions on how to explore the layout components.
 *
 * Section 2: Renders a section for the Conventional Collapse layout component, providing a description, expanded and collapsed view examples, and buttons for navigating to different pages related to this component.
 *
 * Section 3: Renders a section for the Reversed Collapse layout component, providing a description, expanded and collapsed view examples, and a button for navigating to the page related to this component.
 *
 * ------------------------------
 * Input Comments:
 * 
 * None required.
 *
 * ------------------------------
 * Output Comments:
 * 
 * This component outputs the rendered HTML structure of the homepage, including introduction, description, examples, and navigation buttons.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No unusual code was written for this component.
 *
 */
