

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
const loading = document.getElementById('loading-overlay');
const contentLoaded = document.getElementById('content');
var coll = document.getElementsByClassName("collapsible");
var coll2 = document.getElementsByClassName("collapsible2");
var coll3 = document.getElementsByClassName("collapsible3");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "none") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const collapsibleBtn = document.getElementById('collapsibleBtn');
    const icon = document.getElementById('icon');

    collapsibleBtn.addEventListener('click', function () {
        // Toggle the 'fa-caret-down' and 'fa-caret-up' classes on the icon
        icon.classList.toggle('fa-caret-down');
        icon.classList.toggle('fa-caret-up');

        // Add your logic to toggle the content or perform other actions
        // For now, let's just log a message
        console.log('Button clicked!');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const collapsibleBtn = document.getElementById('collapsibleBtn2');
    const icon = document.getElementById('icon2');

    collapsibleBtn.addEventListener('click', function () {
        // Toggle the 'fa-caret-down' and 'fa-caret-up' classes on the icon
        icon.classList.toggle('fa-caret-down');
        icon.classList.toggle('fa-caret-up');

        // Add your logic to toggle the content or perform other actions
        // For now, let's just log a message
        console.log('Button clicked!');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const collapsibleBtn = document.getElementById('collapsibleBtn3');
    const icon = document.getElementById('icon3');

    collapsibleBtn.addEventListener('click', function () {
        // Toggle the 'fa-caret-down' and 'fa-caret-up' classes on the icon
        icon.classList.toggle('fa-caret-down');
        icon.classList.toggle('fa-caret-up');

        // Add your logic to toggle the content or perform other actions
        // For now, let's just log a message
        console.log('Button clicked!');
    });
});
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function getSelectedItems() {
    const form = document.getElementById('itemForm');
    const checkboxes = form.querySelectorAll('input[name="items"]:checked');
    const selectedItems = Array.from(checkboxes).map(checkbox => checkbox.value);

    if (selectedItems.length > 0) {
        alert('Selected items: ' + selectedItems.join(', '));
    } else {
        alert('Please select at least one item.');
    }
}
function clearAll() {
    const form = document.getElementById('itemForm');
    const checkboxes = form.querySelectorAll('input[name="items"]');

    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

function getSelectedItems() {
    const form = document.getElementById('itemForm2');
    const checkboxes = form.querySelectorAll('input[name="items"]:checked');
    const selectedItems = Array.from(checkboxes).map(checkbox => checkbox.value);

    if (selectedItems.length > 0) {
        alert('Selected items: ' + selectedItems.join(', '));
    } else {
        alert('Please select at least one item.');
    }
}
function clearAll() {
    const form = document.getElementById('itemForm2');
    const checkboxes = form.querySelectorAll('input[name="items"]');

    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}
const apiUrl = 'https://be-loa.adaptable.app/product/list/-1';
function getData() {
    fetch(apiUrl)
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Network error');
            }
            return resp.json();
        })
        .then(data => {
            const dataresp = data.data;
            // console.log('data list: ', dataresp);
            dataresp.forEach(item => {
                console.log('item return: ', item);
                // Create a card div
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('card');

                // Create an image div
                const imgDiv = document.createElement('div');
                imgDiv.classList.add('card-img');

                // Create an img element
                const imgElement = document.createElement('img');
                imgElement.src = item.img;
                imgElement.alt = 'img';
                imgElement.classList.add('cover-image');
                imgElement.addEventListener('mouseover', () => {
                    imgElement.src = item.img_hover; // Change the source to img_hover
                });

                // Add a mouseout event listener to revert to the original image on hover out
                imgElement.addEventListener('mouseout', () => {
                    imgElement.src = item.img; // Change the source back to the original img
                });

                // Append the img element to the img div
                imgDiv.appendChild(imgElement);

                // Create a description div
                const descDiv = document.createElement('div');
                descDiv.classList.add('card-desc');

                // Create a div for content within descDiv
                const contentDesdiv = document.createElement('div');
                contentDesdiv.classList.add('same-line');

                // Create a titleText element
                const titleText = document.createElement('p');
                titleText.innerHTML = 'Tên sản phẩm: ';

                // Append titleText to contentDesdiv
                contentDesdiv.appendChild(titleText);

                // Create a title element
                const title = document.createElement('p');
                title.innerHTML = item.product_name;

                // Append title to contentDesdiv
                contentDesdiv.appendChild(title);

                // Append contentDesdiv to descDiv
                descDiv.appendChild(contentDesdiv);

                const priceDiv = document.createElement('div');
                priceDiv.classList.add('same-line');

                const priceTitle = document.createElement('p');
                priceTitle.innerHTML = 'Giá: ';
                priceDiv.appendChild(priceTitle);
                const price = document.createElement('p');
                price.innerHTML = item.price;

                // Append title to contentDesdiv
                contentDesdiv.appendChild(price);
                descDiv.appendChild(priceDiv);
                priceDiv.appendChild(price);

                const navigateDiv = document.createElement('div');
                navigateDiv.classList.add('button-div');
                const navigate = document.createElement('a');
                navigate.href = `../Detail/detail.html?id=${item.id}`;
                navigate.innerHTML = 'Chi tiết';
                navigate.classList.add('button-navigate');
                navigateDiv.appendChild(navigate);
                // Append descDiv to cardDiv
                descDiv.appendChild(navigateDiv);
                cardDiv.appendChild(descDiv);

                // Append cardDiv to container
                container.appendChild(cardDiv);
                // Append the img div and desc div to the card div
                cardDiv.appendChild(imgDiv);
                cardDiv.appendChild(descDiv);

                // Append the card div to the container
                container.appendChild(cardDiv);
            });
        })
        .catch(err => {
            console.log('err: ', err);
        });
}
getData();
const data = [
    { id: 1, img: '../../imgs/demo3.jpg', img_hover: '../../imgs/demo4.jpg', price: '3,500,000', title: 'Loa 1', href: '../Detail/detail.html' },
    { id: 2, img: '../../imgs/demo1.jpg', img_hover: '../../imgs/demo2.jpg', price: '4,500,000', title: 'Loa 2', href: '../Detail/detail.html' },
    { id: 3, img: '../../imgs/demo4.jpg', img_hover: '../../imgs/demo2.jpg', price: '3,000,000', title: 'Loa 3', href: '../Detail/detail.html' },
    { id: 4, img: '../../imgs/demo3.jpg', img_hover: '../../imgs/demo2.jpg', price: '2,500,000', title: 'Loa 4', href: '../Detail/detail.html' },
    { id: 5, img: '../../imgs/demo2.jpg', img_hover: '../../imgs/demo3.jpg', price: '4,500,000', title: 'Loa 5', href: '../Detail/detail.html' },
    { id: 6, img: '../../imgs/demo1.jpg', img_hover: '../../imgs/demo3.jpg', price: '5,500,000', title: 'Loa 6', href: '../Detail/detail.html' },
];
const container = document.getElementById('listItem');

// Loop through the data and create elements
