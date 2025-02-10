import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

// @ts-expect-error fuck typescript's mother
const FormUpload = ({state, setState}) => {
    const [file, setFile] = useState();
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        // @ts-expect-error fuck typescript's mother
        setFile(e.target.files[0])
    }

    async function handleUploadSubmit(e) {
        setState(prev => {
            return {...prev, loading: true}
          })
        e.preventDefault();
        if(!file) return;

        setLoading(true)
        const formData = new FormData();
        formData.append('image', file)
        formData.append('state', state)


        try {
            const response = await fetch('http://127.0.0.1:3000/api/auth/register', {
                method: 'POST',
                body: formData
            })

            const data = await response.json();

            if(data.success) router.replace('/auth/login')
        } catch (error) {
            console.log(error);
            
        } finally {
            setState(prev => {
                return {...prev, loading: false}
              })
        }
    }
  return (
    <form className={`space-y-4 ${state.loading ? 'opacity-50' : ''} md:space-y-6`}>
        <input type="file" name='image' onChange={handleFileChange} accept="image/*" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleUploadSubmit}>
                {loading ? "Uploading..." : "Upload"}
            </button>
    </form>
  )
}

export default FormUpload