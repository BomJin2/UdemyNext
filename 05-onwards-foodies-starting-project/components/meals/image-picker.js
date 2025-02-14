"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();

  const imageInput = useRef();

  const handlePickClick = () => {
    imageInput.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <>
      <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
          <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet.</p>}
            {pickedImage && <Image src={pickedImage} alt="The image selected by user" fill />}
          </div>

          <input
            className={classes.input}
            type="file"
            accept="image/png, image/jpeg"
            name={name}
            id={name}
            ref={imageInput}
            onChange={handleImageChange}
          />
          <button className={classes.button} type="button" onClick={handlePickClick}>
            Pick an Image
          </button>
        </div>
      </div>
    </>
  );
}
export default ImagePicker;
