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

    setUserInfo(name, status, avatar) {
      this._userName.textContent = name;
      this._info.textContent = status;
      this._avatar.src = avatar;
    }
}

export default UserInfo;