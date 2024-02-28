import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react';
import {getStorage, uploadBytesResumable, ref, getDownloadURL} from "firebase/storage"
import {app} from '../firebase.js'

const Profile = () => {
  const fileRef = useRef(null);
  const {currentUser} = useSelector(state => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  console.log(file);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);


  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input onChange={(e) => setFile(e.target.files[0])} type="file" hidden ref={fileRef}/>
        <img onClick={() => fileRef.current.click()} src={formData.avatar || currentUser.avatar} alt="profile" className='mt-2 rounded-full h-24 w-24 object-cover cursor-pointer self-center'/>
        <p className='text-sm self-center'>
          {fileUploadError ? (
            <span className='text-red-700'>
              Error Image upload (image must be less than 2 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className='text-slate-700'>{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className='text-green-700'>Image successfully uploaded!</span>
          ) : (
            ''
          )}
        </p>
        <input type="text" className='rounded-lg border p-3' placeholder='username' id='username' required/>
        <input type="text" className='rounded-lg border p-3' placeholder='email' id='email' required/>
        <input type="text" className='rounded-lg border p-3' placeholder='password' id='password' required/>
        <button className='bg-slate-700 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80 p-3'>update</button>
      </form>

      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer hover:text-red-900'>Delete Account</span>
        <span className='text-red-700 cursor-pointer hover:text-red-900'>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile
