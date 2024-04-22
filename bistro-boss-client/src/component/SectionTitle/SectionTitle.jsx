

const SectionTitle = ({heading, subHeading}) => {
       return (
         <div className="w-3/12 mx-auto text-center mb-2">
           <h1 className="text-yellow-600">{subHeading}</h1>
           <p className="border-y-4 text-3xl py-4">{heading}</p>
         </div>
       );
};

export default SectionTitle;