import Spinner from "@/components/spinner/spinner";
import styles from "./profilesettings.module.css";
import { useEffect, useRef, useState } from "react";
import { updateProfile } from "firebase/auth";
import { insertData, queryData } from "@/utils/firebase/firestore";
import { uploadBytes } from "firebase/storage";
import Loader from "@/components/loader/loader";

const ProfileSettings = ({ user }) => {
  // Save profile details
  const [isLoading, setLoading] = useState(false);
  const displayName = useRef(); // Profile name input
  const username = useRef(); // Social username input

  const socials = ["instagram", "tiktok", "twitch"];
  const [userSocials, setUserSocials] = useState();
  const [currentSocial, setSocial] = useState(socials[0]);

  const [dropdown, showDropdown] = useState(false);

  const saveProfile = async () => {
    if (isLoading) return; // Prevent double click and overloading
    setLoading(true);

    // Update profile
    await updateProfile(user, {
      displayName: displayName.current.value,
      photoURL: photoURL,
    });

    // Update socials
    await insertData("socials", user.uid, userSocials);
    setLoading(false);
  };

  useEffect(() => {
    if (!username.current && !userSocials) return;
    username.current.value = userSocials[currentSocial] || "";
  }, [currentSocial]);

  // Upload profile picture
  const [isUploading, uploading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    user.photoURL || "/static/images/default.jpg"
  );

  const selectFile = () => {
    document.querySelector("#file").click();
  };

  const uploadFile = async (event) => {
    uploading(true);
    const image = event.target.files[0]; // Image File
    const render = new FileReader();

    // Render
    render.onload = (evt) => {
      const imageUrl = evt.target.result;
      setPhotoURL(imageUrl);
    };

    render.readAsDataURL(image);

    // Upload File
    const storageRef = ref(
      storage,
      `/images/profile/${user.uid}/${new Date().valueOf()}.${
        image.type === "image/png" ? "png" : "jpg"
      }`
    );

    const final_url = await uploadBytes(storageRef, image)
      .then((snapshot) => getDownloadURL(snapshot.ref))
      .then((downloadUrl) => downloadUrl.split("&token=")[0])
      .catch((error) => undefined);

    setPhotoURL(final_url);

    if (final_url)
      updateProfile(user, { photoURL: final_url }) && uploading(false);
  };

  // Get user's socials
  const getSocials = async (user) => {
    const socials = await queryData("socials", user.uid);
    setUserSocials(socials);
  };

  getSocials(user);

  if (!userSocials) return <Loader />;
  return (
    <div className={styles.container}>
      <div className={styles.profilePicture}>
        <input
          id="file"
          type="file"
          accept="image/jpeg, image/png"
          onChange={uploadFile}
          hidden
        />
        {!isUploading ? (
          <button onClick={selectFile} className={styles.uploadFile}>
            <span className={styles.uploadIcon}>
              <object
                type="image/svg+xml"
                data="/static/icons/edit.svg"
              ></object>
            </span>
            Change profile picture
          </button>
        ) : (
          <div className={styles.uploadFile}>
            <div className={styles.loading}>
              <Spinner />
            </div>
          </div>
        )}

        <img className={styles.profileImage} src={photoURL} />
      </div>
      <div className={styles.profileDetails}>
        <input
          type="text"
          placeholder="Name"
          ref={displayName}
          defaultValue={user.displayName}
        ></input>
        <div className={styles.socialsContainer}>
          <div className={styles.selectSocials}>
            <div
              className={`${styles.dropdown} ${dropdown ? styles.active : ""}`}
              onClick={() => showDropdown(!dropdown)}
            >
              <object
                type="image/svg+xml"
                data={`/static/icons/socials/${currentSocial}.svg`}
                className={styles.socialIcon}
              ></object>
            </div>

            <div
              className={styles.dropdownList}
              style={{ display: dropdown ? "flex" : "none" }}
            >
              <ul>
                {socials.map((social, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      setSocial(social);
                      showDropdown(!dropdown);
                      username.defaultValue = socials[currentSocial];
                    }}
                  >
                    <object
                      type="image/svg+xml"
                      data={`/static/icons/socials/${social}.svg`}
                      className={styles.socialIcon}
                    ></object>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <input
            type="text"
            placeholder="@username"
            ref={username}
            defaultValue={userSocials[currentSocial] || ""}
            onChange={(e) => (userSocials[currentSocial] = e.target.value)}
          ></input>
        </div>
        <button onClick={saveProfile}>
          {!isLoading ? (
            "Update profile"
          ) : (
            <div className={styles.loading}>
              <Spinner />
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfileSettings;
