import React from "react";
const Contact = () => {
    return (
        <div className="w-7/12  mx-auto  my-4 bg-gray-50 shadow-lg p-4 ">
            <h1 className="font-bold text-3xl p-4 m-4 text-center">Contact Us Page</h1>
            <div>
                <form className="flex flex-col">
                    <input
                        type="text"
                        className=" w-7/12 border border-black p-2 mx-auto my-2"
                        placeholder="Enter Your Name">
                    </input>
                    <input
                        type="text"
                        className=" w-7/12 border border-black p-2 mx-auto my-2"
                        placeholder="Enter Your Message">
                    </input>

                    <button
                        className="w-2/12 border border-black p-2 mx-auto my-2 bg-black rounded-lg text-white cursor-pointer">
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
}
export default Contact;