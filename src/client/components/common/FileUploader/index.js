import React from 'react';
import Button from '@material-ui/core/Button';

//Sample Usage
//<FileUploader onFileUpload={callBackToStoreFileData} buttonName="FileUpload"
//style={classes.Style} acceptedFormat=".jpg,.png"/>
const FileUploader = ({onFileUpload,buttonName,style,acceptedFormat=".jpg,.png,.pdf,.docx,.doc,.jpeg"}) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = ()  => {
    hiddenFileInput.current.click();
  };

  const handleChange = event => {
    const selectedFile = event.target.files[0];
    const fileSize = selectedFile.size/1024/1024;
    const formats = acceptedFormat.split(",")
      let  errorMessage = ""
    if(!formats.includes(getExtension(selectedFile.name))){
        console.log("File format not supported")
        errorMessage = "File format not supported.Please upload a valid file"
    }
    if(fileSize > 10){
        console.log("File size greater than 10 MB");
        errorMessage = "Please Upload file less than 10mb"
    }
    onFileUpload(selectedFile,event.target.value,event,errorMessage);
  };
  return (
    <>
      <Button onClick={handleClick}  className={style}  >
        {buttonName}
      </Button>
      <input
        id="file"
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
        accept={acceptedFormat}
      />
    </>
  );
}

function getExtension(file){
    return file.substring(file.lastIndexOf('.')+1, file.length) || file
}
export default FileUploader