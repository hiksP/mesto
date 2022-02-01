class UserInfo {
    constructor({userName, info}) {
        this._userName = userName;
        this._info = info;
    }

    getUserInfo() {
        return {
            userName: this._userName.textContent,
            userInformation: this._info.textContent
        }
    }

    setUserInfo(name, status) {
      this._userName.textContent = name;
      this._info.textContent = status;  
    }
}

export default UserInfo;