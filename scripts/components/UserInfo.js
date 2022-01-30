class UserInfo {
    constructor({userName, info}) {
        this._userName = userName;
        this._info = info;
    }

    getUserInfo() {
        const user = {
            userName: this._userName.textContent,
            userInformation: this._info.textContent
        }
        return user;
    }

    setUserInfo(Name, status) {
      this._userName.textContent = Name;
      this._info.textContent = status;  
    }
}

export default UserInfo;