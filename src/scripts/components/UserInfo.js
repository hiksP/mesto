class UserInfo {
    constructor({userName, info, avatar}) {
        this._userName = userName;
        this._info = info;
        this._avatar = avatar;
    }

    getUserInfo() {
        return {
            userName: this._userName.textContent,
            userInformation: this._info.textContent
        }
    }

    setUserInfo(name, status, avatar, id) {
      this._userName.textContent = name;
      this._info.textContent = status;
      this._avatar.src = avatar;
      this._id = id;
    }
}

export default UserInfo;