import React, { useState } from 'react';
import styles from './../styles/StoreLocator.module.css';
import storeData from './../json/store-locator.json';
import { IoSearch } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";

const StoreLocator = ({ isOpen, onClose }) => {
  const [selectedStore, setSelectedStore] = useState(null);

  const handleStoreClick = (store) => {
    setSelectedStore(store);
  };

  const closePopup = () => {
    setSelectedStore(null);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_container}>
        <button className={styles.close_modal_button} onClick={onClose}><IoIosCloseCircle /></button>
        <div className={styles.store_locator_main_container}>
          <div className={styles.store_locator_searchbox_container}>
            <h1>Find a Store Near You</h1>
          </div>
          <div className={styles.store_locator_hold_container}>
            <div className={styles.store_locator_container}>
              <img
                src="https://res.cloudinary.com/dvmuf6jfj/image/upload/v1720781680/Starbucks/image_2024-07-12_161907804_uhetrt.png"
                alt="Map"
                className={styles.map_image}
              />
              {storeData.map((store) => (
                <div
                  key={store.id}
                  onClick={() => handleStoreClick(store)}
                  className={styles.store_locator_point}
                  style={{
                    top: store.position.top,
                    left: store.position.left
                  }}
                >
                  <img src="https://res.cloudinary.com/dvmuf6jfj/image/upload/v1720730269/Starbucks/22_1_rmamrs.png" alt="point" />
                </div>
              ))}
              {selectedStore && (
                <div
                  className={styles.store_locator_popup}
                  style={{
                    top: `calc(${selectedStore.position.top} + 20px)`,
                    left: `calc(${selectedStore.position.left} + 20px)`
                  }}
                >
                  <span className={styles.store_locator_popup_heading}>
                    <button onClick={closePopup} className={styles.close_button}><IoIosCloseCircle /></button>
                    <h3>{selectedStore.name}</h3>
                    <p>{selectedStore.address}</p>
                  </span>
                  <span className={styles.popup_image_container}>
                    <img src={selectedStore.imageUrl} alt={selectedStore.name} />
                  </span>
                </div>
              )}
            </div>
            <div className={styles.store_locator_details_container}>
              <input type="text" placeholder='Street' name="" id="" />
              <input type="text" placeholder='City' name="" id="" />
              <input type="text" placeholder='Pincode' name="" id="" />
              <button><IoSearch />Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
