const Profile = ({ user, logout }) => {
   console.log(user.photoURL);
   return (
      <div className="profile">
         <h4>{user.displayName}</h4>
         <img
            src={user.photoURL}
            alt=""
            width={43}
            height={43}
            style={{ borderRadius: "25px" }}
         />
         <button onClick={logout}>Logout</button>
      </div>
   );
};

export default Profile;
