import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const BlogSection = () => {
  const sectionRef = useRef(null);

  const handleDownload = () => {
    const section = sectionRef.current;
    html2canvas(section).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save(`simple.pdf`);
    });
  };

  return (
    <div className="bg-gray-100" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center pt-16 pb-8">
          <h1 className="text-3xl font-bold text-gray-800">Simple</h1>
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="mb-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleDownload}
            >
              Download as PDF
            </button>
          </div>
          <div className="p-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi autem, voluptatum quam eum tenetur magnam impedit fugit quibusdam consequatur ab repellat explicabo iste harum dolor molestias. Asperiores provident dolorem veritatis ipsam laboriosam ullam eligendi eos, debitis delectus placeat fugit distinctio animi blanditiis ipsa recusandae maxime doloribus quibusdam! Nulla fugiat velit hic nam! Sed, dolores ab consequuntur voluptatum numquam vero accusamus iure? Vel, ea eaque! Quaerat veniam optio dolor doloremque odit quibusdam iste fugit cum pariatur? Quia amet odio cumque accusamus, iure inventore et consequatur, consequuntur rerum error ratione neque. Voluptates modi corrupti non quae sapiente in, exercitationem quis aspernatur? Eum quo illum voluptates libero, ipsa quisquam adipisci nesciunt praesentium voluptatem tempora aliquam blanditiis neque nulla eligendi nihil aut ipsam fugit consectetur! Architecto maiores nam neque nesciunt itaque eveniet, ducimus incidunt ea cum molestias, debitis nostrum, error beatae? Doloribus explicabo aut repudiandae ratione eum ipsum consequuntur animi accusantium, placeat excepturi deserunt tempore illo amet odit aliquid reprehenderit neque rerum harum sed facilis. Dolor ad maxime harum magni eum magnam aperiam ducimus, laudantium sequi temporibus nostrum vitae distinctio, similique ea a quis, aliquid iure facere. Facere quae nostrum nisi, id, eum recusandae illo, ea nam quaerat voluptatibus nemo sint neque laboriosam adipisci.</div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
