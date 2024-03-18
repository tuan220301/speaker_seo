// Replace 'https://api.example.com/data' with the actual API endpoint you want to fetch data from

var buttonData = [];
const slideImg = document.getElementById('slideImg');
const slider = slideImg.querySelector('.slider');
const title = document.getElementById('product_name');
const id = document.getElementById('id');
const model = document.getElementById('model');
const price = document.getElementById('price');
const product_name_table = document.getElementById('product_name_table');
const brand_table = document.getElementById('brand_table');
const model_table = document.getElementById('model_table');
const power_table = document.getElementById('power_table');
const time_is_battery_table = document.getElementById('time_is_battery_table');
const time_is_use_table = document.getElementById('time_is_use_table');
const adapter_table = document.getElementById('adapter_table');
const many_speaker_table = document.getElementById('many_speaker_table');
const length_table = document.getElementById('length_table');
const treble_table = document.getElementById('treble_table');
const connect_wireless_table = document.getElementById('connect_wireless_table');
const connect_micro_wireless_table = document.getElementById('connect_micro_wireless_table');
const connect_other_table = document.getElementById('connect_other_table');
const port_wired_micro_table = document.getElementById('port_wired_micro_table');
const width_table = document.getElementById('width_table');
const heigh_table = document.getElementById('heigh_table');
const weight_table = document.getElementById('weight_table');
const material_table = document.getElementById('material_table');
const color_table = document.getElementById('color_table');
const frequency_table = document.getElementById('frequency_table');
const many_bass_table = document.getElementById('many_bass_table');
const loading = document.getElementById('loading-overlay');
const contentLoaded = document.getElementById('content');
const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get('id');
const apiUrl = `https://be-loa.adaptable.app/product/detail/${idParam}`;
// Make a GET request using the Fetch API
function getData() {
    loading.style.display = 'flex';
    contentLoaded.style.display = 'none';
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const dataresp = data.data;
            title.innerHTML = dataresp.product_name;
            id.innerHTML = dataresp.id;
            model.innerHTML = dataresp.model;
            let formatPrice = dataresp.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
            price.innerHTML = formatPrice;
            product_name_table.innerHTML = dataresp.product_name;
            brand_table.innerHTML = dataresp.brand;
            model_table.innerHTML = dataresp.model;
            power_table.innerHTML = dataresp.power;
            time_is_battery_table.innerHTML = dataresp.time_is_battery;
            time_is_use_table.innerHTML = dataresp.time_is_use;
            adapter_table.innerHTML = dataresp.adapter;
            many_speaker_table.innerHTML = dataresp.many_speaker;
            length_table.innerHTML = dataresp.length + ' cm';
            width_table.innerHTML = dataresp.width + ' cm';
            heigh_table.innerHTML = dataresp.height + ' cm';
            weight_table.innerHTML = dataresp.weight + ' kg';
            treble_table.innerHTML = dataresp.treble;
            connect_micro_wireless_table.innerHTML = dataresp.connect_micro_wireless;
            connect_other_table.innerHTML = dataresp.connect_other;
            connect_wireless_table.innerHTML = dataresp.connect_wireless;
            port_wired_micro_table.innerHTML = dataresp.port_wired_micro;
            material_table.innerHTML = dataresp.material;
            color_table.innerHTML = dataresp.color;
            frequency_table.innerHTML = dataresp.frequency;
            many_bass_table.innerHTML = dataresp.many_bass;
            buttonData = dataresp.image_url;
            if (buttonData.length > 0) {
                buttonData.forEach((btn, index) => {
                    console.log('btn: ', btn);
                    const slide = document.createElement('div');
                    slide.classList.add('slide');

                    const img = document.createElement('img');
                    img.src = btn;
                    img.alt = `Slide ${btn.index}`;
                    img.classList.add('cover-image');

                    slide.appendChild(img);
                    slider.appendChild(slide);
                });
            }
            // Process the retrieved user data
            loading.style.display = 'none';
            contentLoaded.style.display = 'block';
            console.log('User Data:', data);
        })
        .catch(error => {
            loading.style.display = 'none';
            contentLoaded.style.display = 'block';
            console.error('Error:', error);
        });

}
getData();


let currentIndex = 0;

function showSlide(index) {
    if (index < 0) {
        index = buttonData.length - 1;
    } else if (index >= buttonData.length) {
        index = 0;
    }

    currentIndex = index;
    const translateXValue = -currentIndex * 100 + '%';
    slider.style.transform = `translateX(${translateXValue})`;
}
function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

