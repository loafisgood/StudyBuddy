"use client"

import React, { useState } from 'react';
import FileUpload from '../components/FileUpload';
import { useRouter } from 'next/navigation';

const Upload = () => {
    const [text, setText] = useState('');
    const router = useRouter();

    

    // const handleFileUpload = async (file: File) => {
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     const response = await fetch('http://localhost:8080/upload', {
    //         method: 'POST',
    //         body: formData,
    //     });
    //     const data = await response.json();
    //     setText(data.text);
    // }

    const handleFileUpload = async () => {
      // Handle file upload logic
      // Extracted text received from the server
      setText('Extracted text from PDF...');
  
      // Navigate to another page after file upload
    };

  return (
    <div className="flex min-h-screen flex-col justify-center p-24 text-black bg-gray-100">
      <h1>Upload a file: PDF Text Extraction</h1>
      <FileUpload onFileUpload={handleFileUpload} />
    <div>
        <h2>Extracted Text:</h2>
        <br></br>
        <pre>{text}</pre>
      </div>
    </div>
  );
};

export default Upload;
