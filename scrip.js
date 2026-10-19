
const shoes = {
    samba: {
        brand: "adidas",
        name: "samba",
        description: "sepatu klasik untuk gaya kasual sehari-hari.",
        price: "Rp1.750.000",
        image: "adidas-samba.jpeg"
    },
    "evo-black": {
        brand: "adidas",
        name: "adizero evo sl black iron",
        description: "sepatu sporty dengan desain modern.",
        price: "Rp2.300.000",
        image: "adizero-black.jpeg"
    },
    "evo-white": {
        brand: "adidas",
        name: "adizero evo sl men's shoes white",
        description: "sepatu putih untuk tampilan sporty.",
        price: "Rp2.500.000",
        image: "adizero-white.jpeg"
    },
    caven: {
        brand: "puma",
        name: "puma caven skate shoes white dark green",
        description: "sepatu low top bergaya skate.",
        price: "Rp1.999.000",
        image: "puma-caven.jpeg"
    },
    rickie: {
        brand: "puma",
        name: "puma rickie classic white cool light gray",
        description: "sepatu kasual dengan warna netral.",
        price: "Rp2.800.000",
        image: "puma-rickie.jpeg"
    },
    speedcat: {
        brand: "puma",
        name: "puma speedcat black mauve mist pink",
        description: "sepatu dengan desain ramping dan sporty.",
        price: "Rp2.850.000",
        image: "puma-speedcat.jpeg"
    },
    dunk: {
        brand: "nike",
        name: "nike dunk low retro grey fog",
        description: "sepatu low top bergaya streetwear.",
        price: "Rp1.590.000",
        image: "nike-dunk.jpeg"
    },
    shox: {
        brand: "nike",
        name: "nike shox r4 black metallic silver",
        description: "sepatu dengan desain futuristik.",
        price: "Rp1.870.000",
        image: "nike-shox.jpeg"
    },
    af1: {
        brand: "nike",
        name: "nike air force 1 white black",
        description: "sepatu ikonik untuk gaya sehari-hari.",
        price: "Rp1.900.000",
        image: "nike-air-foce.jpeg"
    }
};

const gallerySection = document.querySelector(".container");
const detailPanel = document.getElementById("detail-panel");
const aboutSection = document.getElementById("about");

document.querySelectorAll(".detail-link").forEach(function(button) {
    button.addEventListener("click", function(event) {
        event.preventDefault();

        const shoe = shoes[this.dataset.id];

        if (!shoe) {
            alert("data sepatu tidak ditemukan!");
            return;
        }

        document.getElementById("detail-brand").textContent =
            shoe.brand.toUpperCase();

        document.getElementById("detail-name").textContent =
            shoe.name;

        document.getElementById("detail-description").textContent =
            shoe.description;

        document.getElementById("detail-price").textContent =
            shoe.price;

        document.getElementById("detail-image").src =
            shoe.image;

        document.getElementById("detail-image").alt =
            shoe.name;

        gallerySection.hidden = true;

        if (aboutSection) {
            aboutSection.hidden = true;
        }

        detailPanel.hidden = false;
        detailPanel.scrollIntoView({ behavior: "smooth" });
    });
});

document.getElementById("close-detail").addEventListener("click", function() {
    detailPanel.hidden = true;
    gallerySection.hidden = false;

    if (aboutSection) {
        aboutSection.hidden = false;
    }

    gallerySection.scrollIntoView({ behavior: "smooth" });
});
