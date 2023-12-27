interface Nav {
  id: number;
  title: string;
  link: string;
}

interface Contact {
  id: number;
  text: string;
  icon: IconType;
}

interface PhoneNumb {
  id: number;
  number: string;
}

interface Country {
  id: number;
  country: string;
}

interface AdminNav {
  id: number;
  title: string;
  link: string;
}

interface CarImg {
  carId: string;
  createdAt: string;
  id: number;
  name: string;
  updatedAt: string;
  url: string;
}

interface Product {
  id: number;
  Hatch: null | string;
  Panorama: null | boolean;
  camera: null | boolean;
  cars_imgs: CarImg[];
  cars_videos: [] | CarImg[];
  checked: number;
  code: string;
  color: string;
  country: null | string;
  createdAt: string;
  currency: null | string;
  cylinders: null | string;
  description: null | string;
  driveShaft: null | string;
  engine: string;
  firm: string;
  leather: null | string;
  mainPhoto: string;
  metersRun: string;
  model: string;
  multimedia: null | boolean;
  name: string;
  nid: string;
  o_city: null | string;
  o_name: null | string;
  o_phone: null | string;
  petrol: string;
  price: number;
  pullingWheels: string;
  salonColor: null | string;
  status: number;
  transmission: string;
  type: string;
  updatedAt: string;
  vehicleType: null | string;
  view: number;
  vin: null | string;
  vip: null | string;
  weel: null | number;
  year: string;
}

interface AllProducts {
  data: Product[];
  total: number;
}

interface Filter {
  id: 1;
  title: string;
  filterFields: string[] | [];
}

interface CheckedFields {
  id: number;
  title: string;
  checked: any;
}
