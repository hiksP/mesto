(()=>{"use strict";var e={816:(e,t,n)=>{e.exports=n.p+"823b0cf1b0b7e9cb7cad.svg"},286:(e,t,n)=>{e.exports=n.p+"2c13f3c82220502c8c92.jpg"},839:(e,t,n)=>{e.exports=n.p+"03b78ada3425e9132ff3.svg"},173:(e,t,n)=>{e.exports=n.p+"0bc60938ca96a5dcae18.svg"},747:(e,t,n)=>{e.exports=n.p+"fe17a515669479b1e649.svg"},665:(e,t,n)=>{e.exports=n.p+"2ceb783afbab75916ddc.svg"},146:(e,t,n)=>{e.exports=n.p+"d86bb2edc2f6eadb96b7.svg"},825:(e,t,n)=>{e.exports=n.p+"717ae23a264d020be959.jpg"},306:(e,t,n)=>{e.exports=n.p+"a1892ea72cb87c8fc3aa.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.p="",(()=>{n(816),n(286),n(839),n(173),n(747),n(665),n(146),n(825),n(306);var e=document.querySelector(".profile__edit-button"),t=document.querySelector(".profile__add-button"),r=document.querySelector(".popup__form_edit"),o=document.querySelector(".popup__form_add"),i=document.querySelector('[name="user-name"]'),c=document.querySelector('[name="user-status"]'),a=document.querySelector(".profile__name"),u=document.querySelector(".profile__avatar"),s=document.querySelector(".profile__status"),l=document.querySelector('[name="place-name"]'),f=document.querySelector('[name="place-link"]'),p=(document.querySelector(".elements__list"),r.querySelector(".popup__submit")),h=document.querySelector(".profile__avatar-hover"),_=document.querySelector(".popup__form_change"),d=document.querySelector('[name="avatar-link"]'),y={formSelector:".popup__form",inputSelector:".popup__data-box",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__data-box_error",errorClass:"popup__input-error_visible"};function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._selector=document.querySelector(t),this._overlay=this._selector.querySelector(".popup__overlay"),this._closeButton=this._selector.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){var e=this;this._selector.classList.add("popup_opened"),document.addEventListener("keydown",(function(t){return e._handleEscClose(t)}))}},{key:"close",value:function(){var e=this;this._selector.classList.remove("popup_opened"),document.removeEventListener("keydown",(function(t){return e._handleEscClose(t)}))}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._overlay.addEventListener("click",(function(){e.close()})),this._closeButton.addEventListener("click",(function(){e.close()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function E(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}const O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._submitButton=t._selector.querySelector(".popup__submit"),t}return t=c,(n=[{key:"setEventListeners",value:function(){g(j(c.prototype),"setEventListeners",this).call(this)}},{key:"setSubmitAction",value:function(e){this._submitButton.addEventListener("click",(function(){e()}))}},{key:"close",value:function(){g(j(c.prototype),"close",this).call(this)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(b);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function I(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}const T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function c(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,e)}return t=c,(n=[{key:"open",value:function(e,t){L(R(c.prototype),"open",this).call(this),this._imageLink=this._selector.querySelector(".popup__place-picture"),this._placeName=this._selector.querySelector(".popup__place-name"),this._imageLink.alt=e,this._imageLink.src=t,this._placeName.textContent=e}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(b);function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const D=function(){function e(t){var n=t.userName,r=t.info,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=n,this._info=r,this._avatar=o}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,userInformation:this._info.textContent}}},{key:"setUserInfo",value:function(e,t,n,r){this._userName.textContent=e,this._info.textContent=t,this._avatar.src=n,this._id=r}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const N=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function z(e,t,n){return t&&A(e.prototype,t),n&&A(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const J=z((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),U(this,"_showError",(function(e,t){var n=r._formSelector.querySelector("#".concat(e.name,"-error"));n.textContent=t,n.classList.add(r._errorClass),e.classList.add(r._inputErrorClass)})),U(this,"_hideError",(function(e){var t=r._formSelector.querySelector("#".concat(e.name,"-error"));t.textContent=" ",t.classList.remove(r._errorClass),e.classList.remove(r._inputErrorClass)})),U(this,"_hasInvalidInput",(function(){return r._inputs.some((function(e){return!e.validity.valid}))})),U(this,"_toggleButtonError",(function(){r._hasInvalidInput()?(r._button.classList.add(r._inactiveButtonClass),r._button.disabled=!0):(r._button.classList.remove(r._inactiveButtonClass),r._button.disabled=!1)})),U(this,"_checkIfInputValid",(function(e){e.validity.valid?r._hideError(e):r._showError(e,e.validationMessage)})),U(this,"_setInputListeners",(function(){r._toggleButtonError(),r._inputs.forEach((function(e){e.addEventListener("input",(function(){r._checkIfInputValid(e),r._toggleButtonError()}))}))})),U(this,"enableValidtaion",(function(){r._formSelector.addEventListener("submit",(function(e){e.preventDefault()})),r._setInputListeners()})),U(this,"clearValidation",(function(){r._formSelector.reset(),r._toggleButtonError(),r._inputs.forEach((function(e){r._hideError(e)}))})),this._formSelector=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._inputs=Array.from(this._formSelector.querySelectorAll(this._inputSelector)),this._button=this._formSelector.querySelector(this._submitButtonSelector)}));function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const F=function(){function e(t,n,r,o,i,c,a,u,s,l){var f=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),M(this,"handleDeleteCard",(function(){f._element.remove(),f._element=null})),M(this,"_handlePressLike",(function(){f._cardLike(f._element),f._element.querySelector(".elements__like-button").classList.toggle("elements__like-button_active")})),M(this,"_addEventListeners",(function(){f._element.querySelector(".elements__image").addEventListener("click",(function(){f._handleCardClick()})),f._element.querySelector(".elements__delete-button").addEventListener("click",(function(){f._handleDeleteCardPopup(f)})),f._element.querySelector(".elements__like-button").addEventListener("click",f._handlePressLike)})),M(this,"_hideTrash",(function(){f._ownerId!=f._userId&&f._element.querySelector(".elements__delete-button").classList.add("elements__delete-button_inactive")})),M(this,"_likeChek",(function(){f._likes.forEach((function(e){e._id===f._userId&&f._element.querySelector(".elements__like-button").classList.add("elements__like-button_active")}))})),this._selector=t,this._title=n,this._image=r,this._alt=o,this._likes=i,this._ownerId=c,this._userId=a,this._handleCardClick=u,this._handleDeleteCardPopup=s,this._cardLike=l}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._selector).content.querySelector(".elements__box").cloneNode(!0)}},{key:"getView",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".elements__title").textContent=this._title,this._element.querySelector(".elements__image").src=this._image,this._element.querySelector(".elements__image").alt=this._alt,this._element.querySelector(".elements__likes-count").textContent=this._likes.length,this._hideTrash(),this._likeChek(),this._addEventListeners(),this._element}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(){return Q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=W(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},Q.apply(this,arguments)}function W(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Z(e)););return e}function X(e,t){return X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},X(e,t)}function Y(e,t){if(t&&("object"===G(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function Z(e){return Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Z(e)}const $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&X(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=Z(r);if(o){var n=Z(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return Y(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._handleSubmit=t,n._form=n._selector.querySelector(".popup__form"),n._inputs=n._form.querySelectorAll(".popup__data-box"),n}return t=c,(n=[{key:"_getInputValues",value:function(){var e=this;return this._values={},this._inputs.forEach((function(t){e._values[t.name]=t.value})),this._values}},{key:"setEventListeners",value:function(){var e=this;Q(Z(c.prototype),"setEventListeners",this).call(this),this._selector.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){Q(Z(c.prototype),"close",this).call(this),this._form.reset()}}])&&K(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(b);function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function te(e,t){var n=e.name,r=e.link,o=e.likes,i=e._id,c=e.owner;return new F(".template",n,r,n,o,c._id,t,(function(){ie.open(n,r)}),(function(e){pe.open(),pe.setSubmitAction((function(){ne.deleteCard(i).then((function(t){e.handleDeleteCard()})).catch((function(e){console.log(e)})),pe.close()}))}),(function(e){var t=e.querySelector(".elements__likes-count");e.querySelector(".elements__like").querySelector(".elements__like-button").classList.contains("elements__like-button_active")?ne.deleteLike(i).then((function(e){t.textContent=e.likes.length})).catch((function(e){console.log(e)})):ne.addLike(i).then((function(e){t.textContent=e.likes.length})).catch((function(e){console.log(e)}))})).getView()}var ne=new(function(){function e(t){var n=t.adress,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._adress=n,this._token=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this._adress,"/users/me"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"getCards",value:function(){return fetch("".concat(this._adress,"/cards"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"editInfo",value:function(e,t){return fetch("".concat(this._adress,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"uploadCard",value:function(e,t){return fetch("".concat(this._adress,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._adress,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"addLike",value:function(e){return fetch("".concat(this._adress,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"deleteLike",value:function(e){return fetch("".concat(this._adress,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._adress,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}}])&&ee(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({adress:"https://mesto.nomoreparties.co/v1/cohort-35",token:"d4eb43b8-f03a-4178-a37e-1c688ba22106"}),re=new N({renderer:function(e){var t=te(e,oe._id);re.addItem(t)}},".elements__list");ne.getCards().then((function(e){re.renderItems(e)})).catch((function(e){console.log(e)}));var oe=new D({userName:a,info:s,avatar:u});ne.getUserInfo().then((function(e){oe.setUserInfo(e.name,e.about,e.avatar,e._id)})).catch((function(e){console.log(e)}));var ie=new T(".popup_image");ie.setEventListeners();var ce=new J(y,o),ae=new J(y,r),ue=new J(y,_);ce.enableValidtaion(),ae.enableValidtaion(),ue.enableValidtaion();var se=new $(".popup_edit",(function(){var e=i.value,t=c.value;ne.editInfo(e,t).then((function(e){oe.setUserInfo(e.name,e.about,u.src)})).catch((function(e){console.log(e)})),se.close()}));se.setEventListeners();var le=new $(".popup_add",(function(){return e=l,t=f,ne.uploadCard(e.value,t.value).then((function(e){re.addItem(te(e,oe._id))})).catch((function(e){console.log(e)})),void le.close();var e,t}));le.setEventListeners();var fe=new $(".popup_change-photo",(function(){var e=d.value;ne.changeAvatar(e).then((function(t){oe.setUserInfo(t.name,t.about,e)})).catch((function(e){console.log(e)})),fe.close()}));fe.setEventListeners();var pe=new O(".popup_confirm");pe.setEventListeners(),e.addEventListener("click",(function(){ae.clearValidation(),i.value=a.textContent,c.value=s.textContent,p.disabled=!1,p.classList.remove("popup__submit_inactive"),se.open()})),t.addEventListener("click",(function(){ce.clearValidation(),le.open()})),h.addEventListener("click",(function(){ue.clearValidation(),fe.open()}))})()})();