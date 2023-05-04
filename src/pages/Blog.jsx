import React, { useRef } from "react";
import html2pdf from "html2pdf.js";

const Blog = () => {
    const sectionRef = useRef(null);

  const handleDownload = () => {
    const section = sectionRef.current;
    const opt = {
      margin: 1,
      filename: `Blog.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().from(section).set(opt).save();
  };
  return (
    <div className="bg-gray-100 py-10 border-t-2" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <button className="btn mb-4" onClick={handleDownload}>Download Now</button>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4"><span className="border-b-2 border-orange-500">
            Tell us the differences between uncontrolled and controlled components.</span>
          </h3>
          <p className="text-gray-700 leading-relaxed">
            In a controlled component, the form data is handled by a React
            component. The React component is responsible for rendering the form
            and managing its state. The form data is stored in the component's
            state and updated through a change event handler. In contrast, an
            uncontrolled component stores the form data in the DOM. The form data
            is accessed and updated using the DOM API.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4"><span className="border-b-2 border-orange-500">How to validate React props using PropTypes?</span>
            
          </h3>
          <p className="text-gray-700 leading-relaxed">
            PropTypes is a way to validate the props passed to a React component
            and to provide type checking. PropTypes can be used to ensure that
            the props passed to a component are of the correct type and that
            required props are present. To use PropTypes, you first need to
            import it from the prop-types package. Then you can define the prop
            types for a component using the propTypes property on the component
            class or function.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4"><span className="border-b-2 border-orange-500">Tell us the difference between Node.js and Express.js.</span>
            
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Node.js is a server-side JavaScript runtime environment that allows
            you to run JavaScript on the server. Express.js is a web framework
            for Node.js that provides additional features and functionality for
            building web applications. Node.js provides the runtime environment,
            while Express.js provides the web application framework and routing
            capabilities.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4"><span className="border-b-2 border-orange-500">What is a custom hook?</span></h3>
          <p className="text-gray-700 leading-relaxed">
            A custom hook is a function in React that allows you to reuse
            functionality across multiple components. Custom hooks are created
            using the use keyword, followed by the name of the hook. A custom
            hook can use any of the built-in React hooks, such as useState or
            useEffect, and can also use other custom hooks. Custom hooks can be
            used to encapsulate complex logic and provide a simplified API to
            other components.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-4"><span className="border-b-2 border-orange-500">Why will you create a custom hook?</span>
            
          </h3>
          <p className="text-gray-700 leading-relaxed">
            You would create a custom hook to encapsulate complex logic and
            provide a simplified API to other components. Custom hooks allow you
            to reuse functionality across multiple components without repeating
            code    </p>
      <p className="text-gray-700 leading-relaxed">
        Custom hooks can also help make your code more modular and
        maintainable. By encapsulating complex logic in a custom hook, you
        can create a simpler and more focused API for other components to
        use. This can help reduce the cognitive load of working with complex
        functionality and make your code more readable and easier to debug.
        Custom hooks can also be shared across projects and teams, making it
        easier to standardize and reuse code.
      </p>
    </div>
  </div>
</div>
);
};

export default Blog;
