function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
const myMail = 'loataixuong@gmail.com';
const serverMailId = 'service_c6i23jk';
const templateMailId = 'template_r9zf6v9';
const publicKeyMail = 'vc3VpRoVUcwGXo6Wm';

const loading = document.getElementById('loading-overlay');
const contentLoaded = document.getElementById('content');

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', function (event) {
        loading.style.display = 'flex';
        contentLoaded.style.display = 'none';
        event.preventDefault();

        const formData = new FormData(form);
        const userMail = formData.get('email'); // Lấy giá trị từ trường email

        // Gửi email sử dụng Email.js
        emailjs.send(serverMailId, templateMailId, {
            to_email: myMail,
            from_name: formData.get('name'),
            from_email: userMail,
            message: formData.get('message'),
        }, publicKeyMail)
            .then(function (response) {
                console.log('Email sent successfully:', response);
                alert('Gửi mail thành công');
                loading.style.display = 'none';
                contentLoaded.style.display = 'block';
                // Thêm code xử lý sau khi gửi email thành công (ví dụ: hiển thị thông báo)
            }, function (error) {
                console.error('Email sending failed:', error);
                loading.style.display = 'none';
                contentLoaded.style.display = 'block';
                // Thêm code xử lý khi gửi email thất bại (ví dụ: hiển thị thông báo lỗi)
            });

        // Xoá nội dung form (tuỳ chọn)
        form.reset();
    });
});


const latlng = { lat: 10.750688481042705, lng: 106.59648642545265 };
function initMap() {
    const map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 14,
        center: latlng,
    });

    new google.maps.Marker({
        position: latlng,
        map,
        title: "Hello World!",
    });
}

window.initMap = initMap;