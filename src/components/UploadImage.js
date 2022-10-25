// import { PlusOutlined } from '@ant-design/icons';
// import {  Upload, toast, Image,Button } from 'antd';
// import React, { useState } from 'react';
// import { getBase64 } from '../util/index';
// import Text from '../components/Text';


// const UploadImage = () => {
//   const [file, setFile] = useState();
//   const [image, setImage] = useState();
//   const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];
//   const handleChooseFile = ({ file }) => {
//     if (ALLOWED_TYPES.includes(file.type)) {
//       setFile(file);
//       getBase64(file, setImage);
//     } else {
//       toast.error('File Type is not allowed');
//     }
//   };


//   return (

//               <Upload.Dragger
//                 accept={ALLOWED_TYPES.join(', ')}
//                 showUploadList={false}
//                 customRequest={handleChooseFile}
//                 className='mb-24'
//                 height={160}
//               >
//                 {image ? (
//                   <Image src={image} height={120} preview={false} />
//                 ) : (
//                   <div className='flex-row justify-content-center'>
//                     <Text size='body-m'>
//                       PNG, JPG, WEBP or GIF. Max 10mb.
//                     </Text>
//                     <Button icon={<AiOutlineCloudUpload style={{ marginRight: '10px' }} />}>
//                       Choose File
//                     </Button>
//                   </div>
//                 )}
//               </Upload.Dragger>
//   )  
// };

// export default UploadImage;