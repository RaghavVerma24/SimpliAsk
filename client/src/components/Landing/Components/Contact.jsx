import React from 'react'

const Contact = () => {
  return (
    <div className="py-10 justify-center xl:max-w-8xl mx-auto md:items-center flex flex-row md:px-8" id="contact">
      <div className="container mt-20 px-6 mx-auto">
        <section className="text-gray-800">
          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <h2 className="text-[40px] font-bold text-[#fff]">
                  Contact Us
              </h2>
              <h2 className="text-[20px] text-[#c0b2ac] break-word mb-10">
              We value your health and well-being, and our team of experienced healthcare professionals are here to assist you. Whether you have questions about our services, need to schedule an appointment, or have any other inquiries, we're here to help. You can reach us by filling out the contact form.
                    </h2>
                    
            </div>
            <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
              <form action="mailto:racooraghav24@gmail.com" method="post" enctype="text/plain">
                <div className="form-group mb-6">
                  <input type="text" className="form-control block
              w-full
              px-3
              py-3
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="Name" />
                </div>
                <div className="form-group mb-6">
                  <input type="email" className="form-control block
              w-full
              px-3
              py-3
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8" placeholder="Email address" />
                </div>
                <div className="form-group mb-6">
                  <textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            " id="exampleFormControlTextarea13" rows={3} placeholder="Message" defaultValue={""} />
                </div>
                <button type="submit" className="
            px-4 py-2 text-white bg-[#6469ff] rounded-md shadow w-full text-[20px]">Send</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact