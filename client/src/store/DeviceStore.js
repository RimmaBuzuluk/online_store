import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Холодильник" },
      { id: 2, name: "Смартфоны" },
      { id: 3, name: "Ноутбуки" },
      { id: 4, name: "Телевизоры" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "Asus" },
      { id: 5, name: "Acer" },
    ];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 2500,
        rating: 5,
        img: "8ba47105-cd74-4a47-8c49-5a1696e541ea",
      },
      {
        id: 2,
        name: "Iphone 12 pro",
        price: 2500,
        rating: 5,
        img: "8ba47105-cd74-4a47-8c49-5a1696e541ea",
      },
      {
        id: 3,
        name: "Iphone 12 pro",
        price: 2500,
        rating: 5,
        img: "8ba47105-cd74-4a47-8c49-5a1696e541ea",
      },
      {
        id: 4,
        name: "Iphone 12 pro",
        price: 2500,
        rating: 5,
        img: "8ba47105-cd74-4a47-8c49-5a1696e541ea",
      },
      {
        id: 5,
        name: "Iphone 12 pro",
        price: 2500,
        rating: 5,
        img: "8ba47105-cd74-4a47-8c49-5a1696e541ea",
      },
      {
        id: 6,
        name: "Iphone 12 pro",
        price: 2500,
        rating: 5,
        img: "8ba47105-cd74-4a47-8c49-5a1696e541ea",
      },
      {
        id: 7,
        name: "Iphone 12 pro",
        price: 2500,
        rating: 5,
        img: "8ba47105-cd74-4a47-8c49-5a1696e541ea",
      },
    ];

    this._selectedType = {};

    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
