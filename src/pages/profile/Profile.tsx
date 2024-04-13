import useProfile from "../../hooks/useProfile";
import ChangeProfile from "../../components/profile/ChangeProfile";
import ChangePassword from "../../components/profile/ChangePassword";
import Back from "../../components/button/Back";
import GlobalLayout from "../../layouts/GlobalLayout";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/home");
  };
  const {
    file,
    selectedTab,
    handleMyProfileClick,
    handleChangePasswordClick,
    handleFileChange,
  } = useProfile();

  return (
    <>
      <GlobalLayout>
        <Back onClick={handleBackClick} buttonText="Back" />
        <div className="max-w-auto mx-[200px] relative flex flex-row justify-between items-center">
          <div className="flex flex-col w-full">
            <div className="flex flex-row justify-between items-center mb-4">
              <div className="flex flex-col items-center">
                <label htmlFor="upload-photo" className="cursor-pointer">
                  <img src="/avatar.png" className="w-[150px]" alt="" />
                  <img src={file} className="w-[150px]" alt="" />
                  <p>Upload Photo</p>
                </label>
                <input
                  type="file"
                  id="upload-photo"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              <div className="border-l-2 border-gray-500 w-full pl-4">
                <div className="flex flex-row gap-4 mb-4">
                  <button
                    className={`px-4 py-2 rounded-md border-2 border-gray-300 ${selectedTab === "My Profile" ? "bg-gray-200 font-bold" : ""}`}
                    onClick={handleMyProfileClick}
                  >
                    My Profile
                  </button>
                  <button
                    className={`px-4 py-2 rounded-md border-2 border-gray-300 ${selectedTab === "Change Password" ? "bg-gray-200 font-bold" : ""}`}
                    onClick={handleChangePasswordClick}
                  >
                    Change Password
                  </button>
                </div>
                {selectedTab === "My Profile" && (
                  <>
                    <ChangeProfile />
                  </>
                )}
                {selectedTab === "Change Password" && (
                  <>
                    <ChangePassword />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </GlobalLayout>
    </>
  );
};

export default Profile;
