import API from '../API'

const UserActions = {
  register: API.register,
  login: API.login,
  getProfile: API.getProfile,
  logout: API.logout,
  updateProfile:API.updateProfile
};

export default UserActions;
