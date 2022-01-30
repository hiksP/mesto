class UserInfo {
    constructor({userName, info}) {
        this._userName = documnet.querySelector(userName);
        this._info = documnet.querySelector(info);
    }

    getUserInfo() {
        const user = {
            userName: this._userName.textContent,
            userInformation: this._info.textContent
        }
        return user;
    }

    setUserInfo(Name, status) {
      this._userName = Name;
      this._info = status;  
    }
}

export default UserInfo;