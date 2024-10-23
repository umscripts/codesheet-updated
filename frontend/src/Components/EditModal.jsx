import React, { useState } from 'react'

const EditModal = ({ onClose, snippet }) => {
    const [snippetHeading, setSnippetHeading] = useState(snippet.heading)
    const [snippetCode, setSnippetCode] = useState(snippet.code)
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 w-full h-screen z-10 flex justify-center items-center'>
            <div className="bg-white opacity-100 rounded-lg w-[40%] p-5 z-50">
                <h2 className="text-xl mb-4 font-semibold">Edit Snippet</h2>
                <form>
                    <div className="mb-4">
                        <label className="block mb-1">Title</label>
                        <input
                            type="text"
                            value={snippetHeading}
                            onChange={(e) => setSnippetHeading(e.target.value)}
                            className="border rounded w-full p-2 outline-none"
                        />
                    </div>
                    <div className="">
                        <label className="block mb-1">Code</label>
                        <textarea
                            value={snippetCode}
                            onChange={(e) => setSnippetCode(e.target.value)}
                            className="border bg-[#2d2d2d] text-white rounded w-full p-2 resize-none outline-none h-80"
                        />
                    </div>
                    <div className="flex justify-end font-semibold">
                        <button type="button" onClick={onClose} className="mr-2 bg-white border border-black p-2 w-3/12 rounded hover:bg-black hover:text-white">Cancel</button>
                        <button type="submit" className="bg-black border text-white p-2 w-3/12 rounded hover:bg-white hover:text-black hover:border-black hover:border">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditModal