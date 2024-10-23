import React from 'react'

const DeleteModal = ({ onClose, snippet }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-5 rounded shadow-lg">
                <h2 className="text-lg font-semibold">Confirm Deletion</h2>
                <p>Are you sure you want to delete {snippet.heading} permanently?</p>
                <div className="flex justify-end mt-4">
                    <button
                        className="px-4 py-2 mr-2 bg-white text-black border-black border rounded hover:bg-black hover:text-white"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-black border border-black text-white rounded hover:bg-white hover:text-black"
                        onClick={onClose}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal