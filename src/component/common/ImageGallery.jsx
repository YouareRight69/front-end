// import React, { useState } from "react";
// import { v4 } from "uuid";

// const ImageGallery = ({ sendDataToParent, data }) => {
//   const [imageSrc, setImageSrc] = useState("");
//   const [imagesArray, setImagesArray] = useState([]);
//   const [dataFirabase, setDataFirabase] = useState([]);

//   // useEffect(() => {
//   //   if (data) {
//   //     setDataFirabase(data);
//   //     setImagesArray(data);
//   //     setFirstImage(data);
//   //   }
//   // }, [data]);

//   // const setFirstImage = (data) => {
//   //   if (data.length > 0) {
//   //     const firstImage = data[0];
//   //     setImageSrc(firstImage);
//   //   }
//   // };

//   // const handleThumbnailClickFirebase = (index) => {
//   //   const selectedImage = data[index];
//   //   setImageSrc(selectedImage);
//   // };

//   // const deleteImageFirebase = (index) => {
//   //   const newImagesArray = [...dataFirabase];
//   //   newImagesArray.splice(index, 1);
//   //   setDataFirabase(newImagesArray);

//   //   sendDataToParent(newImagesArray);

//   //   if (dataFirabase.length > 0) {
//   //     const firstImage = newImagesArray[0];
//   //     setImageSrc(firstImage);
//   //   } else {
//   //     setImageSrc("./assets/img/thien/1.jpg");
//   //   }
//   // };

//   // const renderImagesFirebase = () => {
//   //   return data.map((image, index) => (
//   //     <div className="image firebase" key={index}>
//   //       <img
//   //         className="thumbnail"
//   //         style={{ height: "50px", width: "50px", cursor: "pointer" }}
//   //         src={image}
//   //         alt="Thumbnail"
//   //         onClick={() => handleThumbnailClickFirebase(index)}
//   //       />
//   //       <span onClick={() => deleteImageFirebase(index)}>&times;</span>
//   //     </div>
//   //   ));
//   // };

//   // Hàm dùng để chọn ảnh và set max ảnh = 6
//   const handleInputChange = (event) => {
//     const files = event.target.files;
//     const maxImages = 6;
//     const selectedImages = [];
//     let count = 0;

//     for (let i = 0; i < files.length; i++) {
//       if (count >= maxImages) {
//         break;
//       }

//       const newImage = files[i];
//       newImage["id"] = v4();
//       selectedImages.push(newImage);
//       count++;
//     }
//     const newImagesArray = [...selectedImages];
//     setImagesArray(newImagesArray);

//     // Gửi dữ liệu imagesArray lên component cha
//     sendDataToParent(newImagesArray);

//     if (newImagesArray.length > 0) {
//       const firstImage = newImagesArray[0];
//       setImageSrc(URL.createObjectURL(firstImage));
//     }
//   };

//   // Hàm dùng để khi click vào ảnh nhỏ thì ảnh to sẽ thay đổi -ThienBD
//   const handleThumbnailClick = (index) => {
//     const selectedImage = imagesArray[index];
//     setImageSrc(URL.createObjectURL(selectedImage));
//   };

//   // Hàm đúng như tên, dùng để xoá ảnh - ThienBD
//   const deleteImage = (index) => {
//     const newImagesArray = [...imagesArray];
//     newImagesArray.splice(index, 1);
//     setImagesArray(newImagesArray);

//     // Gửi dữ liệu imagesArray lên component cha
//     sendDataToParent(newImagesArray);

//     if (newImagesArray.length > 0) {
//       const firstImage = newImagesArray[0];
//       setImageSrc(URL.createObjectURL(firstImage));
//     } else {
//       setImageSrc("./assets/img/thien/1.jpg");
//     }
//   };

//   // Hàm này cũng đúng như tên, dùng để render ra ảnh - ThienBD
//   const renderImages = () => {
//     return imagesArray.map((image, index) => (
//       <div className="image" key={index}>
//         <img
//           className="thumbnail"
//           style={{ height: "50px", width: "50px", cursor: "pointer" }}
//           src={URL.createObjectURL(image)}
//           alt="Thumbnail"
//           onClick={() => handleThumbnailClick(index)}
//         />
//         <span onClick={() => deleteImage(index)}>&times;</span>
//       </div>
//     ));
//   };

//   console.log(data);

//   return (
//     <div>
//       <div className="box snake thien_snake" style={{ marginBottom: "20px" }}>
//         <label htmlFor="file-input">
//           <div className="gallery-img-thienbd">
//             <img className="thien_avatar" src={imageSrc} alt="avatar" />
//           </div>
//           <div className="overlay"></div>
//           <input
//             style={{ display: "none" }}
//             id="file-input"
//             type="file"
//             name="myfile"
//             multiple
//             accept="image/jpeg, image/png, image/jpg"
//             onChange={handleInputChange}
//           />
//         </label>
//       </div>
//       {/* <output>{dataFirabase ? renderImagesFirebase : renderImages()}</output> */}
//       <output>{renderImages}</output>
//     </div>
//   );
// };

// export default ImageGallery;

import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

const ImageGallery = ({ sendDataToParent, data }) => {
  const [imageSrc, setImageSrc] = useState("./assets/img/thien/1.jpg");
  const [imagesArray, setImagesArray] = useState([]);
  const [dataFirebase, setDataFirebase] = useState([]);

  const setFirstImage = () => {
    if (dataFirebase.length > 0) {
      const firstImage = dataFirebase[0];
      setImageSrc(firstImage);
    }
  };

  useEffect(() => {
    if (data) {
      setDataFirebase(data);
      setFirstImage();
    }
  }, [data]);

  const handleThumbnailClickFirebase = (index) => {
    const selectedImage = dataFirebase[index];
    setImageSrc(selectedImage);
  };

  const deleteImageFirebase = (index) => {
    const newImagesArray = [...dataFirebase];
    newImagesArray.splice(index, 1);
    setImagesArray(newImagesArray);

    // Gửi dữ liệu imagesArray lên component cha
    sendDataToParent(newImagesArray);

    if (newImagesArray.length > 0) {
      const firstImage = newImagesArray[0];
      setImageSrc(firstImage);
    } else {
      setImageSrc("./assets/img/thien/1.jpg");
    }
  };

  const renderImagesFirebase = () => {
    return dataFirebase.map((image, index) => (
      <div className="image" key={index}>
        <img
          className="thumbnail"
          style={{ height: "50px", width: "50px", cursor: "pointer" }}
          src={image}
          alt="Thumbnail"
          onClick={() => handleThumbnailClickFirebase(index)}
        />
        <span onClick={() => deleteImageFirebase(index)}>&times;</span>
      </div>
    ));
  };

  const handleInputChange = (event) => {
    setDataFirebase([]);
    const files = event.target.files;
    const maxImages = 6;
    const selectedImages = [];
    let count = 0;

    for (let i = 0; i < files.length; i++) {
      if (count >= maxImages) {
        break;
      }

      const newImage = files[i];
      newImage["id"] = v4();
      selectedImages.push(newImage);
      count++;
    }
    const newImagesArray = [...imagesArray, ...selectedImages];
    setImagesArray(newImagesArray);
    sendDataToParent(newImagesArray);

    if (newImagesArray.length > 0) {
      const firstImage = newImagesArray[0];
      setImageSrc(URL.createObjectURL(firstImage));
    }
  };

  const handleThumbnailClick = (index) => {
    const selectedImage = imagesArray[index];
    setImageSrc(URL.createObjectURL(selectedImage));
  };

  const deleteImage = (index) => {
    const newImagesArray = [...imagesArray];
    newImagesArray.splice(index, 1);
    setImagesArray(newImagesArray);

    // Gửi dữ liệu imagesArray lên component cha
    sendDataToParent(newImagesArray);

    if (newImagesArray.length > 0) {
      const firstImage = newImagesArray[0];
      setImageSrc(URL.createObjectURL(firstImage));
    } else {
      setImageSrc("./assets/img/thien/1.jpg");
    }
  };

  const renderImages = () => {
    return imagesArray.map((image, index) => (
      <div className="image" key={index}>
        <img
          className="thumbnail"
          style={{ height: "50px", width: "50px", cursor: "pointer" }}
          src={URL.createObjectURL(image)}
          alt="Thumbnail"
          onClick={() => handleThumbnailClick(index)}
        />
        <span onClick={() => deleteImage(index)}>&times;</span>
      </div>
    ));
  };

  console.log("dataFirebase");
  console.log(dataFirebase);

  return (
    <div>
      <div className="box snake thien_snake" style={{ marginBottom: "20px" }}>
        <label htmlFor="file-input">
          <div className="gallery-img-thienbd">
            <img className="thien_avatar" src={imageSrc} alt="avatar" />
          </div>
          <div className="overlay"></div>
          <input
            style={{ display: "none" }}
            id="file-input"
            type="file"
            name="myfile"
            multiple
            accept="image/jpeg, image/png, image/jpg"
            onChange={handleInputChange}
          />
        </label>
      </div>
      <output>{dataFirebase ? renderImagesFirebase() : renderImages()}</output>
    </div>
  );
};

export default ImageGallery;
