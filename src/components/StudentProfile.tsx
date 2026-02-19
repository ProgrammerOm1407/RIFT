import { useState } from 'react'
import { useWallet } from '@txnlab/use-wallet-react'
import { supabase } from '/utils/supabaseClient'

export const StudentProfile = () => {
  const { activeAddress } = useWallet()
  const [name, setName] = useState('')
  const [dept, setDept] = useState('')
  const [loading, setLoading] = useState(false)

  const saveProfile = async () => {
    if (!activeAddress) return
    setLoading(true)

    const { error } = await supabase
      .from('students') // Ensure you created this table in Supabase!
      .upsert({ 
        wallet_address: activeAddress, 
        student_name: name, 
        department: dept 
      })

    setLoading(false)
    if (error) alert(error.message)
    else alert('Profile updated successfully!')
  }

  if (!activeAddress) return null

  return (
    <div className="card w-full max-w-md bg-white shadow-lg p-6 my-4 border-l-4 border-teal-500">
      <h3 className="font-bold text-teal-700 text-lg mb-4">Campus ID Profile</h3>
      <input 
        type="text" 
        placeholder="Your Full Name" 
        className="input input-bordered w-full mb-2" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Department (e.g. CS, IT)" 
        className="input input-bordered w-full mb-4" 
        value={dept}
        onChange={(e) => setDept(e.target.value)}
      />
      <button 
        className={`btn btn-teal w-full text-white ${loading ? 'loading' : ''}`}
        onClick={saveProfile}
      >
        Save Profile
      </button>
    </div>
  )
}