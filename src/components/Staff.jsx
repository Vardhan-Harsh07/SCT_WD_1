import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide" id="team">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent">
        Our Team
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral-900 rounded-md p-6 text-xl border border-neutral-800 font-bold font-sans text-neutral-400">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start text-neutral-200">
                <img
                  className="w-12 h-12 mr-4  rounded-full border border-neutral-300 text-neutral-700"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-700 font-sans ">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;