const sampleListings = [
    {
      title: "SurveyMax 2.0",
      description:
        "Type: Surveillance Battery: 5200 mAh Flight Time: 30 mins Use: Urban planning, real estate",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/1a/05/bc/1a05bc3a2ec7133a446da830c1be06ee.jpg",
      },
      price: 12000,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Drone DJI Air 2S",
      description:
        "Camera: 20 MP, 1-inch CMOS sensor, 5.4K video at 30 fps, 4x digital zoom. Flight Time:Up to 31 minutes. Range: 12 km with OcuSync 3.0. Speed: Max 68 km/h. Safety:Obstacle detection in 4 directions (front, back, up, down). Features: MasterShots, ActiveTrack 4.0, Hyperlapse, and QuickShots. Applications:Ideal for photography, videography, real estate, and surveys. Extras:Includes remote controller, extra batteries, and carrying case. Disclaimer: Specifications may vary based on availability. Images are for representation purposes only.",
      image: {
        filename: "listingimage",
        url: "https://rentit4me.com/assets/frontend/images/listings/post-3199/64be62282f564.jpeg",
      },
      price: 12000,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Drone DJI Air 2S with Smart Controller Remote",
      description:
        "Camera:20 MP, 1-inch CMOS sensor, 5.4K video at 30 fps, 4x digital zoom.",
      image: {
        filename: "listingimage",
        url: "https://rentit4me.com/assets/frontend/images/listings/post-3172/6752ac745556d.jpg",
      },
      price: 11000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Drone Phantom 4 Pro",
      description:
        "Get ready to capture amazing shots with the Drone Phantom 4 Pro. This top-of-the-line drone is perfect for anyone who wants high-quality aerial photos and videos. It comes with a powerful camera that shoots clear 4K video and sharp 20MP photos.",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/52/76/e4/5276e4f91f65bd3926bc619f97115b16.jpg",
      },
      price: 20500,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Tactical Raven M5",
      description:
        "et high-quality thermal imaging at an affordable price with our thermal drone.  Perfect for professionals who need precise and reliable data, this drone is great for tasks like search and rescue, inspections, and monitoring. Key Features: Clear Thermal Camera:Captures detailed thermal images for accurate results. Advanced Technology:Works well in different lighting conditions. Easy to Use:Simple controls make it accessible for everyone. Affordable Rental:Top technology without the high cost of buying. Versatile Use:Ideal for various professional applications. Our thermal drone offers excellent value and performance. Rent it today for dependable, high-quality imaging at a budget-friendly rate.",
      image: {
        filename: "listingimage",
        url: "https://rentit4me.com/assets/frontend/images/listings/post-1050/643fd2ae644b5.jpeg",
      },
      price: 11800,
      location: "Portland",
      country: "United States",
    },
    {
      title: "DJI Phantom 4 Drone",
      description:
        "For camera additionally, one cheque of an amount equivalent to 50% MRP of the product needs to be shared. This will be collected at the time of delivery.",
      image: {
        filename: "listingimage",
        url: "https://cdn.rentickle.com/media/catalog/product/cache/1/thumbnail/1024x576/b58515f018eb873dafa430b6f9ae0c1e/d/j/dji_phantom4_drone_0.png",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Elevate V1 Drone",
      description:
        "Packed with cutting-edge technology and intuitive features, the Elevate Drone empowers you to capture stunning visuals with ease, whether you're a seasoned pilot or just starting your aerial journey.",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/61/11/96/6111968d03631abd06222588114ebf70.jpg",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "RescueOne R4",
      description:
        "Developed to meet the rigorous standards of the United States Air Force, the IF1200 stands out as a leader in flight time and efficiency for industrial, commercial, and enterprise applications.",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/c9/9c/09/c99c0954b64e2f6a3d2788cf0d0b445c.jpg",
      },
      price: 110000,
      location: "Los Angeles",
      country: "United States",
    },
    {
      title: "Ramokdu Drones",
      description:
        "4K Ultra Clear Camera, 5G FPV: Capture stunning images with a 4K camera and 5GHz FPV transmission up to 1968 ft. For optimal video quality, use an SD card.",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/7d/49/f1/7d49f198823bb0041db1626f5a2ae0b4.jpg",
      },
      price: 12200,
      location: "Verbier",
      country: "Switzerland",
    },
    {
      title: "Guardian Hawk V3",
      description:
        "Night Optics: Military grade Speed: 85 km/h GPS Jam-proof: Yes Heat Masking: Yes",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/af/ce/50/afce507273b9b80f8e054fcaf3202a26.jpg",
      },
      price: 9200,
      location: "Serengeti National Park",
      country: "Tanzania",
    },
    {
      title: "Reaper Scout X",
      description:
        "Dual Armament Mounts (non-functional demo) Flight Time: 70 mins AI Auto Tracking: Yes Range: 20 km ",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/ba/3c/19/ba3c19b8caee7560e42730470d93627e.jpg",
      },
      price: 18000,
      location: "Amsterdam",
      country: "Netherlands",
    },
    {
      title: "Unmanned Aerial Vehicle -USA",
      description:
        "Model Name: SkyEye S100 Camera: 4K UHD with 3-axis gimbal stabilization Flight Time: 30 mins Range: 5 km Battery: 5200 mAh LiPo Speed: Max 50 km/h Payload: 1.2 kg Features: GPS + GLONASS, Auto Return, Obstacle Avoidance ",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/a7/33/1a/a7331a2fb6b84bb7ae9e0528271e108a.jpg",
      },
      price: 160000,
      location: "Fiji",
      country: "Fiji",
    },
    {
      title: "AI Military Drone  ",
      description:
        "Model Name: FalconStrike M12 Camera: 8K optical + Night Vision + Thermal fusion Flight Time: 60 mins Range: 15 km Battery: 10000 mAh Dual Li-ion Speed: Max 80 km/h Payload: 5 kg Armor: Bullet-resistant shell (Kevlar composite) Features: AI Path Planning, Stealth Mode, Live Satellite Sync ",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/7d/a5/ca/7da5ca460dd6a3d9bdcedc679670690c.jpg",
      },
      price: 3000000,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "SkyWatcher X1",
      description:
        "Camera: 4K HD Range: 4.5 km Flight Time: 28 mins Battery: 4800 mAh Payload: 1.1 kg",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/38/3e/7d/383e7d3e3c32e74a641b4b06cc588c84.jpg",
      },
      price: 12000000,
      location: "Phuket",
      country: "Thailand",
    },
    {
      title: "AeroScout 350",
      description:
        "Camera: 2.7K with stabilization Range: 3 km Flight Time: 25 mins Features: Auto-return, Altitude hold.",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/eb/ba/5f/ebba5f40e267000da268ea1458113d7e.jpg",
      },
      price: 1100900,
      location: "Scottish Highlands",
      country: "United Kingdom",
    },
    {
      title: "HawkEye V2",
      description:
        "Camera: 1080p Range: 2 km Flight Time: 20 mins Special: Foldable design",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/86/de/e0/86dee01815ddc110aa5dfc7149748081.jpg",
      },
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "SkyZoom Lite",
      description:
        "Camera: 4K wide-angle lens Range: 6 km Flight Time: 35 mins Extra: Follow Me mode",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/04/c8/50/04c850169439a5221dd192a97f7faf5b.jpg",
      },
      price: 1100,
      location: "Montana",
      country: "United States",
    },
    {
      title: "FlyPro Scout",
      description:
        "Camera: 4K + night mode Range: 5.2 km Battery: 5500 mAh Obstacle Avoidance: Yes",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/f0/54/cf/f054cf1c6ff476291325b47309f6895b.jpg",
      },
      price: 16000,
      location: "Mykonos",
      country: "Greece",
    },
    {
      title: "FalconStrike M12",
      description:
        "Camera: 8K + Thermal + Night Vision Range: 15 km Armor: Kevlar shell Flight Time: 60 mins",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/aa/4e/60/aa4e605c7f271f5248b0767b85094bf9.jpg",
      },
      price: 2000,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "ThermoX T1",
      description:
        "Thermal Sensor: 320x240 Flight Time: 27 mins Range: 3.5 km Dual Camera: Yes",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/95/14/03/9514030ddfd723fb2d4bd0c403bc41bf.jpg",
      },
      price: 1600,
      location: "Charleston",
      country: "United States",
    },
    {
      title: "FireFly T5",
      description:
        "Thermal Camera: FLIR Lepton Visible Cam: 1080p Battery: 6000 mAh Detection: Heat zones & hotspots",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/6e/6c/12/6e6c129f2219893a2cb516c4f2180428.jpg",
      },
      price: 6000,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "HeatScope V8",
      description:
        "Thermal Resolution: 640x480 Flight Time: 30 mins Payload: 1 kg AI Heatmap: Enabled",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/8d/1d/1b/8d1d1b681366dd8cc90684a92757eb88.jpg",
      },
      price: 45000,
      location: "New Hampshire",
      country: "United States",
    },
    {
      title: "TempVision 360",
      description:
        "Sensor: FLIR Duo Pro R Dual Video Stream: Yes Range: 4 km Live Analytics: Yes",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/1a/41/23/1a41233c4a87e38722d282335f6fe44f.jpg",
      },
      price: 6000,
      location: "Maldives",
      country: "Maldives",
    },
    {
      title: "NightSurge T9",
      description:
        "Features: Thermal fusion + Night vision Max Speed: 40 km/h Flight Time: 33 mins Rugged Design: Weatherproof",
      image: {
        filename: "listingimage",
        url: "https://i.pinimg.com/736x/e7/62/8b/e7628b5136175c08b1f369ed281f0cbc.jpg",
      },
      price: 100000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "FireFly T5",
      description:
        "Dual Armament Mounts (non-functional demo) Flight Time: 70 mins AI Auto Tracking: Yes Range: 20 km ",
      image: {
        filename: "listingimage",
        url: "https://m.media-amazon.com/images/I/51UNpTjs6rS._SX425_.jpg",
      },
      price: 45000,
      location: "Costa Rica",
      country: "Costa Rica",
    },
  ];
  
  module.exports = { data: sampleListings };