'use client'
import { updateEntry } from '@/app/utils/api'
import { useCallback, useState } from 'react'
import { useAutosave } from 'react-autosave'

const Editor = ({ data }) => {
  const [value, setValue] = useState(data.content)
  const [loading, setLoading] = useState(false)

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setLoading(true)
      const updated = await updateEntry(data.id, value)
      setLoading(false)
    },
  })

  return (
    <div className="w-full h-[80%]">
      <p>{loading && 'loading...'}</p>
      <textarea
        className="w-full text-xl h-full bg-neutral py-4"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default Editor