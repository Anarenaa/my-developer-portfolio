const containers = document.querySelectorAll('.links-flex-container');
const imgContainers = document.querySelectorAll('.project__img-container');
let avatarImg = document.querySelector('.introduction__avatar');
//let brandLogoElement = document.querySelector('.brand__logo');

if (window.innerWidth >= 801) {
    avatarImg.src = "./assets/images/image-profile-desktop.png";
    //brandLogoElement.scr = "./assets/images/adamkeyes.svg";


    imgContainers.forEach((imgContainer, index) => {
        const container = containers[index];

        imgContainer.addEventListener('mouseover', function () {
            container.style.display = 'flex';
        });

        imgContainer.addEventListener('mouseout', function () {
            container.style.display = 'none';
        });
    });
} else if (window.innerWidth <= 800 && window.innerWidth >= 657) {
    avatarImg.src = "./assets/images/image-profile-tablet.png";
    //brandLogoElement.scr = "./assets/images/adamkeyes.svg";

    document.querySelector('.introduction').style.height = '600px';
    avatarImg.style.height = '600px';

} else {
    avatarImg.src = "./assets/images/image-profile-mobile.png";
    //brandLogoElement.scr = "./assets/images/adamkeyes_logo-mobile.svg";
}