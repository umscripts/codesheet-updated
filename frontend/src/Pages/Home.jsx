import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import AddIcon from '../assets/Icons/add.png'
import PinIcon from '../assets/Icons/pin.png'
import DeleteIcon from '../assets/Icons/delete.png'
import EditIcon from '../assets/Icons/edit.png'
import SearchIcon from '../assets/Icons/search.png'
import EditModal from '../Components/EditModal';
import DeleteModal from '../Components/DeleteModal';
import AddModal from '../Components/AddModal';

const Home = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [addModal, setAddModal] = useState(false)
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [selectedSnippet, setSelectedSnippet] = useState('')
  const snippet = [{
    heading: "first snippet",
    code: ` const newSum = (a, b) => a + b;
  console.log(sum(10, 20));
  const newSum = (a, b) => a + b;
  console.log(sum(10, 20));
  const newSum = (a, b) => a + b;
  console.log(sum(10, 20));
  const newSum = (a, b) => a + b;
  console.log(sum(10, 20));
  const newSum = (a, b) => a + b;
  console.log(sum(10, 20));
  const newSum = (a, b) => a + b;
  console.log(sum(10, 20));
  const newSum = (a, b) => a + b;
  console.log(sum(10, 20));
  const newSum = (a, b) => a + b;
  console.log(sum(10, 20));
  const newSum = (a, b) => a + b;
  console.log(sum(10, 20));
  const newSum = (a, b) => a + b;
  console.log(sum(10, 20));
  const newSum = (a, b) => a + b;
  console.log(sum(10, 20));
  const newSum = (a, b) => a + b;
  console.log(sum(10, 20));
  const newSum = (a, b) => a + b;
  console.log(sum(10, 20));
  `},
  {
    heading: "second snippet",
    code: `
  const newMul = (a, b) => a * b;
  console.log(Mul(10, 20));
  `,
  },
  {
    heading: "second snippet",
    code: `
  const newMul = (a, b) => a * b;
  console.log(Mul(10, 20));
  `,
  }
  ];

  useEffect(() => {
    Prism.highlightAll();
  }, [snippet]);

  const handleCopy = (snippet, index) => {
    setCopiedIndex(index);
    navigator.clipboard.writeText(snippet.code.trim())
    setTimeout(() => {
      setCopiedIndex(null);
    }, 1000);
  }

  const handleEdit = (snippet) => {
    setEditModal(true)
    setSelectedSnippet(snippet)
  }

  const handleDelete = (snippet) => {
    setDeleteModal(true)
    setSelectedSnippet(snippet)
  }

  return (
    <div className='px-10'>
      {editModal && <AddModal onClose={() => setAddModal(false)} />}
      {editModal && <EditModal onClose={() => setEditModal(false)} snippet={selectedSnippet} />}
      {deleteModal && <DeleteModal onClose={() => setDeleteModal(false)} snippet={selectedSnippet} />}
      <div className='border-b border-black'>
        <div className='flex w-1/2 gap-1 mx-auto my-10 relative'>
          <input type="text" className='p-2 w-full border rounded-lg outline-none border-black' placeholder='Search Here' />
          <img src={SearchIcon} alt="search" className='w-10 absolute right-12 p-2 cursor-pointer' />
          <button className='border border-black p-[6px] rounded-lg bg-white'><img src={AddIcon} alt="add" className='w-7' /></button>
        </div>
      </div>
      <div className='mt-5 min-h-[50vh]'>
        {
          snippet.map((snippet, index) => (
            <div key={index} className='border border-black w-2/3 mx-auto rounded-lg p-1 my-5 bg-white space-y-1'>
              <div className='flex items-center justify-between'>
                <p className='font-semibold'>{index + 1}. {snippet.heading}</p>
                <div className='flex gap-1 items-center'>
                  <img src={PinIcon} alt="pin" className='w-5 rounded-md h-5 cursor-pointer' />
                  <img src={EditIcon} alt="edit" className='w-6 rounded-md h-6 cursor-pointer' onClick={() => handleEdit(snippet)} />
                  <img src={DeleteIcon} alt="delete" className='w-[26px] rounded-md h-[26px] cursor-pointer' onClick={() => handleDelete(snippet)} />
                </div>
              </div>
              <div className='relative'>
                <pre className='resize-none rounded-lg outline-none border border-black p-1 min-h-10 max-h-96 bg-black text-white'>
                  <button
                    className="absolute top-2 right-3 px-3 py-1 text-sm bg-gray-600 hover:bg-gray-500 text-white rounded-lg"
                    onClick={() => handleCopy(snippet, index)}>
                    {copiedIndex === index ? "Copied" : "Copy"}
                  </button>
                  <code className="language-javascript">{snippet.code}</code>
                </pre>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home