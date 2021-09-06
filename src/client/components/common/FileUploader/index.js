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
    const fileUploaded = event.target.files[0];
    onFileUpload(fileUploaded,event.target.value,event);
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
export default FileUploader