import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useRouter } from 'next/navigation';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const router = useRouter();
  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file && file.type === 'application/pdf') {
      onFileUpload(file);
      console.log("Uploaded file: ", file)
      router.push('/main');
    } else {
      alert('Please upload a valid PDF file.');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} accept=".pdf" />
      <button className="upload-button" onClick={() => router.push('/main')}>
        Drag & drop a PDF file here, or click to select one
      </button>
    </div>
  );
};

export default FileUpload;
