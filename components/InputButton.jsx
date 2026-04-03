'use client'

import { Plus } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'

const InputButton = () => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:8080/api/addresses', data)
      setOpen(false)
    } catch (error) {
      console.error('Error creating address:', error)
    }
  }

  const InputBox = () => {
    return (
      <div className="flex flex-col bg-gray-100 p-4 rounded-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSubmit({ name, description })
          }}
        >
          <label>name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <input type="submit" />
        </form>
      </div>
      
    )

  }


  return (
    <div className="flex bg-red-100 justify-end px-4 py-4 rounded-b-lg">
      <button
        className="flex items-center text-white transition ease-in-out delay-50 bg-gray-900 hover:scale-105 hover:bg-gray-800 duration-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={() => {
          setOpen((prev) => !prev)
          

        }}
      >
        <Plus className="pr-2" /> Add address
      </button>
    </div>
  )
}

export default InputButton
