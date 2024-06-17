import React from 'react'
import { Link } from "react-router-dom";

function Contact() {
  return (
        <>
        <div className="flex h-screen items-center justify-center ">
        <div id="my_modal_4" className="w-[600px]">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕ </Link>
                        </form>
                        <h3 className="font-bold text-lg">Contact</h3>
                        {/*Name*/}
                        <div className="mt-4 space-y-2">
                            <span>
                                Name
                            </span>
                            <br />
                          <input type="name" placeholder="enter your name" className="w-80 px-3 py-1 border rounded-md outline-none" />

                        </div>
                        {/*Email*/}
                        <div className="mt-4 space-y-2">
                            <span>
                                Email
                            </span>
                            <br />
                            <input type="email" placeholder="enter your email" className="w-80 px-3 py-1 border rounded-md outline-none" />
                            
                        </div>
                        {/*Message*/}
                        <div className="mt-4 space-y-2">
                            <span>
                                Message
                            </span>
                            <br />
                            <textarea type="message" placeholder="Type your message" rows="3" className="w-80 px-3 border rounded-md outline-none" />
                            
                        </div>
                        {/*Button*/}
                        <div className="flex justify-around mt-4">
                            <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200 ">Submit</button>
                        </div>
                </div>
            </div>
        </div>
        </>
  )
}

export default Contact;