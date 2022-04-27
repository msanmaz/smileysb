require("./loadenv");
const path = require("path");
const fs = require("fs");

const admin = require("firebase-admin");
var serviceAccount = require("./credentials.json");

const CACHE_PATH = path.resolve(process.cwd(), "cache.json");

!admin.apps.length
  ? admin
      .initializeApp({ credential: admin.credential.cert(serviceAccount) })
      .firestore()
  : admin.app().firestore();

let db = admin.firestore();

// Controllers

const fetchAllHouses = async () => {
  let products = [];

  const logCities = async () => {
    let citiesRef = db.collection("hair");
    let allCities = await citiesRef.get();
    for (const doc of allCities.docs) {
      products.push({ ...doc.data(), id: doc.id });
    }
  };

  await logCities();

  return products;
};


const fetchAllSale = async () => {
    let allSale = [];
  
    const logCities = async () => {
      let citiesRef = db.collection("houses").where('Durum','==','Satilik');
      let allCities = await citiesRef.get();
      for (const doc of allCities.docs) {
        products.push({ ...doc.data(), id: doc.id });
      }
    };
  
    await logCities();
  
    return allSale;
  };

  const fetchAllRental = async () => {
    let allRental = [];
  
    const logCities = async () => {
      let citiesRef = db.collection("houses").where('Durum','==','Kiralik');
      let allCities = await citiesRef.get();
      for (const doc of allCities.docs) {
        products.push({ ...doc.data(), id: doc.id });
      }
    };
  
    await logCities();
  
    return allRental;
  };

const fetchCommon = async () => {
  const [products] = await Promise.all([fetchAllHouses()]);
  return { products };
};

// Build cache

const buildCache = async (force) => {
  const parent_dir = path.dirname(CACHE_PATH);

  if (!fs.existsSync(parent_dir)) {
    console.log(
      `Cache directory '${parent_dir}' doesn't exist, attempting to create...`
    );
    fs.mkdirSync(parent_dir, { recursive: true });
  }

  const cache_exists = fs.existsSync(CACHE_PATH);

  if (cache_exists) {
    console.log(`Cache file at ${CACHE_PATH} already exists.`);
  }

  if (cache_exists && !force) {
    const ts = Date.now();
    const { mtimeMs } = fs.statSync(CACHE_PATH);

    const dif = parseInt((ts - mtimeMs) / 60000);
    console.log(`Cache was created ${dif} minutes ago.`);
    if (dif < 10) {
      console.log("Using current cache. To overwrite, use -f");
      return;
    }
  }

  console.log("Fetching...");
  const data = await fetchCommon();
  console.log("Fetched");

  fs.writeFileSync(CACHE_PATH, JSON.stringify(data), "utf8");
  console.log(`Cache file written to ${CACHE_PATH}`);
  process.exit();
};

// Read cache

const readCache = async () => {
  if (fs.existsSync(CACHE_PATH)) {
    return JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
  }
  console.error(`Cache file not found at ${CACHE_PATH}!`);
  const data = await fetchCommon();
  try {
    fs.writeFileSync(CACHE_PATH, JSON.stringify(data), "utf8");
  } catch (error) {
    console.error(error);
  }
  console.log(`Cache file regenerated at ${CACHE_PATH}`);
  return data;
};

// Clear cache
const deleteCache = () => {
  if (fs.existsSync(CACHE_PATH)) {
    try {
      fs.unlinkSync(CACHE_PATH);
      console.log("Cache file deleted");
    } catch (error) {
      console.error(error.toString());
    }
  } else {
    console.log("Clear cache - file not found");
  }
};

// Exports

module.exports = {
  CACHE_PATH,
  fetchCommon,
  fetchAllHouses,
  readCache,
  deleteCache
};

// Main

if (require.main === module) {
  const arg = process.argv[2];
  if (arg === "--clear") deleteCache();
  else buildCache(arg === "-f");
}